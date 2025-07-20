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

```yaml
ssh_key_file: "server_key.pem"
```

## Types of Services

Server providers support two primary service monitoring approaches:

### Docker Containers

**Automatic Discovery**: OpsiMate automatically detects and monitors all Docker containers running on the server.

**Monitoring Capabilities**:
- Container status and lifecycle events
- Resource utilization (CPU, memory, network, storage)
- Container logs and application events

### Systemd Services

**Manual Configuration**: Systemd services require manual specification during the service addition process.

**Monitoring Capabilities**:
- Service status monitoring (active, inactive, failed, disabled)
- Resource consumption tracking
- Service logs and journal entries
