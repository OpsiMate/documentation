---
sidebar_position: 2
title: 📊 Monitoring
---

# 📊 Monitoring

## 🔍 Overview

OpsiMate provides comprehensive monitoring capabilities for your entire infrastructure. The platform collects metrics, logs, and health status information from all your services, giving you complete visibility into your system's performance and health.

:::tip 🎯 360° Visibility
Get complete observability across your entire infrastructure with real-time metrics, logs, and health checks.
:::

## ✨ Key Monitoring Features

### 📊 Real-time Metrics

| Metric Type | Description | Use Case |
|-------------|-------------|----------|
| **💻 System Metrics** | CPU, memory, disk usage, network traffic | Infrastructure health monitoring |
| **🚀 Service Metrics** | Request rates, error rates, response times | Application performance tracking |
| **🎯 Custom Metrics** | Business-specific metrics and KPIs | Custom monitoring requirements |

:::info 📈 Real-time Updates
All metrics are updated in real-time, giving you instant visibility into your system's performance.
:::

### 📜 Log Aggregation

| Feature | Description | Benefit |
|---------|-------------|----------|
| **📎 Centralized Logging** | Collect logs from all services in one place | Single source of truth for all logs |
| **🔍 Log Search** | Powerful search capabilities across all logs | Quick troubleshooting and analysis |
| **📊 Log Analysis** | Identify patterns and anomalies | Proactive issue detection |

:::tip 🔍 Pro Search Tips
Use filters, regex patterns, and time ranges to quickly find the logs you need.
:::

### ❤️‍🩹 Health Checks

| Check Type | Description | Frequency |
|------------|-------------|----------|
| **🚀 Service Health** | Monitor the health status of all services | Every 30 seconds |
| **🔗 Dependency Health** | Track how dependencies affect service health | Continuous |
| **🎯 Custom Health Checks** | Define custom health checks for specific needs | Configurable |

:::warning ⚠️ Health Check Best Practices
- Keep health checks lightweight and fast
- Include dependency checks in your health endpoints
- Set appropriate timeout values
:::

## Multi-Tag Alert System

OpsiMate features an advanced multi-tag alert system that ensures comprehensive visibility:

- **Tag-Based Alerts** - Each service receives alerts for ALL its associated tags
- **Alert Deduplication** - Alerts are properly deduplicated if they match multiple tags of the same service
- **Cross-Service Visibility** - If an alert is associated with multiple services (via shared tags), it appears under all relevant services

```typescript
// Service with multiple tags receiving all relevant alerts
{
  name: "api-service",
  tags: ["production", "api", "critical"],
  serviceAlerts: [
    // All alerts matching any of the tags will appear here
  ]
}
```

## Integration with Monitoring Tools

OpsiMate integrates with popular monitoring tools:

- **Grafana** - Visualize metrics and create dashboards
- **Prometheus** - Collect and store metrics
- **Kibana** - Search and analyze logs
- **Coralogix** - Advanced log analysis and correlation

## Best Practices

- **Alert Thresholds** - Set appropriate thresholds to avoid alert fatigue
- **Tag Organization** - Use a consistent tagging strategy for better alert organization
- **Dashboard Organization** - Create focused dashboards for different teams and purposes
- **Regular Review** - Regularly review and update monitoring configurations

## Next Steps

- [Set up alerts](../monitoring/setting-up-alerts)
- [Create dashboards](../dashboards/creating-dashboards)
- [Configure integrations](../integrations/overview)
