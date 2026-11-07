---
sidebar_position: 5
tags: [Alerts]
---

# Uptime Kuma Integration

The **Uptime Kuma integration** lets you send alerts from Uptime Kuma into OpsiMate using **webhook-based push notifications**.

Instead of OpsiMate pulling status from Uptime Kuma, your Uptime Kuma notifications **push alerts** directly to OpsiMate.

## Webhook URL

Configure your Uptime Kuma notification to send alerts to your OpsiMate server.

Use your OpsiMate alerts webhook endpoint, for example:

```text
http://localhost:3001/api/v1/alerts/custom/uptimekuma?api_token={your_api_token}
```

Replace `{your_api_token}` with the API token configured in your OpsiMate server.

## API Token Configuration

The API token used in the webhook URL is managed by OpsiMate through an environment variable:

- **Env var**: `API_TOKEN`
- **Default value**: `opsimate`

This value is also used as the default for the `api_token` query parameter in the webhook URL.

If you are using the **simple deployment** (via the provided `docker-compose.yml`), the `API_TOKEN` environment variable is already defined there for you.

Make sure your OpsiMate server is started with `API_TOKEN` set (or rely on the default), and use the same value in the Uptime Kuma webhook URL.

## Setting Up the Webhook in Uptime Kuma

To send alerts from Uptime Kuma to OpsiMate via webhook:

1. In **Uptime Kuma**, go to **Settings → Notifications**.
2. Click **Setup Notification**.
3. Set **Notification Type** to **Webhook** and **Friendly Name** to `OpsiMate`.
4. Paste your OpsiMate webhook URL into the **Post URL** field, for example:
   - `http://your-opsimate-host/api/v1/alerts/custom/uptimekuma?api_token={your_api_token}`
5. Keep the **HTTP method** as `POST`.
6. Keep **Content Type** set to **JSON** (the default) and use Uptime Kuma's default payload. OpsiMate strictly validates the incoming body (`heartbeat`, `monitor`, and `msg` fields via `UptimeKumaWebhookPayloadSchema`), so custom payload bodies are rejected with HTTP **400**.
7. Click **Test** to verify the connection (see note below on how the test alert behaves).
8. Optionally enable **Default enabled** and **Apply to all existing monitors**, then click **Save** to finish setup.

## What OpsiMate Shows

When Uptime Kuma sends a webhook, OpsiMate maps the payload to an alert as follows:

| Field / Behavior | How OpsiMate Maps It |
|---|---|
| **Alert ID** | `UPTIMEKUMA_<monitor.id>` — one alert per monitor, updated in place on every heartbeat |
| **Firing** | `heartbeat.status` `0` (down) or `2` (pending) |
| **Resolved** | `heartbeat.status` `1` (up) automatically resolves the alert and moves it to the **Resolved** list |
| **Name** | The monitor's `pathName`, otherwise `name` |
| **Summary** | `heartbeat.msg`, otherwise the top-level `msg` |
| **Tags** | Each monitor tag becomes `name: value` (or `unknown` when the tag has no value) |
| **Started at** | `heartbeat.time` |
| **Test button** | Clicking **Test** in Uptime Kuma sends `{ heartbeat: null, monitor: null, msg }`; OpsiMate creates a firing alert named **Test Alert** (`"Test Alert by UptimeKuma was created successfully"`) so you can confirm the webhook connection works. Because no monitor up-heartbeat follows a test ping, resolve **Test Alert** manually in OpsiMate afterwards. |

## Important Disclaimer

Uptime Kuma sends webhooks to **publicly reachable HTTP endpoints**.

- If you are running OpsiMate locally (for example at `http://localhost:3001`), Uptime Kuma running on a different machine or in the cloud may **not** be able to call this URL directly.
- For production use, deploy OpsiMate behind a **reachable URL** (or expose it securely via tunneling / reverse proxy) so that Uptime Kuma can reach the webhook endpoint.

Once configured, alerts pushed from Uptime Kuma will appear in the **alerts table** in OpsiMate with the **Uptime Kuma integration icon**, so you can easily identify their source.
