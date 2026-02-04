---
title: Glossary
sidebar_position: 1
---

# Glossary
Welcome to the OpsiMate glossary! This page explains the key terms and concepts you'll encounter while using OpsiMate. Think of this as your quick reference guide whenever you run into unfamiliar terminology.

:::tip How to Use This Glossary
- **New to OpsiMate?** Browse through to get familiar with core concepts.
- **Reading documentation?** Use this page as a quick reference when a term is unclear.
- **Setting up monitoring?** Return here to clarify concepts before proceeding.
:::

### A-C

#### Active Alert
An alert in **Active** state is currently firing and requires your attention.  
- See also [TV Mode](/docs/docs/alerts/tv-mode-view) for full-screen monitoring.

#### Alerts
Notifications generated when service health or metrics cross predefined thresholds.  
- Can come from OpsiMate or integrated tools like [Grafana](../integrations/grafana), [Zabbix](../integrations/zabbix), or [Uptime Kuma](../integrations/uptime-kuma).  
> Think of alerts as your system’s “check engine” light.

#### API Token
A secret key used to securely authenticate requests between OpsiMate and external integrations.  
- Example usage: configuring [Uptime Kuma webhooks](../integrations/uptime-kuma).

#### Auto-discovery
OpsiMate automatically detects available services (like Docker containers or Kubernetes pods) under a configured provider.  
- This saves time and ensures you don’t miss any critical services.

#### Alerts Dismissed
A status indicating that an alert has been acknowledged or resolved.  

### D-F

#### Dashboard
A visual interface displaying alerts, service status, and metrics.  
- Can be saved, tagged, and filtered for quick access.  
- Related guide: [Saved Dashboards](/docs/docs/dashboards/saved-dashboards).

#### Docker Commands
SSH-based commands used to control Docker containers monitored by OpsiMate:  

```bash
docker start container-name
docker stop container-name
docker restart container-name
```
### E–F

#### External System / Integration
External tools connected to **OpsiMate** to provide alerts, metrics, logs, or dashboards.

Common examples include:
- [Grafana](https://grafana.com/)
- [Datadog](https://www.datadoghq.com/)
- [Kibana](https://www.elastic.co/kibana/)
- [Zabbix](https://www.zabbix.com/)

**Analogy:** Think of integrations as OpsiMate’s *helpers*—they do the monitoring work and send the important information back to OpsiMate to organize and display.

### G–L

#### Integration
An **integration** is the actual connection between OpsiMate and an external system. Once connected, OpsiMate can pull in alerts, metrics, or logs and manage them from a single place.

If *External Systems* are the helpers, **integrations** are the handshakes that allow them to talk to OpsiMate.

#### Kubernetes Pods
Pods are the **smallest deployable units in Kubernetes**, each containing one or more containers that run together.

OpsiMate can automatically discover and monitor pods when connected to a Kubernetes provider.

Learn more:
- [Kubernetes Pods Documentation](https://kubernetes.io/docs/concepts/workloads/pods/)

#### Kubectl Commands
`kubectl` is the command-line tool used to manage Kubernetes clusters, pods, and resources.

Common examples include:
```bash
kubectl get pods -n namespace
kubectl delete pod pod-name -n namespace
```
These commands allow you to inspect and control Kubernetes workloads that OpsiMate is monitoring.

### Providers
Providers represent the infrastructure where your services live—such as servers, Kubernetes clusters, or cloud platforms.

Providers are the **starting point** when connecting your infrastructure to OpsiMate.

Learn more:
- [Adding Providers](/docs/docs/providers-services/providers/add-provider)

### M–O

#### Saved Dashboard
A **saved dashboard** is a stored monitoring view that includes selected filters, visible columns, and tags.

This allows you to quickly return to your preferred monitoring setup without rebuilding it each time.

:::tip Pro Tip
Save dashboards for frequently checked environments like production, staging, or critical services.
:::

#### Service
A **service** is any running application, process, container, or pod that delivers value within your system.

Services are the core units monitored and controlled in OpsiMate.

**Analogy:**  
Services are the *engines*, and OpsiMate is the *dashboard* showing how they’re performing.

#### Service Tags
Service tags are labels applied to services to help organize, filter, and associate them with alerts.

Common examples include:
- `environment` (production, staging)
- `team`
- `criticality`

Tags play a key role in alert correlation and filtering across dashboards.

### P–R

#### SSH (Secure Shell)
SSH is a secure protocol used to remotely access and manage servers.

OpsiMate relies on SSH to monitor and control **server-based providers**.

Learn more:
- [What is SSH?](https://www.ssh.com/academy/ssh)

#### Systemd Service
A **systemd service** is a Linux system service managed by `systemd`.

OpsiMate allows you to monitor and control systemd services using SSH-based commands:
```bash
sudo systemctl start service-name
sudo systemctl stop service-name
sudo systemctl restart service-name
```
This makes it easy to manage core server services directly from OpsiMate.

### S–Z

#### TV Mode
TV Mode is a **full-screen alert display** designed for shared screens or monitoring rooms.

It shows:
- Active alerts
- Dismissed alerts
- Real-time service health at a glance

Learn more:
- [TV Mode View](/docs/docs/alerts/tv-mode-view)

#### Webhook
A **webhook** is an HTTP callback that allows external systems to push alerts to OpsiMate in real time.

Tools like [Uptime Kuma](https://uptime.kuma.pet/) and [Zabbix](https://www.zabbix.com/) use webhooks to notify OpsiMate when issues occur.

**Analogy:**  
A webhook is like a *mailman*—it automatically delivers messages the moment something happens.

#### Zabbix
Zabbix is an enterprise monitoring platform used for tracking networks, servers, and applications.

When integrated with OpsiMate, Zabbix sends alerts via webhooks for centralized alert management.

Learn more:
- [Zabbix Documentation](https://www.zabbix.com/documentation)

### How These Terms Fit Together
Understanding how these concepts connect helps you get the most out of OpsiMate:

- **Providers** host your infrastructure  
- **Services** run on providers  
- **Service tags** help group and correlate services with alerts  
- **Integrations** pull alerts and metrics from external systems  
- **Webhooks** push alerts into OpsiMate in real time  
- **Dashboards** and **TV Mode** visualize system health  
- **SSH** and **Kubectl commands** allow service-level control  

:::success Learning Path
Start by adding Providers and Services, set up Dashboards, then connect integrations for alerting. Once comfortable, explore advanced monitoring with auto-discovery and webhooks.
:::



