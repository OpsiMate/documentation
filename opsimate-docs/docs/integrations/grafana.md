---
sidebar_position: 2
---

# Grafana Integration

Connect OpsiMate to your Grafana dashboards to visualize metrics and alerts directly within the OpsiMate interface.

## Prerequisites

Before setting up the Grafana integration, you'll need:

- A running Grafana instance (version 7.0 or higher)
- Admin access to create API keys in Grafana
- Network connectivity between OpsiMate and your Grafana instance

## Setting Up Grafana Integration

### Step 1: Create an API Key in Grafana

1. Log in to your Grafana instance with admin privileges
2. Navigate to **Configuration** > **API Keys**
3. Click **Add API key**
4. Configure the API key:
   - **Name**: OpsiMate Integration
   - **Role**: Admin (or Editor if you prefer more restricted access)
   - **Time to live**: Choose an expiration period (or no expiration)
5. Click **Add** to create the key
6. **Important**: Copy the generated API key immediately as it won't be shown again

<!-- Image placeholder: Creating a Grafana API key -->

### Step 2: Add Grafana Integration in OpsiMate

1. In OpsiMate, navigate to the **My Integrations** page
2. Click on the **External Integrations** tab
3. Click **Add Integration**
4. Select **Grafana** as the integration type
5. Fill in the integration details:
   - **Name**: A descriptive name for this integration (e.g., "Production Grafana")
   - **URL**: The base URL of your Grafana instance (e.g., `https://grafana.example.com`)
   - **API Key**: Paste the API key you created in Step 1
6. Click **Test Connection** to verify the integration works
7. Click **Save** to add the integration

<!-- Image placeholder: Adding Grafana integration in OpsiMate -->

## Using Grafana Dashboards in OpsiMate

Once the integration is set up, you can access your Grafana dashboards directly from OpsiMate:

### Viewing Dashboards

1. Navigate to the **Dashboard** page in OpsiMate
2. Select a service to view its details
3. Click on the **External Links** dropdown
4. Select a Grafana dashboard from the list

<!-- Image placeholder: External links dropdown with Grafana dashboards -->

The Grafana dashboard will open in a new tab or within the OpsiMate interface, depending on your settings.

### Linking Dashboards to Services

To associate specific Grafana dashboards with services:

1. Navigate to the **My Integrations** page
2. Find your service in the list
3. Click the **Edit** button
4. In the **Tags** field, add tags that match your Grafana dashboard names or tags
5. Click **Save** to update the service

OpsiMate will automatically link dashboards to services based on matching tags.

## Importing Grafana Alerts

OpsiMate can import and display alerts from your Grafana instance:

1. Navigate to the **My Integrations** page
2. Find your Grafana integration
3. Click the **Import Alerts** button
4. Select which alert rules to import:
   - **All Alerts**: Import all alerts from Grafana
   - **Tagged Alerts**: Only import alerts with specific tags
   - **Dashboard Alerts**: Only import alerts from specific dashboards
5. Click **Import** to bring the alerts into OpsiMate

<!-- Image placeholder: Importing alerts from Grafana -->

Imported alerts will appear in the OpsiMate alerts sidebar and will be associated with services based on tags.

## Refreshing Grafana Data

OpsiMate automatically refreshes Grafana data every 30 seconds, but you can manually refresh:

1. In the External Links dropdown, click the **Refresh Dashboards** button
2. Wait for the refresh to complete
3. The dropdown will update with the latest available dashboards

## Troubleshooting

If you encounter issues with your Grafana integration:

### API Key Issues

- **Invalid API Key**: Generate a new API key in Grafana and update the integration
- **Expired API Key**: Check if your API key has expired and create a new one
- **Permission Issues**: Ensure the API key has sufficient permissions (Admin or Editor)

### Connection Problems

- **Network Connectivity**: Verify that OpsiMate can reach your Grafana instance
- **SSL/TLS Issues**: Check if your Grafana instance uses HTTPS and ensure certificates are valid
- **CORS Settings**: If embedding dashboards, ensure Grafana allows embedding from OpsiMate's domain

### Dashboard Display Issues

- **Dashboard Not Showing**: Verify that the dashboard exists and is accessible with your API key
- **Missing Metrics**: Check if data sources in Grafana are working correctly
- **Tag Mismatch**: Ensure that service tags match dashboard names or tags

## Best Practices

- **Use Consistent Tagging**: Apply the same tags in Grafana and OpsiMate for automatic linking
- **Create Service-Specific Dashboards**: Design dashboards focused on specific services
- **Regularly Rotate API Keys**: For security, rotate your API keys periodically
- **Use Variables**: In Grafana dashboards, use variables to make them more flexible
- **Import Critical Alerts Only**: Be selective about which alerts you import to avoid alert fatigue

## Next Steps

After setting up Grafana integration:

1. [Set up Prometheus integration](/docs/integrations/prometheus) to enhance your metrics collection
2. [Create custom dashboards](/docs/dashboards/creating-dashboards) in OpsiMate
3. [Configure advanced alerts](/docs/monitoring/setting-up-alerts) using Grafana metrics
