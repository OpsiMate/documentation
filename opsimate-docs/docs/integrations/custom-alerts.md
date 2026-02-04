# Custom Alerts API

## Overview

The Custom Alerts API allows you to send alerts from any source to OpsiMate via HTTP requests. This webhook integration enables you to integrate custom monitoring tools, scripts, or third-party services that aren't natively supported. Alerts can be created, archived, and permanently deleted through simple REST endpoints.

## Getting Started

To start sending alerts, you'll need an API token. The default token is:

```
opsimate
```

You can configure your API token in the OpsiMate settings panel.

## Authentication

All requests require an API token passed as a query parameter:

```
?api_token=opsimate
```

## Endpoints

### Create Alert

**POST** `/api/v1/alerts/custom?api_token=YOUR_TOKEN`

Creates a new alert or updates an existing one if the `id` already exists.

**Request Body:**

```json
{
  "id": "alert-123",
  "alertName": "High CPU Usage",
  "tags": {
    "severity": "critical",
    "service": "api-server",
    "environment": "production"
  },
  "alertUrl": "https://monitoring.example.com/alerts/123",
  "summary": "CPU usage exceeded 90% threshold",
  "startsAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-15T10:35:00Z",
  "runbookUrl": "https://wiki.example.com/runbooks/high-cpu"
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
      "severity": "critical",
      "service": "api-server"
    },
    "alertUrl": "https://monitoring.example.com/alerts/123"
  }'
```

### Archive Alert

**DELETE** `/api/v1/alerts/:alertId?api_token=YOUR_TOKEN`

Moves an active alert to the archived table. Archived alerts can be viewed separately and restored if needed.

**cURL Example:**

```bash
curl -X DELETE "https://your-opsimate-instance.com/api/v1/alerts/alert-123?api_token=opsimate"
```

### Permanently Delete Archived Alert

**DELETE** `/api/v1/alerts/archived/:alertId?api_token=YOUR_TOKEN`

Permanently removes an archived alert from the system. This action is irreversible.

**cURL Example:**

```bash
curl -X DELETE "https://your-opsimate-instance.com/api/v1/alerts/archived/alert-123?api_token=opsimate"
```

## Response Format

All endpoints return JSON responses with the following structure:

**Success Response:**

```json
{
  "success": true
}
```

**Error Response:**

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
| `alertName` | string | **Required** | Display name of the alert |
| `tags` | object | **Required** | Key-value pairs for categorization and filtering |
| `alertUrl` | string | **Required** | URL to the source alert or monitoring system |
| `summary` | string | Optional | Detailed description of the alert |
| `startsAt` | string | Optional | ISO 8601 timestamp when alert started |
| `updatedAt` | string | Optional | ISO 8601 timestamp of last update |
| `runbookUrl` | string | Optional | URL to remediation documentation |

## Best Practices

- Use consistent `id` formats across your monitoring sources
- Include meaningful tags for filtering and grouping
- Provide `runbookUrl` for operational efficiency
- Use ISO 8601 format for all timestamps
- Archive resolved alerts to maintain clean active alert views
