---
id: system-requirements
title: System Requirements
sidebar_position: 3
---

# System Requirements

Service Peek is lightweight and runs efficiently on minimal hardware.

## 💻 Hardware Requirements

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **CPU** | 1 vCPU | 2+ vCPUs |
| **RAM** | 512 MB | 2 GB+ |
| **Storage** | 1 GB | 10 GB+ |
## 🐳 Software Requirements

- **Docker** 20.10+ or Docker Desktop
- **Operating System**: Linux, macOS 10.15+, Windows 10+ (WSL2)

## 🌐 Network Requirements

- **Port 8080**: Web interface
- **Port 3001**: API server  
- **Port 22**: SSH access to monitored servers
- Internet access for Docker images

## ✅ Quick Check

```bash
# Verify Docker is ready
docker --version && docker run hello-world
```

:::tip Ready to Deploy?
Once your system meets these requirements, head to the [deployment guide](deploy) to get started!
:::


