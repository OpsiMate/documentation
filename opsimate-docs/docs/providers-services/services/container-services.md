---
sidebar_position: 2
---

# 🐳 Container Services

Monitor Docker containers and their applications with comprehensive health checks and resource tracking.

## 🎯 What are Container Services?

Container Services represent Docker containers running on your servers. These are applications packaged with their dependencies, running in isolated environments.

### Common Container Types
- **Web Applications**: Nginx, Apache, Node.js apps
- **Databases**: PostgreSQL, MySQL, MongoDB containers
- **Caches**: Redis, Memcached containers
- **Message Queues**: RabbitMQ, Apache Kafka containers
- **Microservices**: API services, background workers

## 🚀 Quick Setup

### Prerequisites
- Docker installed on target server
- Container already running or ready to start
- SSH access to the server (for remote containers)
- Docker socket access for Service Peek

### Basic Configuration

```yaml
name: "nginx-web-server"
type: "container"
provider: "production-server"
container_name: "nginx"
image: "nginx:latest"
ports:
  - "80:80"
  - "443:443"
health_check:
  type: "http"
  endpoint: "http://localhost:80/health"
  interval: 30
```

## 🔧 Advanced Configuration

### Container Discovery

Service Peek can discover containers automatically:

```bash
# Containers discovered via Docker API
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Status}}\t{{.Ports}}"
```

### Health Check Types

#### HTTP/HTTPS Health Checks
```yaml
health_check:
  type: "http"
  endpoint: "https://localhost:443/api/health"
  method: "GET"
  headers:
    Authorization: "Bearer token123"
  expected_status: 200
  timeout: 10
  interval: 30
```

#### TCP Port Checks
```yaml
health_check:
  type: "tcp"
  host: "localhost"
  port: 5432
  timeout: 5
  interval: 60
```

#### Container Process Checks
```yaml
health_check:
  type: "container"
  container_name: "my-app"
  check_running: true
  check_healthy: true  # Uses Docker HEALTHCHECK
  interval: 30
```

#### Custom Command Checks
```yaml
health_check:
  type: "command"
  command: "docker exec my-app /app/health-check.sh"
  expected_exit_code: 0
  timeout: 15
  interval: 60
```

### Resource Monitoring

Monitor container resource usage:

```yaml
resources:
  cpu:
    warning_threshold: 70
    critical_threshold: 90
  memory:
    warning_threshold: 80
    critical_threshold: 95
  disk:
    warning_threshold: 85
    critical_threshold: 95
  network:
    monitor_bandwidth: true
    warning_threshold: "100MB/s"
```

## 📊 Monitoring Capabilities

### Container Metrics
- **CPU Usage**: Container CPU utilization vs limits
- **Memory**: RAM usage, swap, and memory limits
- **Network**: Ingress/egress traffic, packet rates
- **Disk I/O**: Read/write operations and throughput
- **Container Status**: Running, stopped, restarting states

### Application Metrics
- **Response Times**: HTTP request latency
- **Error Rates**: HTTP 4xx/5xx responses
- **Throughput**: Requests per second
- **Custom Metrics**: Application-specific metrics

### Log Monitoring
```yaml
logs:
  - path: "/var/log/nginx/access.log"
    type: "access"
    format: "nginx"
  - path: "/var/log/nginx/error.log"
    type: "error"
    alert_on_error: true
  - container_logs: true  # Monitor Docker logs
    max_lines: 1000
```

## 🔍 Container Management

### Automatic Actions

Configure automatic responses to issues:

```yaml
actions:
  restart_on_failure:
    enabled: true
    max_attempts: 3
    backoff: "exponential"
  
  scale_on_load:
    enabled: true
    cpu_threshold: 80
    scale_up_command: "docker-compose up --scale web=3"
    scale_down_command: "docker-compose up --scale web=1"
```

### Manual Actions

Define manual actions for operators:

```yaml
manual_actions:
  - name: "Restart Container"
    command: "docker restart {{container_name}}"
    confirmation_required: false
  
  - name: "View Logs"
    command: "docker logs --tail 100 {{container_name}}"
    output_capture: true
  
  - name: "Execute Shell"
    command: "docker exec -it {{container_name}} /bin/bash"
    interactive: true
```

## 🚨 Common Issues & Solutions

### Container Discovery Problems

**Container Not Found**
```bash
# Check if container is running
docker ps | grep container-name

# Check all containers (including stopped)
docker ps -a | grep container-name

# Verify container name/ID
docker inspect container-name
```

**Permission Issues**
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Check docker socket permissions
ls -la /var/run/docker.sock

# Test docker access
docker version
```

### Health Check Failures

**HTTP Health Check Issues**
```bash
# Test health endpoint manually
curl -f http://localhost:8080/health

# Check container port mapping
docker port container-name

# Verify container is listening on port
docker exec container-name netstat -tlnp
```

**Container Status Issues**
```bash
# Check container status and logs
docker ps -a | grep container-name
docker logs container-name

# Inspect container configuration
docker inspect container-name
```

### Resource Monitoring Issues

**High Resource Usage**
```bash
# Check container resource usage
docker stats container-name

# View container resource limits
docker inspect container-name | grep -A 10 "Memory\|Cpu"

# Check host system resources
free -h && df -h
```

**Network Connectivity**
```bash
# Test container networking
docker exec container-name ping google.com

# Check port bindings
docker port container-name

# Verify firewall rules
sudo ufw status
```

## 🔧 Best Practices

### Container Configuration
- Use specific image tags, not `latest`
- Set appropriate resource limits
- Implement proper health checks
- Use multi-stage builds for smaller images

### Monitoring Setup
- Monitor both container and application metrics
- Set realistic alert thresholds
- Use log aggregation for better troubleshooting
- Implement proper backup strategies

### Security
- Run containers as non-root users
- Use secrets management for sensitive data
- Regular image updates and vulnerability scanning
- Network segmentation and firewall rules

## 📊 Advanced Features

### Docker Compose Integration

Monitor entire Docker Compose stacks:

```yaml
# Monitor Docker Compose services
compose_stack:
  name: "web-app-stack"
  compose_file: "/app/docker-compose.yml"
  services:
    - "web"
    - "api"
    - "database"
    - "cache"
```

### Container Orchestration

For advanced container management:

```yaml
orchestration:
  type: "docker-swarm"  # or "kubernetes"
  stack_name: "production-app"
  services:
    - name: "web"
      replicas: 3
      update_strategy: "rolling"
    - name: "api"
      replicas: 2
      placement_constraints: ["node.role==worker"]
```

### Custom Metrics Collection

Collect application-specific metrics:

```yaml
custom_metrics:
  - name: "active_connections"
    command: "docker exec nginx cat /var/log/nginx/status | grep active"
    parser: "regex"
    pattern: "active: (\\d+)"
    
  - name: "queue_size"
    endpoint: "http://localhost:8080/metrics"
    metric_path: "queue.size"
    type: "gauge"
```

## 📚 Next Steps

After configuring your container services:

1. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of container issues
2. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize container metrics
3. **[Configure Actions](../../advanced/actions)** - Automate container management

:::tip Pro Tip
Start with basic health checks and gradually add more sophisticated monitoring as you understand your container's behavior patterns.
:::
