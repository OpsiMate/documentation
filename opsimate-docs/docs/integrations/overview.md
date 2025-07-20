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

### Prometheus  
Open-source monitoring system with dimensional data model and powerful query language.

### Kibana
Data visualization dashboard for Elasticsearch, used for log analysis and search.

### Coralogix
Cloud-native observability platform for logs, metrics, and traces.

## Getting Started

1. Navigate to **My Integrations** page
2. Click **External Integrations** tab  
3. Choose your integration type
4. Follow the setup instructions

Select an integration to learn how to set it up:

- [[Setting up Grafana Integration](/docs/](/integrations/grafana)
- [[Setting up Prometheus Integration](/docs/](/integrations/prometheus)
- [[Setting up Coralogix Integration](/docs/](/integrations/coralogix)
- [[Setting up Kibana Integration](/docs/](/integrations/kibana)
