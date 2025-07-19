---
id: system-requirements
title: System Requirements
sidebar_position: 3
---

# System Requirements

Before deploying OpsiMate, ensure your system meets the following requirements for optimal performance and reliability.

:::info 🎯 Overview
OpsiMate is designed to be lightweight and efficient, but proper system specifications ensure smooth operation, especially in production environments.
:::

## 💻 Hardware Requirements

### Minimum Requirements

| Component | Specification | Notes |
|-----------|---------------|-------|
| **🖥️ CPU** | 2 cores (x86_64) | ARM64 also supported |
| **🧠 Memory** | 4GB RAM | Minimum for basic operations |
| **💾 Storage** | 20GB available space | For application and logs |
| **🌐 Network** | 1 Gbps connection | For data collection and API calls |

### Recommended Requirements

| Component | Specification | Notes |
|-----------|---------------|-------|
| **🖥️ CPU** | 4+ cores (x86_64) | Better performance for large deployments |
| **🧠 Memory** | 8GB+ RAM | Recommended for production |
| **💾 Storage** | 50GB+ SSD | Fast storage improves response times |
| **🌐 Network** | 10 Gbps connection | For high-throughput environments |

:::tip 🚀 Performance Optimization
- **SSD storage** significantly improves database performance
- **Additional RAM** allows for better caching and faster queries
- **Multiple CPU cores** enable better parallel processing of monitoring data
:::

## 🐧 Operating System Support

### Supported Platforms

| OS Family | Versions | Support Level |
|-----------|----------|---------------|
| **🐧 Linux** | Ubuntu 20.04+, CentOS 8+, RHEL 8+ | ✅ Full Support |
| **🐳 Docker** | Docker 20.10+ | ✅ Recommended |
| **☁️ Cloud** | AWS, GCP, Azure | ✅ Full Support |
| **🍎 macOS** | macOS 12+ | ⚠️ Development Only |
| **🪟 Windows** | Windows Server 2019+ | ⚠️ Limited Support |

### Recommended Distributions

- **Ubuntu 22.04 LTS** - Most tested and recommended
- **CentOS Stream 9** - Enterprise environments
- **RHEL 9** - Enterprise with support contracts
- **Amazon Linux 2** - AWS deployments

## 🐳 Docker Requirements

### Docker Engine

| Component | Version | Notes |
|-----------|---------|-------|
| **Docker Engine** | 20.10+ | Required for containerized deployment |
| **Docker Compose** | 2.0+ | For multi-container setups |
| **Container Runtime** | containerd or runc | Default with Docker |

### Container Resources

```yaml
# Recommended Docker resource limits
resources:
  limits:
    memory: 4Gi
    cpu: 2000m
  requests:
    memory: 2Gi
    cpu: 1000m
```

## 🌐 Network Requirements

### Required Ports

| Port | Protocol | Purpose | Access |
|------|----------|---------|--------|
| **3000** | HTTP/HTTPS | Web Dashboard | External |
| **8080** | HTTP | API Endpoints | External |
| **9090** | HTTP | Metrics Endpoint | Internal |
| **5432** | TCP | PostgreSQL (optional) | Internal |

### Firewall Configuration

```bash
# Ubuntu/Debian firewall rules
sudo ufw allow 3000/tcp comment "OpsiMate Dashboard"
sudo ufw allow 8080/tcp comment "OpsiMate API"

# CentOS/RHEL firewall rules
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload
```

### Network Access

OpsiMate requires outbound internet access for:
- 📦 Downloading updates and patches
- 🔗 Third-party integrations (Slack, PagerDuty, etc.)
- 📊 Cloud provider APIs (AWS, GCP, Azure)
- 🔍 DNS resolution for monitored services

## 🗄️ Database Requirements

### Built-in SQLite (Default)

| Requirement | Specification |
|-------------|---------------|
| **Disk Space** | 5GB+ for data storage |
| **I/O Performance** | SSD recommended |
| **Concurrent Users** | Up to 50 users |

### PostgreSQL (Recommended for Production)

| Requirement | Specification |
|-------------|---------------|
| **Version** | PostgreSQL 12+ |
| **Memory** | 2GB+ dedicated |
| **Storage** | 20GB+ SSD |
| **Concurrent Connections** | 100+ |

```sql
-- PostgreSQL configuration example
shared_buffers = 256MB
effective_cache_size = 1GB
max_connections = 200
```

## 🔒 Security Requirements

### SSL/TLS Certificates

- **Let's Encrypt** certificates supported
- **Custom CA** certificates supported
- **Self-signed** certificates for development

### Authentication

- **LDAP/Active Directory** integration
- **SAML 2.0** single sign-on
- **OAuth 2.0** providers (Google, GitHub, etc.)
- **Multi-factor authentication** (TOTP, SMS)

## ☁️ Cloud Provider Specifications

### AWS Requirements

| Service | Purpose | Minimum Specs |
|---------|---------|---------------|
| **EC2** | Compute | t3.medium (2 vCPU, 4GB RAM) |
| **EBS** | Storage | gp3 volume, 50GB |
| **VPC** | Networking | Public/private subnets |
| **Security Groups** | Firewall | Ports 3000, 8080 open |

### Google Cloud Requirements

| Service | Purpose | Minimum Specs |
|---------|---------|---------------|
| **Compute Engine** | Compute | e2-medium (2 vCPU, 4GB RAM) |
| **Persistent Disk** | Storage | SSD, 50GB |
| **VPC** | Networking | Custom VPC with firewall rules |

### Azure Requirements

| Service | Purpose | Minimum Specs |
|---------|---------|---------------|
| **Virtual Machine** | Compute | Standard_B2s (2 vCPU, 4GB RAM) |
| **Managed Disk** | Storage | Premium SSD, 50GB |
| **Virtual Network** | Networking | Custom VNet with NSG rules |

## 🧪 Development Environment

For development and testing purposes:

| Component | Specification |
|-----------|---------------|
| **Node.js** | v18.0.0+ (v20.0.0+ recommended) |
| **npm** | v8.0.0+ |
| **Git** | v2.30+ |
| **Code Editor** | VS Code, IntelliJ, or similar |

```bash
# Check your development environment
node --version  # Should be v18.0.0+
npm --version   # Should be v8.0.0+
docker --version # Should be 20.10+
```

## ✅ Pre-Deployment Checklist

Before deploying OpsiMate, verify:

- [ ] 🖥️ Hardware meets minimum requirements
- [ ] 🐧 Operating system is supported and updated
- [ ] 🐳 Docker is installed and running
- [ ] 🌐 Required ports are open and accessible
- [ ] 🔒 SSL certificates are ready (for HTTPS)
- [ ] 🗄️ Database is configured (if using external DB)
- [ ] 📊 Monitoring tools are accessible
- [ ] 🔐 Authentication providers are configured
- [ ] 📧 Email/notification services are set up

:::success 🎉 Ready to Deploy!
Once your system meets these requirements, you're ready to proceed with the [deployment process](deploy).
:::

## 📞 Support

If you have questions about system requirements or need help with sizing your deployment:

- 📖 Check our [deployment guide](deploy)
- 💬 Join our [community discussions](https://github.com/opsimate/opsimate/discussions)
- 🐛 Report issues on [GitHub](https://github.com/opsimate/opsimate/issues)
