---
sidebar_position: 1
---

# Providers & Services Overview

Understanding the relationship between providers and services is key to effectively using OpsiMate for infrastructure monitoring.

## What are Providers?

**Providers** are the infrastructure platforms where your applications run. Think of them as the "containers" that host your services:

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>🖥️ Server Provider</h3>
    <p style={{margin: '0 0 10px 0', fontSize: '14px'}}>A single server or VM that hosts multiple services</p>
    <ul style={{margin: 0, paddingLeft: '20px', fontSize: '14px'}}>
      <li>Systemd services</li>
      <li>Docker containers</li>
      <li>Background processes</li>
    </ul>
  </div>
  
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', color: 'white'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>☸️ K8S Cluster</h3>
    <p style={{margin: '0 0 10px 0', fontSize: '14px'}}>Kubernetes cluster with multiple nodes</p>
    <ul style={{margin: 0, paddingLeft: '20px', fontSize: '14px'}}>
      <li>Pods across nodes</li>
      <li>Deployments</li>
      <li>Services & ingress</li>
    </ul>
  </div>
</div>

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/provider-overview.png" alt="Provider Overview Dashboard" class="doc-image" />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>OpsiMate provider overview showing connected infrastructure</p>
</div>

## What are Services?

**Services** are the core applications and processes within your system—delivering value or enabling critical capabilities, not necessarily only for end‑users. These are the components you need to both monitor and control to ensure smooth operation and effective management.

### Service Types

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0'}}>
  <a href="/docs/providers-services/services/container-services" style={{textDecoration: 'none', color: 'inherit'}}>
    <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', cursor: 'pointer', transition: 'all 0.2s'}}>
      <strong>🐳 Containers</strong><br/>
      <small>Docker containers running your applications</small>
    </div>
  </a>
  <a href="/docs/providers-services/services/systemd-services" style={{textDecoration: 'none', color: 'inherit'}}>
    <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', cursor: 'pointer', transition: 'all 0.2s'}}>
      <strong>⚙️ Systemd Services</strong><br/>
      <small>Linux system services managed by systemd</small>
    </div>
  </a>
  <a href="/docs/providers-services/services/kubernetes-pods" style={{textDecoration: 'none', color: 'inherit'}}>
    <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef', cursor: 'pointer', transition: 'all 0.2s'}}>
      <strong>🎯 Kubernetes Pods</strong><br/>
      <small>Containerized apps in Kubernetes clusters</small>
    </div>
  </a>
</div>


## Getting Started

Ready to set up your infrastructure monitoring?

1. **[Add Providers](providers/add-provider)** - Connect your infrastructure
2. **[Discover Services](services/add-services)** - Find and import your applications  
3. **[Monitor Everything](../dashboards/overview)** - Keep your services healthy

:::tip Pro Tip
Start with one provider and let OpsiMate discover its services automatically. You can always add more providers and manually add specific services later!
:::
