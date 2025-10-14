---
id: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

OpsiMate uses a YAML configuration file to manage application settings. This guide covers all available configuration options.

## Basic Configuration

### Minimal Configuration

```yaml title="configfile.yml"
# OpsiMate Configuration
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
  path: "/app/data/database/opsimate.db"  # SQLite database file path (mounted volume)

# Security configuration
security:
  private_keys_path: "/app/data/private-keys"  # SSH private keys directory (mounted volume)

```

## Next Steps

After configuring OpsiMate:

1. **Restart the container** to apply changes
2. **Add providers** - [Learn how](../providers-services/providers/add-provider)
3. **Set up monitoring** - [Configure alerts](../alerts/adding-alerts)
4. **Start discovering services** - [Quick start guide](deploy)

## Support

If you need help with configuration:

- Check the [deployment guide](deploy) for basic setup
- Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- Report configuration issues on [GitHub](https://github.com/opsimate/opsimate/issues)
