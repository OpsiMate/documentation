---
sidebar_position: 3
---

# Kubernetes Provider

Monitor Kubernetes clusters through kubeconfig-based API connectivity.

## Configuration

Kubernetes providers require kubeconfig file access to establish cluster monitoring capabilities.

### Connection Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| **Kubeconfig File** | String | Kubeconfig filename for cluster access | Yes |

### Kubeconfig Configuration

Place your kubeconfig file in the `data/private-keys/` directory and reference only the filename:

```yaml
kubeconfig_file: "cluster-config.yaml"
```

## Types of Services

Kubernetes providers support automatic pod discovery and monitoring:

### Pods

**Automatic Discovery**: OpsiMate automatically detects and monitors all pods within the configured cluster context.

**Monitoring Capabilities**:
- Pod status and lifecycle events
- Resource utilization (CPU, memory, storage)
- Container logs and application events
