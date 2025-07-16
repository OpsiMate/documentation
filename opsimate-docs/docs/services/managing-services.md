---
sidebar_position: 1
---

# Managing Services

Services are the core components that OpsiMate helps you monitor and manage. This guide explains how to effectively work with services in the OpsiMate platform.

## Understanding Services in OpsiMate

In OpsiMate, a service represents any application, process, or container running on your infrastructure. Services can be:

- **SYSTEMD Services**: System services managed by systemd on Linux
- **Docker Containers**: Containerized applications
- **Kubernetes Resources**: Deployments, pods, and other Kubernetes resources

Each service has properties like:
- Name
- Status (running, stopped, failed)
- IP address
- Provider information
- Tags for organization and filtering

## Viewing Your Services

### Dashboard View

The main dashboard provides an overview of all your services:

1. Navigate to the **Dashboard** page
2. View services displayed according to your selected view
3. Each service card shows:
   - Service name
   - Current status with color indicator
   - Provider name
   - Alert count (if any)

<!-- Image placeholder: Dashboard service view showing service cards -->

### Service Details

To view detailed information about a service:

1. Click on any service in the dashboard
2. The service details panel will open, showing:
   - Status and uptime
   - Provider details
   - Service IP
   - Container details (for containerized services)
   - Tags
   - Associated alerts
   - Logs (if available)

<!-- Image placeholder: Service details panel with status and properties -->

## Service Tags

Tags are a powerful way to organize and filter your services. They also play a crucial role in alert management and dashboard organization.

### Adding Tags to Services

1. Select a service from the dashboard
2. Click the **Edit** button in the service details panel
3. Add tags in the tags field (comma-separated)
4. Click **Save** to apply the tags

### Using Tags for Filtering

1. In the dashboard, click the **Filter** button
2. Select the **Tags** filter
3. Choose the tags you want to filter by
4. Click **Apply** to show only services with those tags

### Tag-Based Alerts

OpsiMate supports advanced tag-based alerting:

1. Services with multiple tags receive alerts for ALL their tags
2. Alerts are deduplicated if they match multiple tags of the same service
3. If an alert is associated with multiple services (via shared tags), it appears under all relevant services
4. Each service maintains its own alert list based on its specific tags
5. Alert counts are calculated per service based on their unique tag combinations

This ensures that:
- Each service shows exactly the alerts relevant to its tags
- No alerts are missed due to tag complexity
- Shared alerts appear under all relevant services
- Real-time updates maintain consistency across all service views

## Service Status Monitoring

OpsiMate automatically monitors the status of your services:

### Status Types

- **Running**: Service is operational
- **Stopped**: Service is not running
- **Failed**: Service attempted to start but failed
- **Unknown**: Status cannot be determined

### Status Refresh

Service status is automatically refreshed:
- Every 30 seconds in the frontend
- Every 10 minutes via server jobs (refresh-job.ts)

To manually refresh:
1. Click the **Refresh** button in the dashboard toolbar
2. Or click the refresh icon next to an individual service

## Service Actions

OpsiMate allows you to perform various actions on your services:

### Basic Actions

1. Select a service from the dashboard
2. In the service details panel, click the **Actions** button
3. Choose from available actions:
   - **Restart Service**: Restart the service
   - **Stop Service**: Stop the service
   - **Start Service**: Start a stopped service
   - **View Logs**: View service logs

### Custom Actions

You can also create custom actions for services:

1. Navigate to the **Actions** page
2. Click **Create Action**
3. Configure the action with specific commands
4. Associate the action with services or tags

## Service Logs

View logs for your services directly in OpsiMate:

1. Select a service from the dashboard
2. Click the **Logs** tab in the service details panel
3. View the most recent logs for the service
4. Use filters to find specific log entries:
   - By time period
   - By log level
   - By text content

<!-- Image placeholder: Service logs view with filtering options -->

## External Links

OpsiMate integrates with external monitoring tools to provide enhanced visibility:

1. Select a service from the dashboard
2. Click the **External Links** dropdown in the service details panel
3. Choose from available dashboards:
   - Grafana dashboards
   - Prometheus dashboards
   - Kibana dashboards
   - Coralogix dashboards

The dropdown will stay open during your session and won't auto-close during background data updates, providing a smooth user experience.

## Service Troubleshooting

When a service has issues, OpsiMate provides tools to help you troubleshoot:

### Viewing Service Details

1. Check the service status and any error messages
2. Review recent logs for error patterns
3. Check for active alerts related to the service

### Running Diagnostics

1. Select the problematic service
2. Click the **Actions** button
3. Choose **Run Diagnostics**
4. Review the diagnostic results for common issues

### Checking Related Services

Services often depend on each other. To check related services:

1. Look for services with similar tags
2. Check the status of services on the same provider
3. Use the service dependency map (if configured)

## Best Practices for Service Management

- **Use Consistent Naming**: Adopt a naming convention for your services
- **Apply Meaningful Tags**: Tag services by environment, team, application, etc.
- **Group Related Services**: Use tags to group services that work together
- **Document Service Dependencies**: Note which services depend on others
- **Set Up Appropriate Alerts**: Configure alerts based on service importance
- **Regular Maintenance**: Schedule regular maintenance for critical services

## Next Steps

After learning how to manage services:

1. [Set up alerts](/docs/monitoring/setting-up-alerts) for critical services
2. [Create custom dashboards](/docs/dashboards/creating-dashboards) to visualize service health
3. [Configure automated actions](/docs/advanced/incident-response) for common issues
