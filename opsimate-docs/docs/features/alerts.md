---
sidebar_position: 3
title: 🚨 Alerts
---

# 🚨 Alerts

## 🔍 Overview

OpsiMate's alert system provides real-time notifications about issues in your infrastructure. The platform collects alerts from various monitoring tools and presents them in a unified interface, making it easy to identify and respond to problems quickly.

:::tip 🎯 Key Benefits
- ⚡ **Real-time notifications** for immediate issue awareness
- 🔗 **Unified interface** across all monitoring tools
- 🏷️ **Multi-tag support** for comprehensive coverage
- 🚫 **Smart deduplication** to reduce noise
:::

## 🏷️ Multi-Tag Alert System

OpsiMate features an advanced multi-tag alert system that ensures comprehensive visibility:

### ✨ Key Features

| Feature | Description | Benefit |
|---------|-------------|----------|
| **🏷️ Multi-Tag Support** | Each service receives alerts for ALL its associated tags | Complete visibility across all service aspects |
| **🚫 Alert Deduplication** | Alerts are properly deduplicated if they match multiple tags | Reduced noise and cleaner interface |
| **🔗 Cross-Service Visibility** | Alerts appear under all relevant services via shared tags | Better correlation and context |

:::info 💡 How This Helps
This system ensures that no alert goes unnoticed, while keeping your dashboard clean and organized.
:::

### How It Works

1. Each service can have multiple tags assigned to it
2. Alerts are associated with specific tags
3. OpsiMate matches alerts to services based on tag relationships
4. Services with multiple tags will show all relevant alerts
5. Alerts are deduplicated to avoid showing the same alert multiple times

```typescript
// Example of service with multiple tags
{
  name: "api-service",
  serviceIp: "10.0.0.1",
  tags: ["production", "api", "critical"],
  serviceAlerts: [
    // All alerts matching any of the tags will appear here
  ]
}
```

## Alert Management

### Alert Severity Levels

OpsiMate supports multiple alert severity levels:

- **Critical**: Requires immediate attention
- **Warning**: Potential issue that should be investigated
- **Info**: Informational alert that doesn't require immediate action

### Alert Actions

For each alert, you can:

- **Acknowledge**: Mark an alert as acknowledged to indicate you're working on it
- **Resolve**: Mark an alert as resolved when the issue is fixed
- **Snooze**: Temporarily silence an alert for a specified period
- **Assign**: Assign an alert to a team member for resolution

### Alert Filtering

Filter alerts based on:

- **Severity**: Filter by critical, warning, or info
- **Status**: Filter by acknowledged, resolved, or active
- **Service**: Filter by specific service
- **Tags**: Filter by specific tags
- **Time Range**: Filter by when the alert was triggered

## Alert Notifications

OpsiMate can send alert notifications through various channels:

- **Email**: Send alert notifications to specified email addresses
- **Slack**: Send alert notifications to Slack channels
- **Microsoft Teams**: Send alert notifications to Teams channels
- **Webhook**: Send alert notifications to custom webhook endpoints

## Best Practices

- **Tag Organization**: Use a consistent tagging strategy for better alert organization
- **Alert Thresholds**: Set appropriate thresholds to avoid alert fatigue
- **Alert Routing**: Route alerts to the appropriate teams based on service ownership
- **Regular Review**: Regularly review and update alert configurations

## Next Steps

- [Set up alert notifications](../monitoring/setting-up-alerts)
- [Configure automated actions](../features/actions)
- [Create incident response plans](../features/incident-response)
