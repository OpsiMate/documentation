---
sidebar_position: 1
title: ⚡ Quick Start Guide
---

# ⚡ Quick Start Guide

This guide will help you get up and running with OpsiMate in just a few minutes.

:::tip 🎯 Goal
By the end of this guide, you'll have OpsiMate monitoring your first server and displaying real-time metrics!
:::

## 📋 Prerequisites

Before you begin, make sure you have:

- ✅ Access to the OpsiMate platform
- ✅ SSH access to at least one server or VM you want to monitor  
- ✅ SSH private key for authentication
- ✅ Basic knowledge of your server's IP address and SSH configuration

:::info ⏱️ Estimated Time
This setup should take approximately **5-10 minutes** to complete.
:::

## 🔑 Step 1: Log in to OpsiMate

Access the OpsiMate dashboard by navigating to your instance URL and logging in with your credentials.

```
🌐 https://your-opsimate-instance.com
```

:::note 📝 Login Credentials
If you don't have login credentials yet, contact your system administrator or check your welcome email.
:::

---

## 🔗 Step 2: Add Your First Provider

:::info 📊 What's a Provider?
A provider is a server, VM, or Kubernetes cluster that you want to monitor with OpsiMate.
:::

### 📝 Configuration Steps:

1. 📊 Navigate to the **My Integrations** page from the sidebar
2. ➕ Click the **Add Provider** button
3. 📝 Fill in the required information:

| Field | Description | Example |
|-------|-------------|----------|
| **🏷️ Name** | A descriptive name for your provider | `Production VM` |
| **🌐 Provider IP** | The IP address of your server | `192.168.1.100` |
| **👤 Username** | SSH username | `ubuntu` or `root` |
| **🔐 Private Key Filename** | Path to your SSH private key | `/path/to/key.pem` |
| **🚪 SSH Port** | Usually 22 (default) | `22` |
| **💻 Provider Type** | Select VM or K8S | `VM` |

4. 💾 Click **Save** to add your provider

:::tip 🔒 Security Best Practice
Ensure your SSH private key has proper permissions (`chmod 600`) and is stored securely.
:::

## Step 3: Discover Services

Once your provider is added:

1. Go to the **My Integrations** page
2. Find your newly added provider
3. Click the **Discover Services** button
4. OpsiMate will automatically detect running services on your server

<!-- Image placeholder: Discovering services interface -->

## Step 4: View Your Services

1. Navigate to the **Dashboard** page
2. You'll see all your discovered services with their current status
3. Click on any service to view detailed information

<!-- Image placeholder: Main dashboard view -->

## Step 5: Set Up Basic Monitoring

1. Select a service from your dashboard
2. Click on the **Monitoring** tab
3. Enable basic monitoring by toggling the switch
4. Configure alert thresholds if needed

## Next Steps

Now that you have OpsiMate up and running, you can:

- [[Set up integrations](/docs/](/integrations/overview) with Grafana, Prometheus, etc.
- [[Configure advanced alerts](/docs/](/monitoring/setting-up-alerts)
- [[Create custom dashboards](/docs/](/dashboards/creating-dashboards)
- [[Set up incident response workflows](/docs/](/advanced/incident-response)

Congratulations! You've successfully set up OpsiMate and started monitoring your first services.
