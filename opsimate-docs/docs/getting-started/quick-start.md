---
id: quick-start
slug: /getting-started/quick-start
sidebar_position: 2
---

# Quick Start with OpsiMate

This guide helps you **install, configure, and start using OpsiMate** quickly.

## 1. System Requirements

OpsiMate is lightweight and runs efficiently on minimal hardware.

### 💻 Hardware Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU**   | 1 vCPU  | 2+ vCPUs    |
| **RAM**   | 512 MB  | 2 GB+       |
| **Storage** | 1 GB  | 10 GB+      |

### 🐳 Software Requirements

- **Docker** 20.10+ or Docker Desktop  
- **Operating System**: Linux, macOS 10.15+, Windows 10+ (WSL2)

### 🌐 Network Requirements

- **Port 8080**: Web interface  
- **Port 3001**: API server  
- **Port 22**: SSH access to monitored servers  
- Internet access for Docker images

:::tip Ready to Deploy?
Once your system meets these requirements, you can move on to deployment and configuration below.
:::

---

## 2. Installation & Configuration

Before running OpsiMate, you need to ensure the configuration is ready.

### Minimal Configuration

OpsiMate uses a YAML configuration file to manage application settings. Create a file `config.yml` with the minimal required configuration:

```yaml
# OpsiMate Configuration

# Server configuration
server:
  port: 3001
  host: "localhost"

# Client configuration
client:
  port: 8080
  api_url: "http://localhost:3001/api/v1"

# Database configuration
database:
  path: "/app/data/database/opsimate.db"

# Security configuration
security:
  private_keys_path: "/app/data/private-keys"
```
## Next Steps
After configuring OpsiMate:

1. **Ensure Docker is installed** on your system.

2. **Prepare required directories** for database and private keys.

## 3. Deployment
OpsiMate can be deployed easily using Docker.

**Docker Run Command**

Run OpsiMate with a single command:
```bash
docker run -d \
  --name opsimate \
  --rm \
  -p 3001:3001 -p 8080:8080 \
  -v /app/data/database:/app/data/database \
  -v /app/data/private-keys:/app/data/private-keys \
  -v /app/config/config.yml:/app/config/config.yml \
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
