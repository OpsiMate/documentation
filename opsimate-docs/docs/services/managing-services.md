---
sidebar_position: 1
---

# 🚀 Managing Services

Discover how Service Peek transforms your infrastructure monitoring with intelligent service management and real-time insights.

## 🎯 What Are Services?

Services in Service Peek represent any monitored component in your infrastructure:

<div style={{display: 'flex', gap: '20px', margin: '20px 0'}}>
  <div style={{flex: 1, padding: '20px', border: '2px solid #e1e5e9', borderRadius: '8px'}}>
    <h3>🐳 Containers</h3>
    <p>Docker containers with real-time status monitoring</p>
  </div>
  <div style={{flex: 1, padding: '20px', border: '2px solid #e1e5e9', borderRadius: '8px'}}>
    <h3>⚙️ System Services</h3>
    <p>Linux systemd services and background processes</p>
  </div>
  <div style={{flex: 1, padding: '20px', border: '2px solid #e1e5e9', borderRadius: '8px'}}>
    <h3>☸️ Kubernetes</h3>
    <p>Pods, deployments, and cluster resources</p>
  </div>
</div>

## 📊 Service Dashboard

Your command center for monitoring all services at a glance.

:::tip Video Tutorial
📹 **Coming Soon**: Watch our interactive dashboard walkthrough
:::

### Key Features

- **🔍 Real-time Status**: Live updates every few seconds
- **🏷️ Smart Tagging**: Organize services with custom labels
- **⚡ Quick Actions**: Start, stop, restart services instantly
- **📈 Health Metrics**: CPU, memory, and network usage

<!-- 🖼️ Image Placeholder: Service Dashboard Overview -->
*Screenshot: Service dashboard showing multiple service cards with status indicators*

## 🔧 Service Management

### Quick Actions

Manage services directly from the dashboard:

```bash
# Service Peek automatically detects these operations
sudo systemctl start nginx
docker restart my-app
kubectl scale deployment/api --replicas=3
```

### Service Details Panel

Click any service to reveal:

- 📊 **Performance Metrics**
- 🔗 **Network Information** 
- 📝 **Configuration Details**
- 📋 **Recent Logs**

<!-- 🖼️ Image Placeholder: Service Details Panel -->
*Screenshot: Detailed service information panel*

## 🏷️ Smart Tagging System

Organize your services with intelligent tagging for better monitoring and alerting.

:::info Pro Tip
Use tags like `production`, `database`, `api` to create logical service groups
:::

### Tag Benefits
- **🎯 Targeted Alerts**: Set alerts for specific service groups
- **🔍 Quick Filtering**: Find services instantly
- **📊 Group Metrics**: Monitor service categories together

<!-- 🖼️ Image Placeholder: Service Tagging Interface -->
*Screenshot: Service tagging and filtering interface*

## 📈 Monitoring & Insights

### Real-time Status Tracking

<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', margin: '20px 0'}}>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🟢 Healthy Services</strong><br/>
    Real-time monitoring with instant status updates
  </div>
  <div style={{padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
    <strong>🔴 Critical Alerts</strong><br/>
    Immediate notifications for service failures
  </div>
</div>

### Performance Metrics
- **⚡ Response Times**: Track service performance
- **💾 Resource Usage**: Monitor CPU and memory
- **🌐 Network Health**: Check connectivity status

:::tip Video Demo
📹 **Coming Soon**: Watch our service monitoring walkthrough
:::

## 🚀 Next Steps

Ready to dive deeper? Explore these advanced features:

- [🔔 Set up Alerts](../features/alerts) for proactive monitoring
- [📊 Create Dashboards](../dashboards/creating-dashboards) for custom views
- [🔗 Configure Integrations](../integrations/overview) with your tools
2. Check the status of services on the same provider
3. Use the service dependency map (if configured)

## Best Practices for Service Management

- **Use Consistent Naming**: Adopt a naming convention for your services
- **Apply Meaningful Tags**: Tag services by environment, team, application, etc.
- **Group Related Services**: Use tags to group services that work together
- **Document Service Dependencies**: Note which services depend on others
- **Set Up Appropriate Alerts**: Configure alerts based on service importance
- **Regular Maintenance**: Schedule regular maintenance for critical services

## Next Steps

After learning how to manage services:

1. [[Set up alerts](/docs/](/monitoring/setting-up-alerts) for critical services
2. [[Create custom dashboards](/docs/](/dashboards/creating-dashboards) to visualize service health
3. [[Configure automated actions](/docs/](/advanced/incident-response) for common issues
