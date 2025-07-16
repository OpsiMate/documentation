---
sidebar_position: 1
---

# Setting Up Alerts

Alerts are a critical component of OpsiMate that help you stay informed about the health and performance of your services.

## Understanding Alerts in OpsiMate

OpsiMate provides a flexible alerting system that can notify you when:
- A service changes state (running, stopped, failed)
- Performance metrics exceed defined thresholds
- Custom conditions are met based on service logs or metrics

## Alert Types

OpsiMate supports several types of alerts:

### Service Status Alerts

These alerts trigger when a service changes its operational status:
- **Service Down**: Triggers when a service stops running
- **Service Recovery**: Triggers when a service returns to running state
- **Service Degraded**: Triggers when a service is running but with issues

### Performance Alerts

These alerts trigger when performance metrics cross defined thresholds:
- **CPU Usage**: High CPU utilization
- **Memory Usage**: High memory consumption
- **Disk Space**: Low disk space
- **Network Traffic**: Unusual network activity

### Integration-Based Alerts

These alerts come from integrated monitoring tools:
- **Grafana Alerts**: Imported from your Grafana dashboards
- **Prometheus Alerts**: Based on Prometheus alert rules
- **Coralogix Alerts**: Log-based alerts from Coralogix
- **Kibana Alerts**: Alerts defined in Kibana

## Setting Up Basic Service Alerts

### Step 1: Navigate to the Service

1. Go to the **Dashboard** page
2. Find and click on the service you want to monitor

### Step 2: Configure Alert Settings

1. In the service details panel, click the **Alerts** tab
2. Click **Add Alert Rule**
3. Configure the basic alert settings:
   - **Alert Name**: A descriptive name for your alert
   - **Alert Type**: Select "Service Status"
   - **Condition**: Choose the condition (e.g., "Service Down")
   - **Severity**: Set the alert priority (Low, Medium, High, Critical)

<!-- Image placeholder: Basic alert configuration form -->

4. Click **Save** to activate the alert

## Setting Up Performance Alerts

### Step 1: Navigate to the Service

1. Go to the **Dashboard** page
2. Find and click on the service you want to monitor

### Step 2: Configure Performance Alert

1. In the service details panel, click the **Alerts** tab
2. Click **Add Alert Rule**
3. Configure the performance alert:
   - **Alert Name**: A descriptive name for your alert
   - **Alert Type**: Select "Performance"
   - **Metric**: Choose the metric to monitor (CPU, Memory, Disk, Network)
   - **Threshold**: Set the threshold value
   - **Duration**: How long the threshold must be exceeded before alerting
   - **Severity**: Set the alert priority

<!-- Image placeholder: Performance alert configuration settings -->

4. Click **Save** to activate the alert

## Tag-Based Alerts

OpsiMate allows you to set up alerts for groups of services using tags:

1. Go to the **Monitoring** page
2. Click **Add Tag Alert**
3. Configure the tag alert:
   - **Alert Name**: A descriptive name for your alert
   - **Tags**: Select the tags to apply this alert to
   - **Alert Type**: Choose the alert type
   - **Condition**: Set the alert conditions
   - **Severity**: Set the alert priority

<!-- Image placeholder: Tag-based alert configuration -->

4. Click **Save** to apply the alert to all services with the selected tags

## Alert Notifications

Configure how you receive alert notifications:

1. Go to the **Settings** page
2. Click on the **Notifications** tab
3. Configure notification channels:
   - **Email**: Set up email notifications
   - **Slack**: Connect to your Slack workspace
   - **Microsoft Teams**: Connect to Teams
   - **Webhook**: Set up custom webhook integrations
   - **PagerDuty**: Connect to PagerDuty for incident management

<!-- Image placeholder: Alert notification settings -->

4. For each channel, configure:
   - **Alert Severity**: Which severity levels trigger notifications
   - **Notification Schedule**: When notifications are sent
   - **Escalation Rules**: How alerts escalate if not acknowledged

## Alert Management

### Viewing Active Alerts

1. Go to the **Dashboard** page
2. The alert count is displayed next to each service
3. Click on a service to see its active alerts
4. The **Alerts** tab in the sidebar shows all active alerts across services

### Acknowledging Alerts

When you receive an alert:

1. Click on the alert in the dashboard or alerts sidebar
2. Review the alert details
3. Click **Acknowledge** to indicate you're working on it
4. Optionally, add a comment about your actions

### Resolving Alerts

After addressing the issue:

1. Find the alert in the alerts list
2. Click **Resolve** to mark it as resolved
3. Add a resolution comment for future reference

## Alert History and Analysis

OpsiMate keeps a history of all alerts:

1. Go to the **Monitoring** page
2. Click on the **Alert History** tab
3. Use filters to find specific alerts:
   - By service
   - By time period
   - By severity
   - By resolution status

<!-- Image placeholder: Alert history view -->

4. Click on any historical alert to view details and resolution information

## Best Practices for Alerts

- **Start Simple**: Begin with basic service status alerts
- **Avoid Alert Fatigue**: Only alert on actionable conditions
- **Use Tags**: Group related services with tags for easier alert management
- **Set Appropriate Thresholds**: Adjust thresholds based on service behavior
- **Document Response Procedures**: Create runbooks for common alerts
- **Review and Refine**: Regularly review alert effectiveness and adjust as needed

## Next Steps

After setting up alerts, consider:

1. [[Creating custom dashboards](/docs/](/dashboards/creating-dashboards) to visualize service health
2. [[Setting up incident response workflows](/docs/](/advanced/incident-response)
3. [[Integrating with external monitoring tools](/docs/](/integrations/overview)
