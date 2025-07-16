---
sidebar_position: 3
---

# Prometheus Integration

This guide explains how to integrate Prometheus with OpsiMate to enhance your monitoring capabilities with powerful metrics collection and alerting.

## Overview

Prometheus is an open-source systems monitoring and alerting toolkit that collects and stores metrics as time series data. Integrating Prometheus with OpsiMate allows you to:

- View Prometheus metrics directly in OpsiMate dashboards
- Import Prometheus alerts into OpsiMate's unified alerting system
- Correlate metrics with service status and logs
- Create comprehensive monitoring dashboards

## Prerequisites

Before setting up the Prometheus integration, ensure you have:

1. A running Prometheus instance accessible from your OpsiMate server
2. Administrator access to your Prometheus instance
3. Network connectivity between OpsiMate and Prometheus
4. (Optional) Prometheus alerting rules configured

## Setting Up the Integration

### Step 1: Configure Prometheus for Remote Access

First, ensure your Prometheus instance is configured to allow API access:

1. Edit your Prometheus configuration file (`prometheus.yml`)
2. Ensure the web configuration allows remote access:

```yaml
web:
  enable_remote_write_receiver: true
  enable_api: true
```

3. If using authentication, set up an API token or basic authentication
4. Restart Prometheus to apply the changes

### Step 2: Add Prometheus Integration in OpsiMate

1. Log in to OpsiMate
2. Navigate to **My Integrations**
3. Click the **Add Integration** button
4. Select **Prometheus** from the integration types

<!-- Image placeholder: Adding Prometheus integration in OpsiMate -->

### Step 3: Configure the Integration

Fill in the required fields:

1. **Integration Name**: A descriptive name (e.g., "Production Prometheus")
2. **URL**: The base URL of your Prometheus instance (e.g., `http://prometheus.example.com:9090`)
3. **API Key** (if applicable): Authentication token for your Prometheus instance
4. **Username/Password** (if using basic auth): Credentials for authentication
5. **Refresh Interval**: How often to sync data (default: 5 minutes)

<!-- Image placeholder: Configuring Prometheus integration settings -->

### Step 4: Test and Save the Integration

1. Click **Test Connection** to verify OpsiMate can connect to your Prometheus instance
2. If the test is successful, click **Save** to add the integration
3. OpsiMate will begin importing metrics and alerts from Prometheus

## Using Prometheus Metrics in OpsiMate

### Viewing Metrics

Once integrated, you can view Prometheus metrics:

1. Navigate to the **Dashboard** page
2. Select a service that has Prometheus metrics
3. In the service details panel, click the **Metrics** tab
4. Browse available metrics or use the search function
5. Select metrics to display in the chart view

<!-- Image placeholder: Prometheus metrics visualization in OpsiMate -->

### Creating Custom Metric Dashboards

To create a custom dashboard with Prometheus metrics:

1. Navigate to **Dashboards**
2. Click **Create Dashboard** or edit an existing one
3. Add a **Metric Widget**
4. Select **Prometheus** as the data source
5. Choose the metrics you want to display
6. Configure visualization options (line chart, bar chart, etc.)
7. Save the dashboard

## Importing Prometheus Alerts

OpsiMate can import and display alerts from Prometheus:

### Viewing Imported Alerts

1. Navigate to the **Alerts** page
2. Alerts imported from Prometheus will be displayed with a Prometheus icon
3. Click on an alert to view details:
   - Alert name and description
   - Severity
   - When the alert was triggered
   - Associated metrics and values
   - Source rule in Prometheus

<!-- Image placeholder: Prometheus alerts in OpsiMate -->

### Configuring Alert Import

To customize which Prometheus alerts are imported:

1. Navigate to **My Integrations**
2. Find your Prometheus integration
3. Click **Edit**
4. In the **Alert Settings** section:
   - Enable/disable alert import
   - Set severity mapping
   - Configure alert filtering
5. Click **Save** to apply changes

## Using PromQL in OpsiMate

OpsiMate supports Prometheus Query Language (PromQL) for advanced metric queries:

1. In any metrics view, click **Advanced Query**
2. Enter your PromQL expression
3. Click **Execute** to run the query
4. View the results in the chart

Example PromQL queries:

```
# CPU usage for a specific service
rate(process_cpu_seconds_total{job="my-service"}[5m])

# Memory usage
process_resident_memory_bytes{job="my-service"}

# HTTP request rate
rate(http_requests_total[1m])
```

## Linking Services to Prometheus Metrics

To associate OpsiMate services with specific Prometheus metrics:

1. Navigate to the service details page
2. Click **Edit**
3. In the **Integrations** section, click **Add Prometheus Metrics**
4. Select the metrics you want to associate with this service
5. Click **Save** to update the service

Once linked, these metrics will appear in the service's metrics tab and can be used in service-specific dashboards.

## Refreshing Prometheus Data

Prometheus data is automatically refreshed based on your configured interval. To manually refresh:

1. Navigate to **My Integrations**
2. Find your Prometheus integration
3. Click the **Refresh** button
4. OpsiMate will fetch the latest metrics and alerts from Prometheus

## Troubleshooting

### Connection Issues

If OpsiMate cannot connect to Prometheus:

1. Verify the Prometheus URL is correct and accessible
2. Check network connectivity between OpsiMate and Prometheus
3. Ensure authentication credentials are correct
4. Verify Prometheus is running and healthy
5. Check firewall rules that might block the connection

### Missing Metrics

If expected metrics are not appearing:

1. Verify the metrics exist in Prometheus (check directly in the Prometheus UI)
2. Check if any filters are applied in OpsiMate
3. Ensure the service is correctly associated with the metrics
4. Try manually refreshing the integration

### Alert Import Problems

If Prometheus alerts are not being imported:

1. Verify alerts are configured and firing in Prometheus
2. Check alert import settings in the integration configuration
3. Ensure the Prometheus Alertmanager is properly configured
4. Check for any filtering rules that might exclude the alerts

## Best Practices

- **Start Simple**: Begin with basic metrics before adding complex PromQL queries
- **Use Labels**: Leverage Prometheus labels to organize and filter metrics
- **Consistent Naming**: Use consistent naming conventions for metrics
- **Alert Tuning**: Fine-tune alert thresholds to avoid alert fatigue
- **Regular Maintenance**: Periodically review and update your metrics and alerts
- **Documentation**: Document custom metrics and their significance

## Next Steps

After setting up your Prometheus integration:

1. [Set up Grafana integration](/docs/integrations/grafana) for enhanced visualization
2. [Create custom dashboards](/docs/dashboards/creating-dashboards) with Prometheus metrics
3. [Configure advanced alerts](/docs/monitoring/setting-up-alerts) based on Prometheus data
4. [Set up automated actions](/docs/advanced/actions) triggered by Prometheus alerts
