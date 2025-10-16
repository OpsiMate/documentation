---
id: deploy
title: Deploy OpsiMate
sidebar_position: 2
---

# Deploy OpsiMate

OpsiMate is designed for easy deployment using Docker. This guide will walk you through deploying OpsiMate using Docker Compose or Docker run commands.

:::info Before You Begin
Make sure your system meets the [system requirements](system-requirements) and that Docker is installed and running.
:::

## Quick Start (Recommended)

The easiest way to get started with OpsiMate is using our one-line installation script:

```bash
curl -fsSL https://raw.githubusercontent.com/OpsiMate/OpsiMate/main/scripts/start-docker.sh | sh
```

This script will:
- Download the latest OpsiMate Docker Compose configuration
- Set up the necessary directories and permissions
- Start OpsiMate using Docker Compose
- Verify that all services are running correctly

:::tip What happens next?
Once the script completes, OpsiMate will be running at `http://localhost:8080`. You'll be able to register your first admin user and start managing your infrastructure right away!
:::

## Alternative Deployment Methods

If you prefer more control over your deployment or need to customize the setup, you can use the Docker run command below.

### Docker Run Command

Deploy OpsiMate with a single Docker command:

```bash
docker run -d \
  --name opsimate \
  --rm \
  -p 3001:3001 -p 8080:8080 \
  opsimate/opsimate
```

### Volume Mounts

| Volume | Purpose |
|--------|---------|
| `/app/data/database` | SQLite database persistence |
| `/app/data/private-keys` | SSH private keys for authentication |
| `/app/config/config.yml` | Custom configuration |

:::success
OpsiMate is now running at `http://localhost:8080`
Register a user for the first time - it will be the first admin user
:::

### Verify Deployment

```bash
# Check container status
docker ps | grep opsimate

# View application logs
docker logs opsimate

# Check health status
curl http://localhost:8080/health
```

## First Login

When you first access OpsiMate at `http://localhost:8080`, you'll be prompted to create your first admin user:

<img src="/img/first-login.png" alt="First Login Screen" style={{width: '400px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />

Simply fill in your email, full name, and password to create the initial admin account. This user will have full administrative privileges to configure providers, manage services, and access all OpsiMate features.

## Next Steps

After deployment:

1. **Access OpsiMate** at `http://localhost:8080`
2. **Configure your settings** - [See configuration guide](configuration)
3. **Check system requirements** - [System requirements](system-requirements)

## Support

If you encounter issues during deployment:

- Check the [configuration guide](configuration)
- Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- Report bugs on [GitHub Issues](https://github.com/opsimate/opsimate/issues)
