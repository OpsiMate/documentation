---
id: installation
title: Installation
sidebar_position: 1
---

# Installing OpsiMate

OpsiMate is designed to be easy to install and configure. Follow these steps to get started with your OpsiMate deployment.

## System Requirements

- **Operating System**: Linux (Ubuntu 20.04+ or CentOS 8+)
- **CPU**: 2+ cores recommended
- **Memory**: 4GB RAM minimum, 8GB recommended
- **Disk Space**: 20GB minimum
- **Node.js**: v18.0.0 or higher
- **Database**: Built-in SQLite (no additional setup required)

## Installation Methods

### Docker Installation (Recommended)

The easiest way to get started with OpsiMate is using Docker:

```bash
# Pull the latest OpsiMate image
docker pull opsimate/opsimate:latest

# Run OpsiMate container
docker run -d \
  --name opsimate \
  -p 3000:3000 \
  -v opsimate-data:/app/data \
  opsimate/opsimate:latest
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
