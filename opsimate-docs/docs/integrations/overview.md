---
sidebar_position: 1
---

# Integrations Overview

Integrations are how you **add alerts into OpsiMate**.

Some integrations **pull alerts** from external systems (like monitoring or cloud platforms), while others **receive pushed alerts** directly from those tools.

Alerts that arrive via integrations are shown in the **alerts table**, together with the **icon of the integration** they came from, so you always know which source generated each alert.



## Available Integrations

### Grafana

Visualization and dashboarding platform for metrics and monitoring data.

### GCP

Push-based alerts from Google Cloud Platform into OpsiMate via webhooks.

### DataDog

Cloud monitoring and analytics platform for infrastructure, applications, and logs.

### Uptime Kuma

Self-hosted monitoring tool that can push uptime and incident alerts into OpsiMate via webhooks.

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
