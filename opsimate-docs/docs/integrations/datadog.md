---
sidebar_position: 5
tags: [Alerts]
---

# Datadog Integration

The **Datadog integration** lets Datadog push monitor alerts to OpsiMate with a Datadog **Webhook**.

OpsiMate does not poll Datadog for alerts, and Datadog alert ingestion does not require a Datadog API key.

## Webhook URL

Configure your Datadog webhook to send alerts to your OpsiMate server:

```text
http://<your-opsimate-host>:3001/api/v1/alerts/custom/datadog?api_token={your_api_token}
```

Replace `{your_api_token}` with the API token configured in your OpsiMate server.

Instead of the `api_token` query parameter, you can send the token in an `X-API-Token` header. In the Datadog webhook, add it under **Custom headers**:

```json
{
  "X-API-Token": "{your_api_token}"
}
```

## API Token Configuration

The API token used in the webhook URL is managed by OpsiMate through an environment variable:

- **Env var**: `API_TOKEN`
- **Default value**: `opsimate`

If you are using the **simple deployment** (via the provided `docker-compose.yml`), the `API_TOKEN` environment variable is already defined there for you.

Make sure your OpsiMate server is started with `API_TOKEN` set (or rely on the default), and use the same value in the Datadog webhook.

## Setting Up the Webhook in Datadog

1. In Datadog, go to **Integrations > Webhooks**.
2. Click **New** to create a new webhook.
3. Give the webhook a name, for example `opsimate-alerts`.
4. Paste the webhook URL above into the **URL** field.
5. Set the **Payload** to this custom payload:

   ```json
   {
     "alert_id": "$ALERT_ID",
     "id": "$ALERT_CYCLE_KEY",
     "title": "$EVENT_TITLE",
     "message": "$EVENT_MSG",
     "alert_status": "$ALERT_STATUS",
     "alert_transition": "$ALERT_TRANSITION",
     "event_type": "$EVENT_TYPE",
     "link": "$LINK",
     "tags": "$TAGS",
     "alert_scope": "$ALERT_SCOPE",
     "date": "$DATE",
     "last_updated": "$LAST_UPDATED",
     "org": {
       "id": "$ORG_ID",
       "name": "$ORG_NAME"
     }
   }
   ```

6. If you want priority-based severity (see [Severity](#severity)), also add `"priority": "$ALERT_PRIORITY"` to the payload. Use `$ALERT_PRIORITY` (the monitor priority, P1–P5), not `$PRIORITY`, which is the event priority (`normal` / `low`).
7. Save the webhook.

## Attaching the Webhook to Monitors

1. Open the Datadog monitor you want in OpsiMate.
2. In the monitor's **Notify** section, add `@webhook-opsimate-alerts` (or `@webhook-` followed by the name you chose).
3. Save the monitor and trigger a test notification to check that the alert shows up in OpsiMate.

## How the Payload Is Read

- `id`, `title` and `date` are required. A body without them is rejected with HTTP 400.
- `id` identifies the alert. A later notification with the same `id` updates that alert. `$ALERT_CYCLE_KEY` stays the same from the time an alert triggers until it resolves, so the recovery notification matches the original alert. Don't use `$ID` here: it is a new event ID on every notification, so recoveries would never resolve the alert.
- `title` becomes the alert name and `message` becomes the summary.
- `link` becomes a **View in Datadog** link on the alert.

### Auto-Resolve

When `alert_transition` contains `Recovered`, OpsiMate resolves the alert with the same `id`.

### Tags

Every `key:value` entry in `$TAGS` becomes an alert tag. Entries without exactly one `:` are skipped.

### Severity

- A `severity:critical` (or `severity:warning` / `severity:info`) tag on the monitor wins.
- Otherwise the monitor's priority (`$ALERT_PRIORITY`) is used: P1 → critical, P2–P3 → warning, P4–P5 → info.
- Unknown or missing values → warning.

## The Configure Form

The Datadog card on the **Integrations** page still has a form with the Datadog URL, API key and Application key. Alert ingestion does not need these: the webhook above is all OpsiMate needs to receive Datadog alerts.

## Important Disclaimer

Datadog sends webhooks only to HTTP endpoints it can reach.

- Datadog runs in the cloud, so it cannot call `localhost` on your OpsiMate server directly.
- Deploy OpsiMate behind a reachable URL, reverse proxy, or secure tunnel so Datadog can reach the webhook endpoint.

## Official Resources

- **Datadog Website**: [https://www.datadoghq.com/](https://www.datadoghq.com/)
- **Documentation**: [https://docs.datadoghq.com/](https://docs.datadoghq.com/)
- **API Documentation**: [https://docs.datadoghq.com/api/](https://docs.datadoghq.com/api/)
- **Getting Started**: [https://docs.datadoghq.com/getting_started/](https://docs.datadoghq.com/getting_started/)
- **Webhooks integration**: [https://docs.datadoghq.com/integrations/webhooks/](https://docs.datadoghq.com/integrations/webhooks/)
