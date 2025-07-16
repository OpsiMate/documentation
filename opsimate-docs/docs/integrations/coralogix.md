---
sidebar_position: 4
---

# Coralogix Integration

This guide explains how to integrate Coralogix with OpsiMate to enhance your log management and analysis capabilities.

## Overview

Coralogix is a powerful log analytics platform that provides advanced log management, monitoring, and security features. Integrating Coralogix with OpsiMate allows you to:

- View Coralogix logs directly in OpsiMate dashboards
- Import log-based alerts into OpsiMate's unified alerting system
- Correlate logs with service status and metrics
- Create comprehensive monitoring dashboards that include log data

## Prerequisites

Before setting up the Coralogix integration, ensure you have:

1. An active Coralogix account with appropriate access permissions
2. Your Coralogix API key
3. Network connectivity between OpsiMate and Coralogix
4. (Optional) Coralogix alerts configured

## Setting Up the Integration

### Step 1: Generate a Coralogix API Key

1. Log in to your Coralogix account
2. Navigate to **Data Flow** > **API Keys**
3. Click **+ New API Key**
4. Set the following permissions:
   - Logs query
   - Alerts query
   - Dashboards access
5. Click **Generate Key**
6. Copy the generated API key (you'll need it in the next step)

<!-- Image placeholder: Generating a Coralogix API key -->

### Step 2: Add Coralogix Integration in OpsiMate

1. Log in to OpsiMate
2. Navigate to **My Integrations**
3. Click the **Add Integration** button
4. Select **Coralogix** from the integration types

<!-- Image placeholder: Adding Coralogix integration in OpsiMate -->

### Step 3: Configure the Integration

Fill in the required fields:

1. **Integration Name**: A descriptive name (e.g., "Production Coralogix")
2. **URL**: Your Coralogix domain URL (e.g., `https://[your-domain].coralogix.com`)
3. **API Key**: Paste the API key you generated in Step 1
4. **Application Name**: (Optional) Default application to filter logs
5. **Subsystem Name**: (Optional) Default subsystem to filter logs
6. **Refresh Interval**: How often to sync data (default: 5 minutes)

<!-- Image placeholder: Configuring Coralogix integration settings -->

### Step 4: Test and Save the Integration

1. Click **Test Connection** to verify OpsiMate can connect to your Coralogix instance
2. If the test is successful, click **Save** to add the integration
3. OpsiMate will begin importing logs and alerts from Coralogix

## Using Coralogix Logs in OpsiMate

### Viewing Logs

Once integrated, you can view Coralogix logs:

1. Navigate to the **Dashboard** page
2. Select a service that has associated logs
3. In the service details panel, click the **Logs** tab
4. Browse logs or use the search function to find specific log entries
5. Use filters to narrow down log results:
   - By time range
   - By severity level
   - By text content
   - By application or subsystem

<!-- Image placeholder: Coralogix logs view in OpsiMate -->

### Advanced Log Search

For more detailed log analysis:

1. In the logs view, click **Advanced Search**
2. Use Coralogix's query language to create complex searches
3. Save frequently used queries for quick access
4. Export log data for further analysis

## Importing Coralogix Alerts

OpsiMate can import and display alerts from Coralogix:

### Viewing Imported Alerts

1. Navigate to the **Alerts** page
2. Alerts imported from Coralogix will be displayed with a Coralogix icon
3. Click on an alert to view details:
   - Alert name and description
   - Severity
   - When the alert was triggered
   - Associated logs and patterns
   - Source rule in Coralogix

<!-- Image placeholder: Coralogix alerts in OpsiMate -->

### Configuring Alert Import

To customize which Coralogix alerts are imported:

1. Navigate to **My Integrations**
2. Find your Coralogix integration
3. Click **Edit**
4. In the **Alert Settings** section:
   - Enable/disable alert import
   - Set severity mapping
   - Configure alert filtering
5. Click **Save** to apply changes

## Creating Log-Based Alerts

You can create alerts based on log patterns directly in OpsiMate:

1. Navigate to the **Monitoring** page
2. Click **Create Alert**
3. Select **Log-Based Alert** as the alert type
4. Choose **Coralogix** as the log source
5. Configure alert conditions:
   - Log pattern to match
   - Frequency threshold
   - Time window
6. Set notification settings
7. Click **Save** to create the alert

<!-- Image placeholder: Creating a log-based alert -->

## Linking Services to Coralogix Logs

To associate OpsiMate services with specific Coralogix logs:

1. Navigate to the service details page
2. Click **Edit**
3. In the **Integrations** section, click **Add Log Source**
4. Select **Coralogix** as the log source
5. Configure log filters:
   - Application name
   - Subsystem name
   - Additional filters
6. Click **Save** to update the service

Once linked, logs for this service will automatically appear in the service's logs tab.

## Using Coralogix Dashboards

OpsiMate can display Coralogix dashboards:

1. Navigate to the **Dashboard** page
2. Select a service with Coralogix integration
3. In the service details panel, click the **External Links** dropdown
4. Select a Coralogix dashboard from the list
5. The dashboard will open in a new tab or embedded view

The External Links dropdown will stay open during your session and won't auto-close during background data updates, providing a smooth user experience.

## Refreshing Coralogix Data

Coralogix data is automatically refreshed based on your configured interval. To manually refresh:

1. Navigate to **My Integrations**
2. Find your Coralogix integration
3. Click the **Refresh** button
4. OpsiMate will fetch the latest logs and alerts from Coralogix

## Troubleshooting

### Connection Issues

If OpsiMate cannot connect to Coralogix:

1. Verify the Coralogix URL is correct
2. Check that your API key is valid and has the necessary permissions
3. Ensure network connectivity between OpsiMate and Coralogix
4. Check for any firewall rules that might block the connection

### Missing Logs

If expected logs are not appearing:

1. Verify logs exist in Coralogix (check directly in the Coralogix UI)
2. Check if any filters are applied in OpsiMate
3. Ensure the service is correctly associated with the logs
4. Try manually refreshing the integration

### Alert Import Problems

If Coralogix alerts are not being imported:

1. Verify alerts are configured and firing in Coralogix
2. Check alert import settings in the integration configuration
3. Ensure your API key has permissions to access alerts
4. Check for any filtering rules that might exclude the alerts

## Best Practices

- **Use Structured Logging**: Structure your logs for better searchability
- **Set Appropriate Log Levels**: Use the right severity levels for different types of logs
- **Create Meaningful Alerts**: Focus on actionable log patterns for alerts
- **Use Tags**: Tag your logs to easily associate them with services
- **Regular Maintenance**: Periodically review and update your log queries and alerts
- **Optimize Log Volume**: Balance detail with performance by controlling log verbosity

## Next Steps

After setting up your Coralogix integration:

1. [[Set up other integrations](/docs/](/integrations/overview) like Grafana or Prometheus
2. [[Create custom dashboards](/docs/](/dashboards/creating-dashboards) that include log data
3. [[Configure advanced alerts](/docs/](/monitoring/setting-up-alerts) based on log patterns
4. [[Set up automated actions](/docs/](/advanced/actions) triggered by log-based alerts
