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
