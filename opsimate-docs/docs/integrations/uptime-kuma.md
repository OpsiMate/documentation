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
3. Choose **Webhook** as the notification type.
4. Set the **Friendly Name** to `OpsiMate` (or a name of your choice).
5. Set the **Post URL** to your OpsiMate endpoint, for example:
   - `http://your-opsimate-host/api/v1/alerts/custom/uptimekuma?api_token={your_api_token}`
6. Set the **Content Type** to `application/json` (the default). Keep Uptime Kuma's default payload format; a custom body or template is rejected with **400 Bad Request** by the server validator.
7. (Optional) Check **Default enabled** / **Apply to all existing monitors** if you want all monitors to forward alerts to OpsiMate.
8. Click **Test** to verify connectivity:
   - Uptime Kuma sends a test payload (`{"heartbeat": null, "monitor": null, "msg": "Testing..."}`).
   - OpsiMate creates a firing alert named **Test Alert** (*"Test Alert by UptimeKuma was created successfully"*) so you can confirm the webhook works.
   - Manually resolve this test alert in OpsiMate afterwards.
9. Click **Save** to save the notification.
10. If not applied globally, edit individual monitors in Uptime Kuma and enable the OpsiMate notification under **Notifications**.

## What OpsiMate Shows

When Uptime Kuma pushes notifications, each monitor maps to an alert in OpsiMate. Alerts are updated in place on every heartbeat.

| Field | Value / Mapping |
|---|---|
| **Alert id** | `UPTIMEKUMA_<monitor.id>` — one alert per monitor, updated in place on every heartbeat |
| **Firing** | `heartbeat.status` `0` (down) or `2` (pending) |
| **Resolved** | `heartbeat.status` `1` (up) resolves the alert, which moves to the **Resolved** list |
| **Name** | the monitor's `pathName`, else `name` |
| **Summary** | `heartbeat.msg`, else the top-level `msg` |
| **Tags** | each monitor tag becomes `name: value` (`unknown` when the tag has no value) |
| **Started at** | `heartbeat.time` |
| **Test button** | Uptime Kuma sends `{"heartbeat": null, "monitor": null, "msg": "Testing..."}`; OpsiMate creates a firing alert named **Test Alert** ("Test Alert by UptimeKuma was created successfully") so you can see the connection works. Resolve it by hand afterwards. |

### Auto-Resolve

Alerts auto-resolve when the monitor comes back up:

- When Uptime Kuma reports `heartbeat.status` `1` (up), OpsiMate automatically marks the alert as resolved.
- The alert automatically moves from the active queue to the **Resolved** list.

## Important Disclaimer

Uptime Kuma sends webhooks to **publicly reachable HTTP endpoints**.

- If you are running OpsiMate locally (for example at `http://localhost:3001`), Uptime Kuma running on a different machine or in the cloud may **not** be able to call this URL directly.
- For production use, deploy OpsiMate behind a **reachable URL** (or expose it securely via tunneling / reverse proxy) so that Uptime Kuma can reach the webhook endpoint.

Once configured, alerts pushed from Uptime Kuma will appear in the **alerts table** in OpsiMate with the **Uptime Kuma integration icon**, so you can easily identify their source.
