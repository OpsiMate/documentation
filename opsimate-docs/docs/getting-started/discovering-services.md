---
sidebar_position: 3
---

# Discovering Services

After adding your providers to OpsiMate, the next step is to discover and monitor the services running on them.

## What is Service Discovery?

Service discovery is the process of automatically detecting services running on your infrastructure. OpsiMate can identify:

- **SYSTEMD Services**: System services managed by systemd
- **Docker Containers**: Containerized applications running with Docker
- **Kubernetes Resources**: Deployments, pods, and services in K8S clusters

## Automatic Service Discovery

### For VM Providers

1. Navigate to the **My Integrations** page
2. Find your VM provider in the list
3. Click the **Discover Services** button

<!-- Image placeholder: Discover services button -->

4. OpsiMate will connect to your VM and automatically detect running services
5. Once complete, you'll see a list of discovered services

### For Kubernetes Providers

1. Navigate to the **My Integrations** page
2. Find your Kubernetes provider in the list
3. Click the **Discover Services** button
4. OpsiMate will connect to your Kubernetes cluster and detect:
   - Deployments
   - StatefulSets
   - DaemonSets
   - Services
5. Once complete, you'll see a list of discovered Kubernetes resources

## Manual Service Addition

If automatic discovery missed some services or you want to add custom services:

1. Navigate to the **My Integrations** page
2. Find your provider in the list
3. Click the **Add Service** button
4. Fill in the service details:
   - **Service Name**: Name of your service
   - **Service Type**: SYSTEMD, Docker, or Custom
   - **Additional Parameters**: Depends on the service type

<!-- Image placeholder: Adding a service manually -->

5. Click **Save** to add the service

## Service Tags

Tags help you organize and filter your services:

1. Select a service from the list
2. Click the **Edit** button
3. Add tags in the tags field (comma-separated)
4. Click **Save** to apply the tags

<!-- Image placeholder: Adding tags to a service -->

Tags are useful for:
- Grouping related services
- Filtering the dashboard view
- Setting up alerts for groups of services
- Creating custom dashboards

## Bulk Service Management

To manage multiple services at once:

1. Navigate to the **My Integrations** page
2. Select multiple services using the checkboxes
3. Use the bulk actions menu to:
   - Add tags to multiple services
   - Enable/disable monitoring
   - Delete services

<!-- Image placeholder: Bulk service management interface -->

## Viewing Discovered Services

After discovery, you can view all your services in two places:

1. **My Integrations Page**: Shows services grouped by provider
2. **Dashboard**: Shows all services with their current status

To view service details:
1. Click on any service in the dashboard
2. The service details panel will show:
   - Current status
   - Provider information
   - Service metadata
   - Monitoring status
   - Associated alerts

## Refreshing Service Status

OpsiMate automatically refreshes service status every 30 seconds, but you can manually refresh:

1. On the Dashboard, click the **Refresh** button
2. For a specific service, click the refresh icon next to its status

## Next Steps

Now that you've discovered your services, you can:

1. [Set up monitoring](/docs/monitoring/setting-up-alerts) for critical services
2. [Create custom dashboards](/docs/dashboards/creating-dashboards) to visualize service health
3. [Configure integrations](/docs/integrations/overview) with monitoring tools
