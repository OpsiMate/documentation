---
sidebar_position: 1
---

# Integrations Overview

Integrations are how you **add alerts into OpsiMate**.

Every integration is a **webhook**: the external system **pushes** its alerts to an OpsiMate webhook URL. OpsiMate never polls a source for alerts.

Alerts that arrive via integrations are shown in the **alerts table**, together with the **icon of the integration** they came from, so you always know which source generated each alert.



## Available Integrations

### Grafana

Push-based alerts from Grafana into OpsiMate via Webhook contact points.

### GCP

Push-based alerts from Google Cloud Platform into OpsiMate via webhooks.

### DataDog

Cloud monitoring and analytics platform for infrastructure, applications, and logs.

### Uptime Kuma

Self-hosted monitoring tool that can push uptime and incident alerts into OpsiMate via webhooks.

### Zabbix

Enterprise-class monitoring solution that can push alerts into OpsiMate via webhooks with auto-resolve and deep linking support.

### Vector

Observability data pipeline. A `filter` and a `remap` turn the log events that matter into OpsiMate alerts through Vector's `http` sink.

## Getting Started

1. Navigate to **My Integrations** page
2. Click **External Integrations** tab
3. Choose your integration type
4. Follow the setup instructions

<div class="image-container">
  <img src="/img/adding-grafana-integration.png" alt="Grafana Integration Setup" className="doc-image" />
  <p>Setting up Grafana integration in OpsiMate</p>
</div>

Select an integration to learn how to set it up:

- [Setting up Grafana Integration](/docs/integrations/grafana)
- [Setting up GCP Integration](/docs/integrations/gcp)
- [Setting up Uptime Kuma Integration](/docs/integrations/uptime-kuma)
- [Setting up Zabbix Integration](/docs/integrations/zabbix)
- [Setting up Vector Integration](/docs/integrations/vector)
