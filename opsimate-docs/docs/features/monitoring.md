---
sidebar_position: 2
---

# Monitoring

## Overview

OpsiMate provides comprehensive monitoring capabilities for your entire infrastructure. The platform collects metrics, logs, and health status information from all your services, giving you complete visibility into your system's performance and health.

## Key Monitoring Features

### Real-time Metrics

- **System Metrics** - CPU, memory, disk usage, network traffic
- **Service Metrics** - Service-specific metrics like request rates, error rates, response times
- **Custom Metrics** - Define and collect custom metrics important to your business

### Log Aggregation

- **Centralized Logging** - Collect logs from all services in one place
- **Log Search** - Powerful search capabilities to find relevant log entries
- **Log Analysis** - Identify patterns and anomalies in your logs

### Health Checks

- **Service Health** - Monitor the health status of all services
- **Dependency Health** - Understand how dependencies affect service health
- **Custom Health Checks** - Define custom health checks for your specific needs

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
