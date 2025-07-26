---
sidebar_position: 2
---

# Server Provider

Monitor services running on individual servers with SSH access.

## What is a Server Provider?

A Server Provider represents a single server that hosts multiple services. This is the most common provider type for traditional infrastructure.

## Quick Setup

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

**Automatic Discovery**: OpsiMate automatically detects all Docker containers running on the server, and you can add them directly from the my providers page.

### Systemd Services

**Manual Configuration**: Systemd services require manual specification during the service addition process.
