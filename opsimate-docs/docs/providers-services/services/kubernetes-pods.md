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
5. Choose from detected pods

## Control

**Kubectl Commands**: Controlled using kubectl commands.

### Basic Operations
```bash
# Get pod status
kubectl get pods -n namespace

# Delete pod (will restart if part of deployment)
kubectl delete pod pod-name -n namespace
```