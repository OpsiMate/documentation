---
sidebar_position: 2
tags: [Alerts]
---

# Grafana Integration

The **Grafana integration** lets Grafana push alert state changes to OpsiMate with a Grafana **Webhook** contact point.

OpsiMate does not poll Grafana for alerts, and Grafana alert ingestion does not require a Grafana API key.

## Webhook URL

Configure your Grafana contact point to send alerts to your OpsiMate server:

```text
http://localhost:3001/api/v1/alerts/custom/grafana?api_token={your_api_token}
```

Replace `{your_api_token}` with the API token configured in your OpsiMate server.

## API Token Configuration

The API token used in the webhook URL is managed by OpsiMate through an environment variable:

- **Env var**: `API_TOKEN`
- **Default value**: `opsimate`

This value is also used as the default for the `api_token` query parameter in the webhook URL.

If you are using the **simple deployment** (via the provided `docker-compose.yml`), the `API_TOKEN` environment variable is already defined there for you.

Make sure your OpsiMate server is started with `API_TOKEN` set (or rely on the default), and use the same value in the Grafana webhook URL.

## Setting Up the Webhook in Grafana

To send Grafana alerts to OpsiMate via webhook:

1. In Grafana, go to **Alerting > Contact points**.
2. Click **Add contact point**.
3. Give the contact point a name, for example `opsimate-webhook`.
4. Set **Integration** to **Webhook**.
5. Set the **URL** to your OpsiMate endpoint, for example:
   - `http://your-opsimate-host/api/v1/alerts/custom/grafana?api_token={your_api_token}`
6. Keep the HTTP method as `POST` and save the contact point.
7. In **Alerting > Notification policies**, route the alerts you want in OpsiMate to this contact point.
8. Make sure resolved notifications are sent too, so OpsiMate can archive alerts when they clear.

Grafana stores the webhook URL in plain text and shows it back unmasked, so a token in the URL is visible to anyone who can read the contact point. Where your Grafana offers **Extra Headers** on the webhook integration, leave the token out of the URL and send it as the `x-api-token` header instead; OpsiMate accepts either. The as-code examples below do that.

## Provisioning the Contact Point as Code

OpsiMate reads Grafana's **default** webhook payload, so there is no custom payload template to maintain. The contact point is a plain webhook, which makes it a few lines in Grafana's file provisioning or in Terraform.

### File provisioning

Drop this into Grafana's provisioning directory (for example `/etc/grafana/provisioning/alerting/opsimate.yaml`). `$OPSIMATE_API_TOKEN` is read from Grafana's environment at load time, so the token never sits in the file.

```yaml
apiVersion: 1

contactPoints:
  - orgId: 1
    name: OpsiMate
    receivers:
      - uid: opsimate
        type: webhook
        settings:
          url: https://opsimate.example.com:3001/api/v1/alerts/custom/grafana
          httpMethod: POST
          headers:
            x-api-token: $OPSIMATE_API_TOKEN
        # Keep resolve messages on: OpsiMate archives the alert when Grafana resolves it.
        disableResolveMessage: false

policies:
  - orgId: 1
    receiver: OpsiMate
    group_by: ['grafana_folder', 'alertname']
```

The `policies` block makes OpsiMate the default receiver. To send only some alerts, keep your existing root policy and add a `routes` entry with `receiver: OpsiMate` and an `object_matchers` list instead.

### Terraform

With the [Grafana Terraform provider](https://registry.terraform.io/providers/grafana/grafana/latest/docs/resources/contact_point):

```hcl
variable "opsimate_api_token" {
  type      = string
  sensitive = true
}

resource "grafana_contact_point" "opsimate" {
  name = "OpsiMate"

  webhook {
    url         = "https://opsimate.example.com:3001/api/v1/alerts/custom/grafana"
    http_method = "POST"
    headers = {
      "x-api-token" = var.opsimate_api_token
    }
  }
}

resource "grafana_notification_policy" "root" {
  contact_point = grafana_contact_point.opsimate.name
  group_by      = ["grafana_folder", "alertname"]
}
```

### Checking the connection

Grafana's **Test** button on the contact point sends a sample firing alert. The same thing from a shell, which also confirms the token and the URL:

```bash
curl -sS -X POST "https://opsimate.example.com:3001/api/v1/alerts/custom/grafana" \
  -H "x-api-token: $OPSIMATE_API_TOKEN" \
  -H "content-type: application/json" \
  -d '{"status":"firing","alerts":[{"status":"firing","labels":{"alertname":"Provisioning test","severity":"info"},"annotations":{"summary":"Grafana contact point works"},"startsAt":"2026-01-01T00:00:00Z","fingerprint":"provisioning-test"}]}'
```

A `200` with `success: true` means the alert is in OpsiMate's queue; resolve it there afterwards.

## Alerts

- **Firing** Grafana alerts create or update alerts in OpsiMate.
- **Resolved** Grafana alerts are archived automatically in OpsiMate.
- OpsiMate keys each alert by Grafana's per-alert `fingerprint`. If Grafana omits the fingerprint, OpsiMate derives a stable ID from the alert labels.
- Non-internal Grafana labels are preserved as OpsiMate alert tags.
- Internal Grafana labels such as `__alert_rule_uid__`, `__grafana_receiver__`, `datasource_uid`, `grafana_folder`, and `ref_id` are not stored as tags.

## Important Disclaimer

Grafana sends alerts via webhook only to HTTP endpoints it can reach.

- If Grafana runs outside your machine, it cannot call `localhost` on your OpsiMate server directly.
- For production use, deploy OpsiMate behind a reachable URL, reverse proxy, or secure tunnel so Grafana can reach the webhook endpoint.

## Official Resources

- **Grafana Website**: [https://grafana.com](https://grafana.com)
- **Webhook contact points**: [Grafana contact point documentation](https://grafana.com/docs/grafana/latest/alerting/configure-notifications/manage-contact-points/)
