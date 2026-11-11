---
sidebar_position: 5
tags: [Alerts]
---

# Uptime Kuma Integration

The **Uptime Kuma integration** lets you send alerts from Uptime Kuma into OpsiMate using **push notifications**: Uptime Kuma 3.0 and later ship a built-in **OpsiMate** notification type, and any version can use a generic **Webhook** notification.

Instead of OpsiMate pulling status from Uptime Kuma, your Uptime Kuma notifications **push alerts** directly to OpsiMate.

## Webhook URL

This URL is for the **Webhook** notification type. The built-in **OpsiMate** type (see below) asks for the server URL and the token as separate fields instead.

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

## Built-in OpsiMate Notification (Uptime Kuma 3.0 and later)

Uptime Kuma 3.0 ships an **OpsiMate** notification type, so there is no webhook URL to assemble. Versions up to 2.5.x do not have it; use the [webhook steps](#setting-up-the-webhook-in-uptime-kuma) instead.

1. In **Uptime Kuma**, go to **Settings → Notifications** and click **Setup Notification**.
2. Set **Notification Type** to **OpsiMate** and **Friendly Name** to `OpsiMate`.
3. **OpsiMate URL**: the base URL of the OpsiMate server (the API port, `3001` by default, not the web UI), for example `https://opsimate.example.com:3001`.
4. **API Token**: the value of `API_TOKEN` on your OpsiMate server (default `opsimate`). It is sent as the `x-api-token` header, so it never appears in a URL.
5. Click **Test**, then **Save**. Enable **Default enabled** and **Apply to all existing monitors**, or attach the notification to each monitor, exactly as in the webhook steps 8 and 9 below.

The notification posts Uptime Kuma's standard `{ heartbeat, monitor, msg }` payload to `<OpsiMate URL>/api/v1/alerts/custom/uptimekuma`, so everything under [What OpsiMate Shows](#what-opsimate-shows) applies unchanged.

:::note
The OpsiMate notification type was merged into Uptime Kuma on November 10, 2026 and is on its `master` branch (`3.0.0-beta.0`) and nightly images. The latest release at the time of writing, 2.5.9, does not include it.
:::

## Setting Up the Webhook in Uptime Kuma

Use the **Webhook** notification type on Uptime Kuma 2.x, or whenever you prefer a generic webhook. To send alerts from Uptime Kuma to OpsiMate via webhook:

1. In **Uptime Kuma**, go to **Settings → Notifications**.
2. Click **Setup Notification**.
3. Set **Notification Type** to **Webhook** and **Friendly Name** to `OpsiMate`.
4. Paste your OpsiMate webhook URL into the **Post URL** field, for example:
   - `http://your-opsimate-host/api/v1/alerts/custom/uptimekuma?api_token={your_api_token}`
5. Keep the **HTTP method** as `POST`.
6. Set **Request Body** to **application/json**. This field is required, and a new notification has no preselected value. Use Uptime Kuma's default payload. OpsiMate validates incoming payloads via `UptimeKumaWebhookPayloadSchema`: requests with malformed `heartbeat` or `monitor` fields are rejected with HTTP **400**, while payloads that omit both fields (such as `{}`) return HTTP **200** and create a firing **Test Alert** (extra keys on the default payload are accepted).
7. Click **Test** to verify the connection (see note below on how the test alert behaves).
8. Optionally enable **Default enabled** and **Apply to all existing monitors**, then click **Save** to finish setup.
9. If you leave both options off, attach the notification to each monitor that should send alerts. Open the monitor's edit page, enable **OpsiMate** under **Notifications**, and click **Save**.

## What OpsiMate Shows

When Uptime Kuma sends a webhook, OpsiMate maps the payload to an alert as follows:

| Field / Behavior | How OpsiMate Maps It |
|---|---|
| **Alert ID** | `UPTIMEKUMA_<monitor.id>` — one alert per monitor, updated in place when Uptime Kuma sends a webhook (on status changes and configured DOWN resends) |
| **Firing** | `heartbeat.status` `0` (down) or `2` (pending) |
| **Resolved** | `heartbeat.status` `1` (up) automatically resolves the alert and moves it to the **Resolved** list. This does not apply when the monitor recovers from maintenance: Uptime Kuma sends no up notification in that case, so resolve the alert manually |
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
