# Custom Alerts API

## Overview

The Custom Alerts API allows you to send alerts from any source to OpsiMate via HTTP requests. This webhook integration enables you to integrate custom monitoring tools, scripts, or third-party services that aren't natively supported. Alerts are fired and resolved through the same endpoint, and resolved alerts can be permanently deleted.

## Getting Started

To start sending alerts, you'll need an API token. The default token is:

```
opsimate
```

## Authentication

All requests require an API token passed as a query parameter:

```
?api_token=opsimate
```

## Endpoints

### Fire an Alert

**POST** `/api/v1/alerts/custom?api_token=YOUR_TOKEN`

Creates a new alert or updates an existing one if the `id` already exists.

**Request Body:**

```json
{
  "id": "alert-123",
  "alertName": "High CPU Usage",
  "tags": {
    "service": "api-server",
    "environment": "production"
  },
  "severity": "critical",
  "team": "platform",
  "summary": "CPU usage exceeded 90% threshold",
  "startsAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:35:00Z",
  "links": [
    { "label": "Source", "url": "https://monitoring.example.com/alerts/123" },
    { "label": "Runbook", "url": "https://wiki.example.com/runbooks/high-cpu" }
  ]
}
```

**cURL Example:**

```bash
curl -X POST "https://your-opsimate-instance.com/api/v1/alerts/custom?api_token=opsimate" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "alert-123",
    "alertName": "High CPU Usage",
    "tags": {
      "service": "api-server"
    },
    "severity": "critical",
    "links": [
      { "label": "Source", "url": "https://monitoring.example.com/alerts/123" }
    ]
  }'
```

### Resolve an Alert

**POST** `/api/v1/alerts/custom?api_token=YOUR_TOKEN`

To resolve an alert, POST the same `id` with `"status": "resolved"`. A body with only `id` and `status` is enough:

```json
{
  "id": "alert-123",
  "status": "resolved"
}
```

- Re-sending a resolve is safe: an unknown or already-resolved `id` is not an error.
- `endsAt` sets the resolve time. It defaults to now.
- If you send the full alert (`alertName`, `tags`, ...) with `"status": "resolved"` for an alert OpsiMate never saw firing, OpsiMate still records that episode, so the incident isn't lost.

**cURL Example:**

```bash
curl -X POST "https://your-opsimate-instance.com/api/v1/alerts/custom?api_token=opsimate" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "alert-123",
    "status": "resolved",
    "endsAt": "2024-01-15T11:00:00Z"
  }'
```

### Resolve an Alert with DELETE (deprecated for senders)

**DELETE** `/api/v1/alerts/:alertId?api_token=YOUR_TOKEN`

This is the manual **Resolve** the OpsiMate UI uses. It moves an active alert to the resolved alerts. It accepts an optional JSON body with a resolve note:

```json
{
  "comment": "Fixed by restarting the service"
}
```

Senders should use [Resolve an Alert](#resolve-an-alert) (POST with `"status": "resolved"`) instead.

**cURL Example:**

```bash
curl -X DELETE "https://your-opsimate-instance.com/api/v1/alerts/alert-123?api_token=opsimate"
```

### Permanently Delete a Resolved Alert

**DELETE** `/api/v1/alerts/resolved/:alertId?api_token=YOUR_TOKEN`

Permanently removes a resolved alert from the system. This action is irreversible.

**cURL Example:**

```bash
curl -X DELETE "https://your-opsimate-instance.com/api/v1/alerts/resolved/alert-123?api_token=opsimate"
```

## Response Format

**Alert fired:**

```json
{
  "success": true,
  "data": {
    "alertId": "alert-123",
    "status": "firing"
  }
}
```

**Alert resolved:**

```json
{
  "success": true,
  "data": {
    "alertId": "alert-123",
    "status": "resolved",
    "resolved": true,
    "created": false
  }
}
```

`resolved` is `true` when a firing alert was resolved by this request. `created` is `true` when the alert wasn't firing in OpsiMate but you sent the full alert, so its fired-and-resolved episode was recorded. Both are `false` when there was nothing to do (an unknown or already-resolved `id`).

**Validation error** (HTTP 400):

```json
{
  "success": false,
  "error": "Validation error",
  "details": [
    {
      "expected": "string",
      "code": "invalid_type",
      "path": ["alertName"],
      "message": "Invalid input: expected string, received undefined"
    }
  ]
}
```

**Invalid API token** (HTTP 401):

```json
{
  "success": false,
  "error": "Invalid API token"
}
```

## Field Reference

| Field Name | Type | Required | Description |
|------------|------|----------|-------------|
| `id` | string | **Required** | Unique identifier for the alert |
| `alertName` | string | **Required** | Display name of the alert. Not needed to resolve. |
| `tags` | object (string → string) | **Required** | Key-value pairs for categorization and filtering. Not needed to resolve. |
| `status` | string | Optional | `"resolved"` resolves the alert. Anything else, or no value, fires it. |
| `summary` | string | Optional | Detailed description of the alert |
| `startsAt` | string | Optional | ISO 8601 timestamp when the alert started |
| `updatedAt` | string | Optional | ISO 8601 timestamp of the last update |
| `endsAt` | string | Optional | ISO 8601 timestamp when the alert ended. Only read with `"status": "resolved"`. Defaults to now. |
| `severity` | string | Optional | Free-form. Mapped onto `critical`, `warning` or `info`. Unknown or missing values become `warning`. |
| `team` | string | Optional | Owning team. Falls back to a `team` tag. |
| `fix` | string | Optional | Fix classification: `manual` or `auto` |
| `links` | array | Optional | Up to 20 links, each `{ "label", "url", "icon"? }`. `icon` is an optional integration icon name, such as `grafana`. |
| `alertUrl` | string | Optional | **Deprecated**, use `links`. Still accepted, and shown as the "Source" link when `links` is absent. |
| `runbookUrl` | string | Optional | **Deprecated**, use `links`. Still accepted, and shown as the "Runbook" link when `links` is absent. |
| `createdAt` | string | Optional | Accepted but currently not used |

## Best Practices

- Use consistent `id` formats across your monitoring sources
- Include meaningful tags for filtering and grouping
- Add a runbook to `links` for operational efficiency
- Use ISO 8601 format for all timestamps
- Resolve alerts by POSTing `"status": "resolved"` when your source recovers, to keep the active alert view clean
