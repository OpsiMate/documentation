---
sidebar_position: 1
---

# 🎯 Providers & Services Overview

Understanding the relationship between providers and services is key to effectively using Service Peek for infrastructure monitoring.

## 🏗️ What are Providers?

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
  
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', color: 'white'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>☁️ AWS EC2 (Dynamic)</h3>
    <p style={{margin: '0 0 10px 0', fontSize: '14px'}}>Auto-scaling group of multiple servers</p>
    <ul style={{margin: 0, paddingLeft: '20px', fontSize: '14px'}}>
      <li>Multiple EC2 instances</li>
      <li>Auto-discovered services</li>
      <li>Dynamic scaling</li>
    </ul>
  </div>
</div>

## 🚀 What are Services?

**Services** are the actual applications and processes that deliver value to your users. These are what you really care about monitoring:

### Service Types

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0'}}>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🐳 Containers</strong><br/>
    <small>Docker containers running your applications</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>⚙️ Systemd Services</strong><br/>
    <small>Linux system services managed by systemd</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🎯 Kubernetes Pods</strong><br/>
    <small>Containerized apps in Kubernetes clusters</small>
  </div>
</div>

## 🔄 The Provider-Service Relationship

```mermaid
graph TD
    A[Provider: Web Server] --> B[Service: Nginx]
    A --> C[Service: Node.js App]
    A --> D[Service: Redis]
    
    E[Provider: K8S Cluster] --> F[Service: Frontend Pod]
    E --> G[Service: API Pod]
    E --> H[Service: Database Pod]
    
    I[Provider: AWS EC2 Group] --> J[Service: Load Balancer]
    I --> K[Service: App Server 1]
    I --> L[Service: App Server 2]
```

## 🎯 Why This Matters

Understanding this relationship helps you:

- **🔍 Organize Monitoring**: Group related services under their infrastructure
- **🚨 Set Smart Alerts**: Alert on provider issues vs individual service issues  
- **📊 View Dependencies**: See how services relate across your infrastructure
- **⚡ Quick Actions**: Restart services or entire providers as needed

## 🔄 Automatic Service Discovery

When you add a provider, Service Peek automatically discovers services:

:::info Auto-Discovery Process
1. **Connect** to your provider via SSH
2. **Scan** for running services (systemd, Docker, K8s)
3. **Import** discovered services into your dashboard
4. **Monitor** service health and status continuously
:::

## 🚀 Getting Started

Ready to set up your infrastructure monitoring?

1. **[Add Providers](providers/add-provider)** - Connect your infrastructure
2. **[Discover Services](services/add-services)** - Find and import your applications  
3. **[Monitor Everything](../services/managing-services)** - Keep your services healthy

:::tip Pro Tip
Start with one provider and let Service Peek discover its services automatically. You can always add more providers and manually add specific services later!
:::
