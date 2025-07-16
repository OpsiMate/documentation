---
sidebar_position: 5
---

# Kibana Integration

Connect OpsiMate to your Kibana instance to visualize logs and analyze data directly within the OpsiMate interface.

## Prerequisites

Before setting up the Kibana integration, you'll need:

- A running Kibana instance (version 7.0 or higher)
- Elasticsearch backend configured with Kibana
- Admin access to create API keys in Kibana/Elasticsearch
- Network connectivity between OpsiMate and your Kibana instance

## Setting Up Kibana Integration

### Step 1: Create an API Key in Kibana

1. Log in to your Kibana instance with admin privileges
2. Navigate to **Management** > **Stack Management** > **API Keys**
3. Click **Create API key**
4. Configure the API key:
   - **Name**: OpsiMate Integration
   - **Role**: Choose appropriate roles with read access to your indices
   - **Expiration**: Set an expiration date or leave it indefinite
5. Click **Create** to generate the key
6. **Important**: Copy the generated API key immediately as it won't be shown again

<!-- Image placeholder: Creating a Kibana API key -->

### Step 2: Add Kibana Integration in OpsiMate

1. In OpsiMate, navigate to the **My Integrations** page
2. Click on the **External Integrations** tab
3. Click **Add Integration**
4. Select **Kibana** as the integration type
5. Fill in the integration details:
   - **Name**: A descriptive name for this integration (e.g., "Production Kibana")
   - **URL**: The base URL of your Kibana instance (e.g., `https://kibana.example.com`)
   - **API Key**: Paste the API key you created in Step 1
   - **Index Pattern**: Specify the index pattern to use (e.g., `logs-*`)
6. Click **Test Connection** to verify the integration works
7. Click **Save** to add the integration

<!-- Image placeholder: Adding Kibana integration in OpsiMate -->

## Using Kibana Dashboards in OpsiMate

Once the integration is set up, you can access your Kibana dashboards directly from OpsiMate:

### Viewing Dashboards

1. Navigate to the **Dashboard** page in OpsiMate
2. Select a service to view its details
3. Click on the **External Links** dropdown
4. Select a Kibana dashboard from the list

The Kibana dashboard will open in a new tab or within the OpsiMate interface, depending on your settings.

### Linking Dashboards to Services

To associate specific Kibana dashboards with services:

1. Navigate to the **My Integrations** page
2. Find your service in the list
3. Click the **Edit** button
4. In the **Tags** field, add tags that match your Kibana dashboard names or tags
5. Click **Save** to update the service

OpsiMate will automatically link dashboards to services based on matching tags.

## Viewing Logs in OpsiMate

OpsiMate can display logs from Kibana directly in the service details panel:

1. Navigate to the **Dashboard** page
2. Select a service to view its details
3. Click on the **Logs** tab
4. Select the Kibana integration from the dropdown if multiple are available
5. View logs related to the selected service

<!-- Image placeholder: Service logs view with Kibana integration -->

OpsiMate automatically filters logs based on the service name and tags to show only relevant entries.

## Creating Log-Based Alerts

You can create alerts based on log patterns from Kibana:

1. Navigate to the **Monitoring** page
2. Click **Add Alert Rule**
3. Configure the log-based alert:
   - **Alert Name**: A descriptive name for your alert
   - **Alert Type**: Select "Log Pattern"
   - **Integration**: Choose your Kibana integration
   - **Pattern**: Define the log pattern to match (e.g., "error", "exception")
   - **Threshold**: How many occurrences trigger an alert
   - **Time Window**: Period to count occurrences (e.g., 5 minutes)
   - **Severity**: Set the alert priority

<!-- Image placeholder: Configuring log-based alerts with Kibana -->

4. Click **Save** to activate the alert

## Refreshing Kibana Data

OpsiMate automatically refreshes Kibana data every 30 seconds, but you can manually refresh:

1. In the External Links dropdown, click the **Refresh Dashboards** button
2. Wait for the refresh to complete
3. The dropdown will update with the latest available dashboards

## Troubleshooting

If you encounter issues with your Kibana integration:

### API Key Issues

- **Invalid API Key**: Generate a new API key in Kibana and update the integration
- **Expired API Key**: Check if your API key has expired and create a new one
- **Permission Issues**: Ensure the API key has sufficient permissions to access your indices

### Connection Problems

- **Network Connectivity**: Verify that OpsiMate can reach your Kibana instance
- **SSL/TLS Issues**: Check if your Kibana instance uses HTTPS and ensure certificates are valid
- **CORS Settings**: If embedding dashboards, ensure Kibana allows embedding from OpsiMate's domain

### Dashboard Display Issues

- **Dashboard Not Showing**: Verify that the dashboard exists and is accessible with your API key
- **Missing Logs**: Check if Elasticsearch indices are correctly configured and accessible
- **Tag Mismatch**: Ensure that service tags match dashboard names or tags

### Database Constraint Issues

If you encounter a 500 Internal Server Error when creating a Kibana integration, it may be due to a database constraint issue. OpsiMate has been updated to support Kibana integrations, but if you're using an older version, please update to the latest version.

## Best Practices

- **Use Consistent Tagging**: Apply the same tags in Kibana and OpsiMate for automatic linking
- **Create Service-Specific Dashboards**: Design dashboards focused on specific services
- **Regularly Rotate API Keys**: For security, rotate your API keys periodically
- **Use Index Patterns**: Configure specific index patterns to limit data access
- **Import Critical Logs Only**: Be selective about which logs you import to avoid overwhelming the system

## Next Steps

After setting up Kibana integration:

1. [[Set up log-based alerts](/docs/](/monitoring/setting-up-alerts) to monitor for critical issues
2. [[Create custom dashboards](/docs/](/dashboards/creating-dashboards) that incorporate log data
3. [[Configure incident response workflows](/docs/](/advanced/incident-response) based on log patterns
