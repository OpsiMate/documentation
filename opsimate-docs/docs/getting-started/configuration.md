---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

Service Peek uses a YAML configuration file to manage application settings. This guide covers all available configuration options.

## Configuration File Location

The configuration file should be mounted to `/app/config/configfile.yml` inside the container:

```bash
docker run -d \
  --name service-peek-app \
  -p 3001:3001 \
  -p 8080:8080 \
  -v $(pwd)/config/configfile.yml:/app/config/configfile.yml \
  opsimate/opsimate:0.0.2
```

## Basic Configuration

### Minimal Configuration

```yaml title="configfile.yml"
# Service Peek Configuration
# Simple configuration file with essential settings

# Server configuration
server:
  port: 3001  # Backend API server port
  host: "localhost"  # Use "0.0.0.0" for Docker

# Client configuration  
client:
  port: 8080  # Frontend development server port
  api_url: "http://localhost:3001/api/v1"  # Backend API URL

# Database configuration
database:
  path: "/app/data/database/service_peek.db"  # SQLite database file path (mounted volume)

# Security configuration
security:
  private_keys_path: "/app/data/private-keys"  # SSH private keys directory (mounted volume)

```

## Next Steps

After configuring Service Peek:

1. **Restart the container** to apply changes
2. **Add providers** - [Learn how](adding-providers)
3. **Set up monitoring** - [Configure alerts](../features/alerts)
4. **Start discovering services** - [Quick start guide](quick-start)

## Support

If you need help with configuration:

- Check the [deployment guide](deploy) for basic setup
- Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- Report configuration issues on [GitHub](https://github.com/opsimate/opsimate/issues)
