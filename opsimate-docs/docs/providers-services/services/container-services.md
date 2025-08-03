---
sidebar_position: 3
---

# Docker Containers

Monitor Docker containers running on your servers.

## Adding

**Automatic Detection**: OpsiMate checks for existing containers, and you can add them directly from the add screen.

### Process
1. Click the three-dots menu
2. Select "Add Services"
3. Choose your server provider
4. Select "Docker Container" type
5. Choose from detected containers

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/adding-container-service.png" alt="Adding Container Service" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>Adding a Docker container service to OpsiMate</p>
</div>

## Control

**Docker Commands**: Controlled via SSH commands with Docker.

### Basic Operations
```bash
# Start container
docker start container-name

# Stop container
docker stop container-name

# Restart container
docker restart container-name

```
