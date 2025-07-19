---
sidebar_position: 1
---

# ➕ Adding Services

Fine-tune which services to monitor and how to monitor them.

## 🎯 Service Discovery vs Manual Addition

Service Peek offers two ways to add services:

### 🔍 Automatic Discovery (Recommended)
When you add a provider, services are automatically discovered and imported. This is the fastest way to get started.

### ➕ Manual Addition
Add specific services that weren't auto-discovered or configure custom monitoring for existing services.

## 🚀 Adding Services Manually

### Step 1: Navigate to Services

1. Go to **"Services"** in the sidebar
2. Click **"Add Service"** button
3. Choose your provider from the dropdown

### Step 2: Select Service Type

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0'}}>
  <div style={{padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', border: '1px solid #2196f3'}}>
    <strong>🐳 Container Service</strong><br/>
    <small>Docker containers running applications</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#f3e5f5', borderRadius: '8px', border: '1px solid #9c27b0'}}>
    <strong>⚙️ Systemd Service</strong><br/>
    <small>Linux system services managed by systemd</small>
  </div>
  <div style={{padding: '15px', backgroundColor: '#e8f5e8', borderRadius: '8px', border: '1px solid #4caf50'}}>
    <strong>🎯 Kubernetes Pod</strong><br/>
    <small>Containerized applications in K8s</small>
  </div>
</div>

### Step 3: Configure Service Details

#### 🐳 Container Service Configuration

```yaml
name: "nginx-web-server"
provider: "production-server"
container_name: "nginx"
port: 80
health_check: "http://localhost:80/health"
restart_policy: "unless-stopped"
```

#### ⚙️ Systemd Service Configuration

```yaml
name: "postgresql-database"
provider: "database-server"
service_name: "postgresql"
port: 5432
health_check: "systemctl is-active postgresql"
auto_restart: true
```

#### 🎯 Kubernetes Pod Configuration

```yaml
name: "api-backend"
provider: "k8s-cluster"
namespace: "production"
deployment: "api-deployment"
port: 3000
health_check: "/api/health"
replicas: 3
```

### Step 4: Set Monitoring Options

Configure how Service Peek monitors your service:

#### Health Checks
- **HTTP/HTTPS**: Check web endpoints
- **TCP**: Check port connectivity  
- **Command**: Run custom health check commands
- **Process**: Monitor process existence and resource usage

#### Monitoring Frequency
- **High**: Every 30 seconds (critical services)
- **Normal**: Every 2 minutes (standard services)
- **Low**: Every 5 minutes (background services)

#### Alert Thresholds
- **CPU Usage**: Alert when > 80%
- **Memory Usage**: Alert when > 85%
- **Response Time**: Alert when > 5 seconds
- **Downtime**: Alert after 3 failed checks

## 🔧 Advanced Service Configuration

### Custom Health Checks

Create sophisticated health checks for complex services:

```bash
# Database connection check
#!/bin/bash
psql -h localhost -U app_user -d app_db -c "SELECT 1;" > /dev/null 2>&1
echo $?
```

```bash
# API endpoint with authentication
#!/bin/bash
response=$(curl -s -o /dev/null -w "%{http_code}" \
  -H "Authorization: Bearer $API_TOKEN" \
  http://localhost:3000/api/health)
[ "$response" = "200" ] && echo 0 || echo 1
```

### Resource Monitoring

Configure resource monitoring thresholds:

```yaml
resources:
  cpu:
    warning: 70%
    critical: 90%
  memory:
    warning: 80%
    critical: 95%
  disk:
    warning: 85%
    critical: 95%
  network:
    warning: "100MB/s"
    critical: "500MB/s"
```

### Dependencies

Define service dependencies for better alerting:

```yaml
dependencies:
  - service: "postgresql-database"
    type: "hard"  # This service can't work without the dependency
  - service: "redis-cache"
    type: "soft"  # This service can work without the dependency
```

## 📊 Service Groups

Organize related services into groups for easier management:

### Creating Service Groups

1. Go to **"Services"** → **"Groups"**
2. Click **"Create Group"**
3. Add services to the group

### Example Groups

```yaml
# Web Application Stack
group: "web-app"
services:
  - "nginx-proxy"
  - "nodejs-api"
  - "postgresql-db"
  - "redis-cache"

# Monitoring Stack  
group: "monitoring"
services:
  - "prometheus"
  - "grafana"
  - "alertmanager"
```

## 🚨 Troubleshooting

### Service Not Discovered

**Check Service Status**
```bash
# For systemd services
systemctl status service-name

# For Docker containers
docker ps | grep container-name

# For Kubernetes pods
kubectl get pods -n namespace
```

**Verify Permissions**
- Ensure Service Peek can access the service
- Check SSH key permissions for remote services
- Verify kubectl access for Kubernetes services

### Health Check Failures

**Test Health Checks Manually**
```bash
# Test HTTP health check
curl -f http://localhost:8080/health

# Test TCP connectivity
nc -zv localhost 5432

# Test custom command
/path/to/health-check-script.sh
```

**Common Issues**
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
