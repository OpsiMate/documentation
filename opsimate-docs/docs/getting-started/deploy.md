---
id: deploy
title: Deploy OpsiMate
sidebar_position: 2
---

# Deploy OpsiMate

OpsiMate is designed for easy deployment using Docker. This guide will walk you through deploying OpsiMate using Docker run commands.

:::info Before You Begin
Make sure your system meets the [system requirements](system-requirements) and that Docker is installed and running.
:::

## Quick Deployment

### Docker Run Command

Deploy OpsiMate with a single Docker command:

```bash
# Deploy OpsiMate
docker run -d \
  --name opsimate \
  -p 3001:3001 \
  -p 8080:8080 \
  -v $(pwd)/data/database:/app/data/database \
  -v $(pwd)/data/private-keys:/app/data/private-keys \
  -v /path/to/configfile.yml:/app/config/configfile.yml \
  --restart unless-stopped \
  opsimate/opsimate:0.0.4
```

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
