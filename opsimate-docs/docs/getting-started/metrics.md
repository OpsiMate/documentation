---
id: metrics
title: Prometheus metrics
sidebar_position: 4
---

# Prometheus metrics

The OpsiMate server exposes Prometheus metrics at `GET /metrics`. This page lists the endpoint's access rules, a scrape configuration, and every OpsiMate series with its labels.

## Endpoint and access

| | |
| --- | --- |
| Path | `/metrics` |
| Port | Backend port (default `3001` in the Compose file). Not under `/api/v1`. |
| Auth | Optional `METRICS_TOKEN` bearer token. Login and the API token do not apply. |
| Process | Server mode only. A worker-mode process runs background jobs and has no `/metrics`. |

- `METRICS_TOKEN` unset or empty: the endpoint is open to anyone who can reach the port.
- `METRICS_TOKEN` set: the request must send exactly `Authorization: Bearer <token>`. Anything else (no header, a wrong token, a different scheme) gets HTTP `401` with the plain-text body `unauthorized`.

See [Configuration](./configuration.md) for how `METRICS_TOKEN` is read.

## Scraping with Prometheus

```yaml title="prometheus.yml"
scrape_configs:
  - job_name: opsimate
    metrics_path: /metrics
    authorization:
      type: Bearer
      credentials: <your METRICS_TOKEN>
    static_configs:
      - targets: ['opsimate-backend:3001']
```

Use `credentials_file` instead of `credentials` to keep the token out of the config file. Without a token, leave out the `authorization` block entirely.

## OpsiMate metrics

### Gauges

| Metric | Labels | Meaning |
| --- | --- | --- |
| `opsimate_alerts` | `state` = `firing`, `silenced`, `resolved` | Current number of alerts in each state. All three are always reported, even at 0. |
| `opsimate_alerts_by_severity` | `state`, `severity` = `critical`, `warning`, `info` (`unknown` if none is stored) | The same counts split by severity. Only combinations that exist are reported. |
| `opsimate_firing_alerts_unassigned` | — | Firing alerts with no owner. |
| `opsimate_firing_alerts_unread` | — | Firing alerts nobody has opened yet. |
| `opsimate_oldest_firing_alert_age_seconds` | — | Age of the oldest firing alert, 0 when nothing is firing. |
| `opsimate_resources` | `kind` = `users`, `integrations`, `dashboards`, `enrichment_rules`, `mute_policies`, `actions`, `oncall_teams` | How many of each are configured. |
| `opsimate_event_loop_utilization` | — | Share of time (0–1) the server's event loop was busy since the previous scrape. Sustained 0.7 or more means requests are queueing. |

### Counters

| Metric | Labels | Meaning |
| --- | --- | --- |
| `opsimate_alerts_ingested_total` | `type` (source: `Custom`, `Grafana`, `GCP`, `Datadog`, `UptimeKuma`, `Zabbix`), `severity` | Alerts received from webhooks, new and updated. |
| `opsimate_alerts_resolved_total` | `mode` = `manual`, `auto`, `resolve_only` | Alerts resolved: `manual` by a user, `auto` by the source reporting recovery, `resolve_only` when a source sent a resolve for an alert that wasn't firing in OpsiMate and OpsiMate recorded it straight into Resolved. |
| `opsimate_alerts_silenced_total` | — | Silences applied. |
| `opsimate_alerts_unsilenced_total` | — | Silences ended: manually, by their timer running out, or by the daily silence reset. |
| `opsimate_actions_run_total` | `type` = `slack`, `teams`, `jira`, `http`; `outcome` = `success`, `error`, `sent` | Actions run on alerts. `sent` is an HTTP action set not to wait for a response. |
| `opsimate_callbacks_sent_total` | `event` (callback event, e.g. `silenced`, `resolved`, `action_run`), `outcome` = `success`, `error`, `dropped` | Alert callback deliveries. `error` is counted once, after retries; `dropped` means the callback's queue was full. |
| `opsimate_bulk_actions_total` | `action` = `silence`, `unsilence`, `resolve`, `assignOwner`, `comment` | Bulk requests, one per request whatever its size. |
| `opsimate_bulk_alerts_affected_total` | `action` | Alerts actually changed by bulk requests. |

### Histograms

| Metric | Labels | Meaning |
| --- | --- | --- |
| `opsimate_http_request_duration_seconds` | `method`, `route`, `status_code` | Request duration. `route` is the route pattern (e.g. `/api/v1/alerts/:id/silence`), never the raw URL. Requests that match no route share `route="unmatched"`. |
| `opsimate_ingest_batch_size` | — | Alerts written per ingest batch. Buckets 1, 2, 5, 10, 25, 50, 100, 250, 500. |
| `opsimate_snapshot_compute_duration_seconds` | `list` = `active`, `resolved` | Time to rebuild the full alert list the UI reads. |

### There is no `muted` state

"Firing" in these metrics means "not silenced", so `opsimate_alerts{state="firing"}`, `opsimate_firing_alerts_unassigned`, `opsimate_firing_alerts_unread` and `opsimate_oldest_firing_alert_age_seconds` include alerts that a mute policy currently mutes. That is on purpose: muting is worked out when the alert list is read, not stored, so a scrape doesn't evaluate it. The UI does show muted alerts separately, so readers will expect a `muted` value — there isn't one.

## Node.js and process metrics

`collectDefaultMetrics` is enabled with no prefix, so the endpoint also serves prom-client's standard `process_*` and `nodejs_*` metrics (CPU, memory, open file descriptors, event-loop lag, GC, heap). See the [prom-client default metrics](https://github.com/siimon/prom-client#default-metrics) for the full list.

## Example PromQL

```promql
# Alerts currently firing (not silenced)
opsimate_alerts{state="firing"}

# Ingest rate over the last five minutes
rate(opsimate_alerts_ingested_total[5m])

# 95th percentile request latency by route
histogram_quantile(0.95, sum by (le, route) (rate(opsimate_http_request_duration_seconds_bucket[5m])))
```
