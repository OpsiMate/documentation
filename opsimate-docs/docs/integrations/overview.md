---
sidebar_position: 1
---

# Integrations Overview

Integrations are how you **add alerts into OpsiMate**.

All supported integrations are **webhook-based**: external monitoring tools send alerts to dedicated OpsiMate webhook endpoints, which then create alerts in your workspace.

Alerts that arrive via integrations are shown in the **alerts table**, together with the **icon of the integration** they came from, so you always know which source generated each alert.



## Available Integrations

| Integration | Endpoint | Description |
| --- | --- | --- |
| [Google Cloud Platform](/docs/integrations/gcp) | `/api/v1/alerts/custom/gcp` | Alerts from Google Cloud Monitoring and Pub/Sub delivered to OpsiMate via webhooks. |
| [Uptime Kuma](/docs/integrations/uptime-kuma) | `/api/v1/alerts/custom/uptimekuma` | Self-hosted uptime and status monitoring tool that pushes alerts to OpsiMate via webhooks. |
| [Grafana](/docs/integrations/grafana) | `/api/v1/alerts/custom/grafana` | Alerting and notification system that sends alerts to OpsiMate through webhook contact points. |
| [Datadog](/docs/integrations/datadog) | `/api/v1/alerts/custom/datadog` | Cloud monitoring and analytics platform that forwards alerts and event data to OpsiMate via webhooks. |
| [Zabbix](/docs/integrations/zabbix) | `/api/v1/alerts/custom/zabbix` | Enterprise-class monitoring solution that pushes alerts to OpsiMate via webhooks with auto-resolve support. |
| [Custom Webhook](/docs/integrations/custom-alerts) | `/api/v1/alerts/custom` | Generic webhook receiver for sending alerts from any tool that supports custom webhooks. |

> **Note:** Coralogix appears in the application as **Coming Soon** and cannot currently be configured. Check back later for support documentation.

## Getting Started

1. Click **Integrations** in the left sidebar. *(This link is available to Admin and Editor users only.)*
2. Find your integration card. Use search or category filters if needed.
3. Click **Configure**.
4. The setup dialog displays the webhook URL and a **Copy** button, along with instructions for that integration.
5. Copy the URL into your external monitoring tool and follow the relevant integration documentation.

<div class="image-container">
  <img src="/img/adding-grafana-integration.png" alt="Grafana Integration Setup" className="doc-image" />
  <p>Setting up Grafana integration in OpsiMate</p>
</div>
