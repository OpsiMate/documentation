---
sidebar_position: 3
---

# Kubernetes Provider

Monitor Kubernetes clusters through kubeconfig-based API connectivity.

## Configuration

Kubernetes providers require kubeconfig file access to establish cluster monitoring capabilities.

### Connection Parameters

| Parameter           | Type   | Description                            | Required |
| ------------------- | ------ | -------------------------------------- | -------- |
| **Kubeconfig File** | String | Kubeconfig filename for cluster access | Yes      |

### Kubeconfig Configuration

Place your kubeconfig files in the `data/private-keys/` directory and reference only the filename:

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/kubernetes-provider-add.png" alt="Screenshot showing adding a Kubernetes provider" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>Kubernetes provider configuration form</p>
</div>

## Types of Services

Kubernetes providers support automatic pod discovery.

### Pods

**Automatic Discovery**: OpsiMate automatically detects all pods within the configured cluster context and you can add them as a services directly from the my providers page.
