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

### Configuration with Secrets

OpsiMate now uses Secrets to securely manage provider credentials and configurations. This eliminates the need to manage configuration files locally.

1. **Create Required Secrets**
   - Navigate to **Settings** > **Secrets**
   - Click **Add New Secret**
   - Create the following secrets:
     - `SSH_KEY`: Your SSH private key
     - `SSH_PASSPHRASE`: (Optional) If your SSH key is password-protected
     - `SERVER_HOST`: Your server's hostname or IP address
     - `SERVER_PORT`: SSH port (usually 22)

2. **Link Secrets to Provider**
   When adding a new Server Provider:
   - Enter the provider name
   - Select the appropriate secrets from the dropdown menus
   - Click "Test Connection" to verify
   - Save the provider configuration

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/server-provider-secrets.png" alt="Server Provider Secrets Configuration" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '5px', fontStyle: 'italic'}}>Configuring a server provider using Secrets in OpsiMate</p>
</div>

:::tip Security Best Practice
Using Secrets provides enhanced security through:
- Encrypted storage of sensitive data
- Access control and audit logging
- No local configuration files to manage
- Automatic secret rotation support
:::

## Types of Services

Server providers support two primary service monitoring approaches:

### Docker Containers

**Automatic Discovery**: OpsiMate automatically detects all Docker containers running on the server, and you can add them directly from the my providers page.

### Systemd Services

**Manual Configuration**: Systemd services require manual specification during the service addition process.
