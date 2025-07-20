---
sidebar_position: 4
---

# Kubernetes Pods

Monitor pods running in your Kubernetes clusters.

## Adding

**Automatic Detection**: Works the same way as Docker containers.

### Process
1. Click the three-dots menu
2. Select "Add Services"
3. Choose your Kubernetes provider
4. Select "Kubernetes Pod" type
5. Choose from detected pods or specify pod criteria

### Configuration
```yaml
pod_name: "web-app-pod"
namespace: "production"
service_type: "kubernetes"
```

## Control

**Kubectl Commands**: Controlled using kubectl commands.

### Basic Operations
```bash
# Get pod status
kubectl get pods -n namespace

# Describe pod
kubectl describe pod pod-name -n namespace

# View logs
kubectl logs -f pod-name -n namespace

# Delete pod (will restart if part of deployment)
kubectl delete pod pod-name -n namespace
```

## Monitoring Capabilities

- Pod status and lifecycle events
- Resource utilization (CPU, memory, storage)
- Container logs and application events
- Pod restart policies and failure detection
- Multi-container pod monitoring
