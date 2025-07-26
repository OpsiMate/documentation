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
