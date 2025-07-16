---
sidebar_position: 1
---

# Quick Start Guide

This guide will help you get up and running with OpsiMate in just a few minutes.

## Prerequisites

Before you begin, make sure you have:

- Access to the OpsiMate platform
- SSH access to at least one server or VM you want to monitor
- SSH private key for authentication

## Step 1: Log in to OpsiMate

Access the OpsiMate dashboard by navigating to your instance URL and logging in with your credentials.

<!-- Image placeholder: OpsiMate login screen -->

## Step 2: Add Your First Provider

1. Navigate to the **My Integrations** page from the sidebar
2. Click the **Add Provider** button
3. Fill in the required information:
   - **Name**: A descriptive name for your provider (e.g., "Production VM")
   - **Provider IP**: The IP address of your server
   - **Username**: SSH username
   - **Private Key Filename**: Path to your SSH private key
   - **SSH Port**: Usually 22 (default)
   - **Provider Type**: Select VM or K8S

<!-- Image placeholder: Adding a provider form -->

4. Click **Save** to add your provider

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

- [Set up integrations](/docs/integrations/overview) with Grafana, Prometheus, etc.
- [Configure advanced alerts](/docs/monitoring/setting-up-alerts)
- [Create custom dashboards](/docs/dashboards/creating-dashboards)
- [Set up incident response workflows](/docs/advanced/incident-response)

Congratulations! You've successfully set up OpsiMate and started monitoring your first services.
