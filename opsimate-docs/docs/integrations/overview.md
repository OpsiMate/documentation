---
sidebar_position: 1
---

# Integrations Overview

OpsiMate provides seamless integration with popular monitoring and observability tools to give you a unified view of your infrastructure.

## Supported Integrations

OpsiMate currently supports the following integrations:

- **Grafana**: Connect to your Grafana dashboards for visualization
- **Prometheus**: Pull metrics and alerts from Prometheus
- **Coralogix**: Integrate with Coralogix for log analysis
- **Kibana**: Connect to Kibana for log visualization and analysis

<!-- Image placeholder: Integrations overview page -->

## Benefits of Integrations

By connecting OpsiMate to your existing monitoring tools, you can:

- **Centralize Monitoring**: View all your metrics, logs, and alerts in one place
- **Correlate Data**: Connect service status with metrics and logs
- **Streamline Workflows**: Access dashboards directly from service details
- **Enhance Alerting**: Combine alerts from multiple sources
- **Simplify Management**: Manage all your monitoring connections in one interface

## Integration Architecture

OpsiMate uses a secure connection model for integrations:

1. **API Keys**: Secure authentication with your monitoring tools
2. **Scheduled Syncs**: Regular updates to keep data fresh (every 10 minutes)
3. **Real-time Updates**: Critical alerts are pushed in real-time
4. **Data Filtering**: Only relevant data is pulled based on your services

## Getting Started with Integrations

To set up your first integration, follow these steps:

1. Navigate to the **My Integrations** page
2. Click on the **External Integrations** tab
3. Choose the integration type you want to set up
4. Follow the specific setup instructions for that integration

The following sections provide detailed setup instructions for each supported integration.

## Next Steps

Select an integration to learn how to set it up:

- [Setting up Grafana Integration](/docs/integrations/grafana)
- [Setting up Prometheus Integration](/docs/integrations/prometheus)
- [Setting up Coralogix Integration](/docs/integrations/coralogix)
- [Setting up Kibana Integration](/docs/integrations/kibana)
