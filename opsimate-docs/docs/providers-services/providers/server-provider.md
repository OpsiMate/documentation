---
sidebar_position: 2
---

# 🖥️ Server Provider

Monitor services running on individual servers or VMs with SSH access.

## 🎯 What is a Server Provider?

A Server Provider represents a single server, VM, or physical machine that hosts multiple services. This is the most common provider type for traditional infrastructure.

### Typical Use Cases
- **Web servers** running Nginx, Apache, or application servers
- **Database servers** with PostgreSQL, MySQL, or MongoDB
- **Application servers** with Node.js, Python, or Java applications
- **Utility servers** with Redis, RabbitMQ, or other supporting services

## 🚀 Quick Setup

### Prerequisites
- SSH access to the target server
- SSH key authentication (recommended) or password access
- Server running Linux, macOS, or Windows with SSH server

### Basic Configuration

```yaml
name: "Production Web Server"
type: "server"
host: "192.168.1.100"
port: 22
username: "ubuntu"
ssh_key: "/path/to/private-key.pem"
```

### Connection Test

Service Peek will test the connection and show:
- ✅ SSH connectivity status
- 🔍 Discovered services (systemd, Docker, processes)
- 📊 Server resources (CPU, memory, disk)

## 🔧 Advanced Configuration

### SSH Key Setup

Generate and configure SSH keys for secure access:

```bash
# Generate SSH key pair
ssh-keygen -t ed25519 -f ~/.ssh/service_peek_server -C "service-peek@monitoring"

# Copy public key to server
ssh-copy-id -i ~/.ssh/service_peek_server.pub ubuntu@192.168.1.100

# Test connection
ssh -i ~/.ssh/service_peek_server ubuntu@192.168.1.100 'echo "Connection successful"'
```

### SSH Configuration Options

```yaml
# Full server provider configuration
name: "Production Web Server"
type: "server"
host: "web.example.com"
port: 2222  # Custom SSH port
username: "deploy"
ssh_key: "/app/keys/server_key.pem"
connection_timeout: 30
command_timeout: 60
sudo_required: true  # For systemd service management
```

### Jump Host Configuration

For servers behind bastion hosts:

```yaml
name: "Internal Database Server"
type: "server"
host: "10.0.1.100"
port: 22
username: "ubuntu"
ssh_key: "/path/to/key.pem"
jump_host:
  host: "bastion.example.com"
  port: 22
  username: "bastion-user"
  ssh_key: "/path/to/bastion-key.pem"
```

## 🔍 Service Discovery

Server providers automatically discover various service types:

### Systemd Services
```bash
# Services discovered via systemd
systemctl list-units --type=service --state=active
```

Common systemd services detected:
- **nginx** - Web server
- **postgresql** - Database
- **redis** - Cache
- **docker** - Container runtime

### Docker Containers
```bash
# Containers discovered via Docker API
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```

Container information collected:
- Container name and ID
- Image and tag
- Port mappings
- Resource usage
- Health status

### Process Monitoring
```bash
# Processes discovered via ps/top
ps aux --sort=-%cpu | head -20
```

Process monitoring includes:
- CPU and memory usage
- Process uptime
- Command line arguments
- Parent-child relationships

## 📊 Monitoring Capabilities

### System Metrics
- **CPU Usage**: Per-core and overall utilization
- **Memory**: RAM usage, swap, buffers/cache
- **Disk**: Usage, I/O rates, free space
- **Network**: Bandwidth, packet rates, connections

### Service Health Checks
- **HTTP/HTTPS**: Web service endpoint checks
- **TCP**: Port connectivity tests
- **Process**: Service process existence
- **Custom**: Shell script health checks

### Log Monitoring
```bash
# Common log files monitored
/var/log/nginx/access.log
/var/log/nginx/error.log
/var/log/postgresql/postgresql.log
/var/log/syslog
/var/log/auth.log
```

## 🚨 Common Issues & Solutions

### SSH Connection Problems

**Permission Denied**
```bash
# Check SSH key permissions
chmod 600 ~/.ssh/private_key
chmod 700 ~/.ssh/

# Verify public key on server
cat ~/.ssh/authorized_keys | grep "service-peek"
```

**Connection Timeout**
- Check firewall rules on server
- Verify SSH service is running: `systemctl status ssh`
- Test network connectivity: `telnet server-ip 22`

**Host Key Verification Failed**
```bash
# Remove old host key and retry
ssh-keygen -R server-hostname-or-ip
```

### Service Discovery Issues

**No Services Found**
- Check if services are actually running
- Verify user permissions for systemctl/docker commands
- Try manual discovery commands

**Partial Discovery**
- Some services may require sudo access
- Docker socket permissions: `usermod -aG docker username`
- Systemd service permissions

### Performance Issues

**High CPU/Memory Usage**
- Reduce monitoring frequency
- Optimize health check scripts
- Use efficient monitoring commands

**Slow Response Times**
- Check network latency
- Optimize SSH connection settings
- Use connection multiplexing

## 🔧 Best Practices

### Security
- Use SSH keys instead of passwords
- Restrict SSH access to monitoring user
- Regular key rotation
- Firewall rules for SSH access

### Monitoring Efficiency
- Group related servers by function
- Use appropriate monitoring intervals
- Implement smart alerting thresholds
- Regular cleanup of old metrics

### Maintenance
- Keep SSH keys secure and backed up
- Monitor SSH connection health
- Regular server updates and patches
- Document server configurations

## 📚 Next Steps

After setting up your server provider:

1. **[Configure Services](../services/add-services)** - Fine-tune service monitoring
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of server issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize server metrics

:::tip Pro Tip
Start with a single test server to verify your SSH configuration and monitoring setup before adding production servers.
:::
