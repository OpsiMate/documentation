---
sidebar_position: 1
---

# Infrastructure Management

## Overview

OpsiMate provides comprehensive infrastructure management capabilities, allowing you to monitor and manage your entire infrastructure from a single dashboard. Whether you're running virtual machines, Kubernetes clusters, or a hybrid environment, OpsiMate gives you complete visibility and control.

## Key Features

### Provider Management

OpsiMate supports multiple provider types:

- **Virtual Machines (VM)** - Connect to standalone servers or virtual machines
- **Kubernetes Clusters (K8S)** - Connect to Kubernetes clusters for container-level monitoring

All providers connect via SSH, ensuring secure communication without requiring agent installation.

### Service Discovery

OpsiMate automatically discovers services running on your infrastructure:

- **System Services** - Detects and monitors systemd services on Linux machines
- **Container Services** - Discovers and monitors containers in Kubernetes environments
- **Custom Services** - Allows manual addition of services not automatically detected

### Infrastructure Visualization

- **Topology View** - Visualize the relationships between your providers and services
- **Health Status** - See the health status of your entire infrastructure at a glance
- **Dependency Mapping** - Understand service dependencies and potential impact areas

## Provider Configuration

Provider configuration follows strict type safety requirements with no use of `any` types. The configuration uses camelCase format for all fields:

```typescript
// Provider configuration example
{
  name: "production-server",
  providerIp: "192.168.1.100",
  username: "admin",
  privateKeyFilename: "~/.ssh/id_rsa",
  SSHPort: 22,
  providerType: "VM"
}
```

## Best Practices

- **Naming Convention** - Use descriptive names for providers to easily identify them
- **SSH Keys** - Use SSH key-based authentication instead of passwords
- **Regular Synchronization** - Schedule regular synchronization to keep service information up-to-date
- **Tagging** - Use tags to organize and filter providers and services

## Next Steps

- [Add your first provider](../getting-started/adding-providers)
- [Discover services](../getting-started/discovering-services)
- [Set up monitoring](../monitoring/setting-up-alerts)
