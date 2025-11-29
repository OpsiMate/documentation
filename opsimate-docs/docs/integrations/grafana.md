---
sidebar_position: 2
tags: [Links, Monitoring Data, Alerts]
---

# Grafana Integration

**Grafana** is an open-source analytics and interactive visualization platform. It provides charts, graphs, and alerts for monitoring data from various sources.

## Configuration Parameters

Required credentials to connect to Grafana:

- **Grafana URL**: Your Grafana instance URL (e.g., `https://grafana.company.com`)
- **API Key**: Generated from Grafana with viewer role

### How to Generate an API Token (Service Account)

1. In Grafana, log in with an account that can manage **service accounts**.
2. In the left menu, go to **Administration → Users and access → Service accounts**.
3. Click **New service account**, give it a name (for example `opsimate-alerts`), and create it.
4. Open the new service account and click **Generate token**.
5. Choose a **Viewer**-level scope (or the minimal permissions you need) and an expiration time.
6. Copy the generated token **once** and paste it into the **API Key** field in OpsiMate’s configuration.
7. Save your settings in OpsiMate.

## Alerts
- OpsiMate **pulls alerts from Grafana**, so alert rules defined in Grafana automatically surface inside OpsiMate.
- Receive Grafana alerts in OpsiMate

## Official Resources

- **Grafana Website**: [https://grafana.com](https://grafana.com)
- **Documentation**: [https://grafana.com/docs](https://grafana.com/docs)
