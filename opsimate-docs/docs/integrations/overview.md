---
sidebar_position: 1
---

# Integrations Overview

Integrations are the way to connect external tools to OpsiMate. The goal is to leverage existing tools to enable monitoring, control, and interaction with other interfaces.

## Integration Layers

Each integration can add multiple layers of functionality:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0'}}>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🚨 Receiving Alerts</strong><br/>
    <small>Get alerts from external monitoring systems</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🔗 External Links</strong><br/>
    <small>Link external URLs and dashboards to services</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>📊 Monitoring Data</strong><br/>
    <small>Add logs, metrics, and performance data</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>⚡ Actions</strong><br/>
    <small>Use tools to control services and run actions</small>
  </div>
</div>

## Available Integrations

### Grafana
Visualization and dashboarding platform for metrics and monitoring data.

### Kibana
Data visualization dashboard for Elasticsearch, used for log analysis and search.

### DataDog
Cloud monitoring and analytics platform for infrastructure, applications, and logs.

## Getting Started

1. Navigate to **My Integrations** page
2. Click **External Integrations** tab  
3. Choose your integration type
4. Follow the setup instructions

Select an integration to learn how to set it up:

- [Setting up Grafana Integration](/integrations/grafana)
- [Setting up Kibana Integration](/integrations/kibana)
