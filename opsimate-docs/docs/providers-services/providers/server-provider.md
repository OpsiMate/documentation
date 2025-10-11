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

````yaml
name: "Production Web Server"
type: "server"
host: "192.168.1.100"
port: 22

```yaml
ssh_key_file: "server_key.pem"
````

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/serverprovider.png" alt="Screenshot of server provider configuration" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '5px', fontStyle: 'italic'}}>Adding a server provider to OpsiMate</p>
</div>

## Types of Services

Server providers support two primary service monitoring approaches:

### Docker Containers

**Automatic Discovery**: OpsiMate automatically detects all Docker containers running on the server, and you can add them directly from the my providers page.

### Systemd Services

**Manual Configuration**: Systemd services require manual specification during the service addition process.
