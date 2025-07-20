---
sidebar_position: 1
---

# Add Services

Add and configure services for monitoring across your providers.

## Basic Flow

Adding services is done using the **Add Services** button in the menu that opens when clicking the three-dots icon.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '30px 0'}}>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white', textAlign: 'center'}}>
    <div style={{fontSize: '24px', marginBottom: '10px'}}>1</div>
    <strong>Access Menu</strong>
    <div style={{fontSize: '14px', marginTop: '8px'}}>Click the three-dots icon</div>
  </div>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', color: 'white', textAlign: 'center'}}>
    <div style={{fontSize: '24px', marginBottom: '10px'}}>2</div>
    <strong>Add Services</strong>
    <div style={{fontSize: '14px', marginTop: '8px'}}>Click Add Services button</div>
  </div>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', color: 'white', textAlign: 'center'}}>
    <div style={{fontSize: '24px', marginBottom: '10px'}}>3</div>
    <strong>Select Services</strong>
    <div style={{fontSize: '14px', marginTop: '8px'}}>Choose relevant services</div>
  </div>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', borderRadius: '12px', color: 'white', textAlign: 'center'}}>
    <div style={{fontSize: '24px', marginBottom: '10px'}}>4</div>
    <strong>Start Monitoring</strong>
    <div style={{fontSize: '14px', marginTop: '8px'}}>Begin service monitoring</div>
  </div>
</div>

Based on the provider, you can select the services that are relevant to that specific provider.

## Adding

### Systemd Services
**Manual Entry**: Added manually by entering the service name.

### Docker Containers
**Automatic Detection**: OpsiMate checks for existing containers, and you can add them directly from the add screen.

### Kubernetes Pods
**Automatic Detection**: Works the same way as Docker containers.

## Control

### Systemd Services
**SSH Commands**: Controlled via SSH commands using `service start`, `stop`, `restart`, and `logs` to manage the service.

### Docker Containers
**Docker Commands**: Controlled via SSH commands with Docker.

### Kubernetes Pods
**Kubectl Commands**: Controlled using kubectl commands.

## Step 1: Select Service Type

Choose the type of service you want to add:

* **Systemd Services**
* **Docker Containers**
* **Kubernetes Pods**

## Step 2: Configure Service

Configure the service based on the selected type:

### Systemd Services

* **Service Name**: Enter the name of the systemd service.
* **Port**: Enter the port number used by the service.

### Docker Containers

* **Container Name**: Enter the name of the Docker container.
* **Port**: Enter the port number used by the container.

### Kubernetes Pods

* **Pod Name**: Enter the name of the Kubernetes pod.
* **Namespace**: Enter the namespace where the pod is running.

## Step 3: Set Monitoring Options

Configure how OpsiMate monitors your service:

### Health Checks
- **HTTP/HTTPS**: Check web endpoints
- **TCP**: Check port connectivity  
- **Command**: Run custom health check commands
- **Process**: Monitor process existence and resource usage

### Monitoring Frequency
- **High**: Every 30 seconds (critical services)
- **Normal**: Every 2 minutes (standard services)
- **Low**: Every 5 minutes (background services)

### Alert Thresholds
- **CPU Usage**: Alert when > 80%
- **Memory Usage**: Alert when > 85%
- **Response Time**: Alert when > 5 seconds
- **Downtime**: Alert after 3 failed checks

## Step 4: Review and Add

Review the service configuration and add the service to OpsiMate.

# Test custom command
/path/to/health-check-script.sh
- Wrong port numbers
- Incorrect health check URLs
- Missing authentication tokens
- Network connectivity issues

### Performance Issues

**High Resource Usage**
- Reduce monitoring frequency for non-critical services
- Optimize health check scripts
- Use TCP checks instead of HTTP when possible

**Slow Response Times**
- Check network latency to monitored services
- Optimize health check timeouts
- Consider local health check proxies

## 📚 Next Steps

After adding your services:

1. **[Monitor Services](../../services/managing-services)** - View service status and metrics
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize service health

:::tip Pro Tip
Start with basic health checks and gradually add more sophisticated monitoring as you learn what works best for your services.
:::
