---
title: FAQ
sidebar_position: 1
---

# FAQ
Welcome to the OpsiMate FAQ 👋  
This section answers common questions about providers, services, alerts, integrations, and day-to-day usage. If you're ever unsure how something works, start here.

:::tip How to Use This FAQ
- **New to OpsiMate?** Start with the setup and provider questions
- **Setting up monitoring?** Jump to services, alerts, and integrations
- **Troubleshooting?** Check the alerts and connectivity sections
:::


## General

### What is OpsiMate?
OpsiMate is an infrastructure monitoring and alert management platform that brings **services, alerts, and integrations** into one unified dashboard.

Think of it as a **control center**:
- Your infrastructure runs the engines (services)
- External tools watch the engines (monitoring tools)
- OpsiMate shows everything clearly on one dashboard

### Do I need external tools like Grafana or Zabbix to use OpsiMate?
Not necessarily.

OpsiMate can monitor services directly (via SSH, Docker, or Kubernetes), but **integrations like Grafana, Zabbix, or Uptime Kuma** enhance it by providing advanced alerts and metrics.

## Providers

### What is a provider in OpsiMate?
A **provider** represents the infrastructure where your services run.

Examples include:
- A Linux server (via SSH)
- A Kubernetes cluster (via kubeconfig)

Providers are always the **first thing** you set up.

👉 Learn more: [Adding Providers](http://localhost:3000/docs/providers-services/providers/add-provider)

### What provider types does OpsiMate support?
Currently, OpsiMate supports:
- **Server Providers** (SSH-based)
- **Kubernetes Providers** (kubeconfig-based)

Each provider type supports different service discovery methods.

### Why can’t I add services before adding a provider?
Because services **must live somewhere**.

A provider tells OpsiMate *where* to look. Services are then discovered or added **inside** that provider.

## Services

### What is considered a service in OpsiMate?
A service is any running component that delivers value, such as:
- Docker containers
- Systemd services
- Kubernetes pods

**Analogy:**  
Services are the engines. OpsiMate is the dashboard showing how they’re performing.

### How does service auto-discovery work?
Auto-discovery allows OpsiMate to automatically detect:
- Docker containers on a server
- Pods in a Kubernetes cluster

You simply select which detected services you want to monitor.

### Can I manually add services?
Yes.

Some services, like **systemd services**, require manual entry by providing the service name (e.g., `nginx`, `postgresql`).

## Alerts

### How does alerting work in OpsiMate?
OpsiMate does not create alerts by itself. Instead, it:
1. Connects to external monitoring tools (like Grafana or Zabbix)
2. Pulls alerts from those systems
3. Associates them with services using tags

👉 Learn more: [Adding Alerts](/docs/alerts/adding-alerts)

### What alert states are supported?
Alerts in OpsiMate can be:
- **Active** – Currently firing and needs attention
- **Dismissed** – Acknowledged by a user

### Why aren’t my alerts showing up?
Common reasons include:
- The integration isn’t configured correctly
- Service tags don’t match alert tags
- The external alert provider isn’t firing alerts

Double-check:
- Integration credentials
- Tag mappings
- Alert rules in the external system

## Integrations

### What is an integration?
An **integration** is a connection between OpsiMate and an external system that provides alerts, metrics, or dashboards.

Examples include:
- Grafana
- Zabbix
- Uptime Kuma
- Kibana

### What’s the difference between an integration and a provider?
- **Providers** tell OpsiMate *where services run*
- **Integrations** tell OpsiMate *where alerts and metrics come from*

Both work together but serve different purposes.

### What is a webhook and why is it needed?
A webhook allows external systems to **push alerts to OpsiMate in real time**.

**Analogy:**  
A webhook is like a mailman—it delivers alerts immediately when something happens.

## Dashboards & Views

### What is a saved dashboard?
A **saved dashboard** is a stored monitoring view that includes:
- Filters
- Visible columns
- Tags

It lets you quickly return to the same view without rebuilding it.

👉 Learn more: [Saved Dashboards](/docs/dashboards/saved-dashboards)

### What is TV Mode?
TV Mode is a **full-screen alert display** designed for:
- Monitoring rooms
- NOC displays
- Shared team screens

It shows active and dismissed alerts in real time.

👉 Learn more: [TV Mode View](http://localhost:3000/docs/alerts/tv-mode-view)

## Access & Control

### Why does OpsiMate need SSH access?
SSH allows OpsiMate to:
- Check service status
- Start, stop, or restart services
- Monitor server-based infrastructure securely

SSH keys are recommended for better security.

### Can OpsiMate control Kubernetes pods?
Yes.

OpsiMate uses standard **kubectl commands** to manage Kubernetes pods through configured providers.

## Troubleshooting

### What should I check if a provider fails to connect?
Start with:
- Network access
- SSH credentials or kubeconfig validity
- Firewall rules
- Correct host, port, and permissions

### Is OpsiMate suitable for production environments?
Yes.

OpsiMate is designed to support production, staging, and development environments through:
- Role-based access
- Tag-based filtering
- Saved dashboards
- External alert integrations

## Still Have Questions?

If your question isn’t answered here:
1. Use the documentation search
2. Check provider- or integration-specific guides
3. Review alert configurations in your external tools

:::info Help Improve the Docs
If you notice a missing question or unclear explanation, consider contributing to the documentation. Great FAQs are built from real user questions!
:::
