---
sidebar_position: 4
tags: [Alerts]
---

# GCP Integration

The **GCP integration** lets you send alerts from Google Cloud Platform into OpsiMate using **webhook-based push notifications**.

Instead of OpsiMate pulling alerts from GCP, your GCP alerting policies **push alerts** directly to OpsiMate.

## Webhook URL

Configure your GCP notification channel to send alerts to your OpsiMate server:

```text
http://localhost:3001/api/v1/alerts/custom/gcp?api_token={your_api_token}
```

Replace `{your_api_token}` with the API token configured in your OpsiMate server.

## API Token Configuration

The API token used in the webhook URL is managed by OpsiMate through an environment variable:

- **Env var**: `API_TOKEN`
- **Default value**: `opsimate`

This value is also used as the default for the `api_token` query parameter in the webhook URL.

If you are using the **simple deployment** (via the provided `docker-compose.yml`), the `API_TOKEN` environment variable is already defined there for you.

Make sure your OpsiMate server is started with `API_TOKEN` set (or rely on the default), and use the same value in the GCP webhook URL.

## Setting Up the Webhook in GCP

To send alerts from GCP to OpsiMate via webhook:

1. In the **Google Cloud Console**, go to **Monitoring → Alerting**.
2. Open **Notification channels**.
3. Create or edit a **Webhook** notification channel.
4. Set the **Webhook URL** to your OpsiMate endpoint, for example:
   - `http://your-opsimate-host/api/v1/alerts/custom/gcp?api_token={your_api_token}`
5. Save the notification channel.
6. Attach this webhook notification channel to the alerting policies you want to forward to OpsiMate.

## Important Disclaimer

GCP sends alerts via webhook only to **publicly reachable HTTP endpoints**.

- If you are running OpsiMate locally (for example at `http://localhost:3001`), GCP **cannot** call this URL directly from the internet.
- For production use, deploy OpsiMate behind a **publicly accessible URL** (or expose it securely via tunneling / reverse proxy) so that GCP can reach the webhook endpoint.

Once configured, alerts pushed from GCP will appear in the **alerts table** in OpsiMate with the **GCP integration icon**, so you can easily identify their source.
