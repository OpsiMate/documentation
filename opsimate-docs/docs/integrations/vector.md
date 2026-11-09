---
sidebar_position: 8
tags: [Alerts]
---

# Vector Integration

[Vector](https://vector.dev) is an observability data pipeline: it collects logs and metrics, transforms them, and ships them to sinks. OpsiMate is an alert queue, not a log store, so the integration is about turning the **few events that deserve a person's attention** into alerts. Vector's built-in `http` sink does the delivery; a `remap` transform shapes each event into OpsiMate's [custom alert payload](./custom-alerts.md), and a `filter` in front keeps everything else out.

No OpsiMate-side configuration is needed. Any OpsiMate version with the custom alerts API works. The configuration below was verified with Vector 0.61.

## How it fits together

```text
logs ──▶ filter (only alert-worthy events) ──▶ remap (shape as an OpsiMate alert) ──▶ http sink ──▶ OpsiMate
```

Three rules keep the queue useful:

1. **Filter first.** Send errors, failed health checks, aggregated spikes. Never raw log volume.
2. **Give every alert a stable `id`.** The same problem must map to the same id so repeats update one alert instead of creating a new row each time. Build it from what identifies the problem (service, host, normalized message), not from a timestamp or log line number.
3. **Resolve when you can.** If your pipeline can observe recovery, send the same `id` with `"status": "resolved"`; otherwise operators resolve by hand.

## Configuration

A complete `vector.toml`. Replace the source with the one you already use (`file`, `kubernetes_logs`, `docker_logs`, `journald`, `kafka`, ...); everything after it is the integration.

```toml
# The API token stays out of the config file: one file per secret in this directory,
# referenced below as SECRET[store.<file name>]. Create it with:
#   mkdir -p /etc/vector/secrets && printf '%s' 'your-token' > /etc/vector/secrets/opsimate_token
[secret.store]
type = "directory"
path = "/etc/vector/secrets"

[sources.app_logs]
type = "file"
include = ["/var/log/app/*.log"]
decoding.codec = "json"          # one JSON object per line, e.g. {"level":"error","service":"checkout","host":"web-01","message":"payment provider timeout"}

# 1. Only alert-worthy events go further.
[transforms.only_errors]
type = "filter"
inputs = ["app_logs"]
condition = '.level == "error" || .level == "fatal"'

# 2. Shape each event as an OpsiMate alert (see the Custom Alerts API for every field).
[transforms.to_opsimate]
type = "remap"
inputs = ["only_errors"]
source = '''
service = string(.service) ?? "unknown"
host = string(.host) ?? "unknown"
msg = string(.message) ?? "error"
level = string(.level) ?? "error"
severity = "warning"
if level == "fatal" { severity = "critical" }

. = {
  # Stable per problem, so repeats update the same alert instead of adding rows.
  "id": "vector-" + service + "-" + host + "-" + downcase(replace(msg, r'[^A-Za-z0-9]+', "-")),
  "alertName": service + ": " + msg,
  "summary": msg + " on " + host,
  "severity": severity,
  "status": "firing",
  "tags": {
    "source": "vector",
    "service": service,
    "host": host,
    "level": level
  },
  "startsAt": format_timestamp!(now(), "%+")
}
'''

# 3. One alert per request to OpsiMate's custom alerts endpoint.
[sinks.opsimate]
type = "http"
inputs = ["to_opsimate"]
uri = "https://opsimate.example.com:3001/api/v1/alerts/custom"
method = "post"
encoding.codec = "json"
framing.method = "newline_delimited"
batch.max_events = 1                     # the endpoint takes exactly one alert per POST
request.headers."x-api-token" = "SECRET[store.opsimate_token]"
request.headers."content-type" = "application/json"
healthcheck.enabled = false              # the endpoint has no GET; use /health on the server instead if you want one
```

What each part does:

| Part | Why |
|---|---|
| `[secret.store]` | Vector no longer expands `${ENV_VAR}` in config files unless started with `--dangerously-allow-env-var-interpolation`. A secret store is the supported way to keep the token out of the file. The `exec` and `aws_secrets_manager` stores work the same way. |
| `filter` | Everything that passes becomes an alert. Tighten the condition before loosening it. |
| `remap` | Produces exactly the fields the custom alerts API accepts. `id`, `alertName` and `tags` are required; the rest is optional. VRL does not allow an `if` expression inside an object literal, which is why `severity` is computed first. |
| `batch.max_events = 1` | The endpoint parses one JSON object per request. Without this, Vector batches several events into one newline-delimited body and OpsiMate rejects it with a validation error. |
| `content-type` header | Vector's default for newline-delimited JSON is `application/x-ndjson`, which OpsiMate's JSON parser does not read. |
| `x-api-token` header | The value of your server's `API_TOKEN` setting. The query-string form `?api_token=...` also works, but keeps the token in URLs and logs. |

If you prefer the environment variable, start Vector with `--dangerously-allow-env-var-interpolation` (or set `VECTOR_DANGEROUSLY_ALLOW_ENV_VAR_INTERPOLATION=true`) and write `request.headers."x-api-token" = "${OPSIMATE_API_TOKEN}"`. Vector names the flag that way for a reason: the expanded value ends up in anything that prints the loaded configuration.

## Resolving alerts from the pipeline

If your logs carry recovery events, route them through a second `remap` that sends only the id and the resolved status. Both transforms feed the same sink.

```toml
[transforms.recovered]
type = "filter"
inputs = ["app_logs"]
condition = '.event == "recovered"'

[transforms.to_opsimate_resolve]
type = "remap"
inputs = ["recovered"]
source = '''
service = string(.service) ?? "unknown"
host = string(.host) ?? "unknown"
msg = string(.message) ?? "error"
. = {
  "id": "vector-" + service + "-" + host + "-" + downcase(replace(msg, r'[^A-Za-z0-9]+', "-")),
  "status": "resolved"
}
'''

[sinks.opsimate]
inputs = ["to_opsimate", "to_opsimate_resolve"]
# ... rest unchanged
```

The `id` expression must be identical in both transforms; that is what links the resolve to the firing alert. Re-sending a resolve for an unknown or already-resolved id is not an error.

## Verify it

1. Check the configuration: `vector validate vector.toml`.
2. Feed it a line by hand instead of waiting for a real error. With a `stdin` source in place of `file`:

   ```bash
   echo '{"level":"error","service":"checkout","host":"web-01","message":"payment provider timeout"}' | vector --config vector.toml
   ```

3. In OpsiMate, the Alerts page shows **checkout: payment provider timeout** with the `source: vector`, `service`, `host` and `level` tags. Send the same line again: the alert's updated time moves, and there is still one row.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Vector logs `Not retriable; dropping the request. reason="Default retry strategy: Unauthorized"` | The `x-api-token` header is missing or wrong. If you see the literal text `${OPSIMATE_API_TOKEN}` in OpsiMate's access log, interpolation is off; use the secret store or the flag above. |
| HTTP 400 `Validation error` | A required field is missing (`id`, `alertName`, `tags`), or several events were sent in one request. Check `batch.max_events = 1`. |
| Alerts pile up, one per log line | The `id` includes something unique per line (a timestamp, a request id). Build it from the problem, not the occurrence. |
| Nothing arrives, no errors | The `filter` condition matches nothing. With `api.enabled = true` in the config, `vector tap only_errors` shows what passes. |

## Related

- [Custom Alerts API](./custom-alerts.md): every field the payload accepts, and how resolve works.
- [Vector `http` sink reference](https://vector.dev/docs/reference/configuration/sinks/http/) and [secrets management](https://vector.dev/docs/reference/configuration/global-options/#secret).
