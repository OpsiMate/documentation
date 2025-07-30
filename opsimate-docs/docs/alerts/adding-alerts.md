---
sidebar_position: 1
---

# Adding Alerts

Learn how to set up alerts for your services through integration providers like Grafana.

## How It Works

Alerts in OpsiMate are created through integrations with external alert providers. When you configure an integration like Grafana, alerts from that system are automatically pulled into OpsiMate and associated with your services.

## Setting Up Alerts

### 1. Tag Your Services
First, ensure your services have proper tags that match your alert configuration:

- Navigate to your service in the dashboard
- Add relevant tags that correspond to your alert rules
- Common tags include: `environment`, `team`, `criticality`, `component`

### 2. Configure Integration
Set up your alert provider integration:

- Go to **Integrations** → **External Integrations**
- Configure your alert provider (e.g., Grafana)
- Ensure the integration has access to your alert rules
- Map alert tags to service tags for proper association

### 3. Alert Association
OpsiMate automatically associates alerts with services based on:

**Tag matching**: Alerts with tags that match service tags

## Viewing Alerts

Once configured, you can view alerts directly in the **Service Menu** within the dashboard:

- Navigate to any service in your dashboard
- Click on the service to open the Service Menu
- Alerts will appear in the alerts section
- View alert status, severity, and details

## Alert States

Alerts can have the following states:
- **Active**: Currently firing
- **Dismissed**: Manually acknowledged by a user

The system automatically updates alert states based on your integration provider's data.
