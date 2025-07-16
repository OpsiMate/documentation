---
id: installation
title: 🚀 Installation
sidebar_position: 1
---

# 🚀 Installing OpsiMate

OpsiMate is designed to be easy to install and configure. Follow these steps to get started with your OpsiMate deployment.

:::info 📋 Before You Begin
Make sure you have the necessary permissions to install software on your system and that your firewall allows traffic on the required ports.
:::

## 💻 System Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **🖥️ Operating System** | Linux (Ubuntu 20.04+ or CentOS 8+) | Ubuntu 22.04 LTS |
| **⚡ CPU** | 2 cores | 4+ cores |
| **🧠 Memory** | 4GB RAM | 8GB+ RAM |
| **💾 Disk Space** | 20GB | 50GB+ SSD |
| **🟢 Node.js** | v18.0.0+ | v20.0.0+ |
| **🗄️ Database** | Built-in SQLite | PostgreSQL (optional) |

:::tip 🎯 Performance Tip
For production environments, we recommend using SSD storage and at least 8GB of RAM for optimal performance.
:::

## 📦 Installation Methods

### 🐳 Docker Installation (Recommended)

The easiest way to get started with OpsiMate is using Docker:

:::warning 🔒 Prerequisites
Make sure Docker is installed on your system. [Install Docker](https://docs.docker.com/get-docker/)
:::

#### Step 1: Pull the OpsiMate Image

```bash
# Pull the latest OpsiMate image
docker pull opsimate/opsimate:latest
```

#### Step 2: Run OpsiMate Container

```bash
# Run OpsiMate container with recommended settings
docker run -d \
  --name opsimate \
  -p 3000:3000 \
  -p 8080:8080 \
  -v opsimate-data:/app/data \
  -v opsimate-config:/app/config \
  --restart unless-stopped \
  opsimate/opsimate:latest
```

#### Step 3: Verify Installation

```bash
# Check if container is running
docker ps | grep opsimate

# View logs
docker logs opsimate
```

:::success 🎉 Success!
OpsiMate should now be running at `http://localhost:3000`
:::

#### 🔧 Advanced Docker Configuration

For production deployments, use Docker Compose:

```yaml title="docker-compose.yml"
version: '3.8'
services:
  opsimate:
    image: opsimate/opsimate:latest
    container_name: opsimate
    ports:
      - "3000:3000"
      - "8080:8080"
    volumes:
      - opsimate-data:/app/data
      - opsimate-config:/app/config
      - ./logs:/app/logs
    environment:
      - NODE_ENV=production
      - LOG_LEVEL=info
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 30s
      timeout: 10s
      retries: 3

volumes:
  opsimate-data:
  opsimate-config:
```

```bash
# Start with Docker Compose
docker-compose up -d
```

### Manual Installation

If you prefer a manual installation:

1. **Install Node.js**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone the OpsiMate repository**:
   ```bash
   git clone https://github.com/opsimate/opsimate.git
   cd opsimate
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Build the application**:
   ```bash
   npm run build
   ```

5. **Start OpsiMate**:
   ```bash
   npm run start
   ```

## Verifying Your Installation

After installation, OpsiMate should be running at `http://localhost:3000`. Open this URL in your browser to access the OpsiMate dashboard.

You should see the login screen. The default credentials are:

- **Username**: admin
- **Password**: admin

:::warning
Make sure to change the default password immediately after your first login!
:::

## Next Steps

After successfully installing OpsiMate, you'll need to:

1. [Add your first provider](adding-providers)
2. Configure your first integration
3. Set up monitoring for your services
