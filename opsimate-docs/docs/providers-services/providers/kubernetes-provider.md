---
sidebar_position: 3
---

# Kubernetes Provider

Monitor Kubernetes clusters through secure, secret-based API connectivity.

## Configuration

Kubernetes providers use Secrets to securely store and manage cluster authentication credentials, eliminating the need for manual kubeconfig file uploads.

### Connection Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| **Authentication Secret** | Secret | Secret containing kubeconfig credentials | Yes |

### Setting Up Authentication

Kubernetes providers authenticate using Secrets that contain your kubeconfig credentials. You can either select an existing Secret or create a new one during provider setup.

#### Using an Existing Secret

If you've already created a Secret containing your kubeconfig credentials:

1. Select "Use Existing Secret" from the authentication options
2. Choose the appropriate Secret from the dropdown menu
3. Verify the Secret contains valid kubeconfig data

#### Creating a New Secret

To create a new Secret during provider configuration:

1. Select "Create New Secret" from the authentication options
2. Provide a descriptive name for your Secret
3. Paste or enter your kubeconfig content
4. The Secret will be securely stored and associated with this provider

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/kubernetes-provider-add.png" alt="Adding Kubernetes Provider with Secrets" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>Kubernetes provider configuration using Secrets</p>
</div>

:::tip Security Best Practice
Secrets are encrypted at rest and provide centralized credential management. You can reuse the same Secret across multiple providers if they share the same cluster credentials.
:::

## Types of Services

Kubernetes providers support automatic pod discovery and monitoring.

### Pods

**Automatic Discovery**: OpsiMate automatically detects all pods within the configured cluster context. Discovered pods can be added as monitored services directly from the My Providers page, enabling seamless infrastructure monitoring.

## Managing Secrets

Secrets used by Kubernetes providers can be managed independently:

- **Update**: Modify Secret contents without reconfiguring the provider
- **Reuse**: Apply the same Secret to multiple Kubernetes providers
- **Rotate**: Update credentials centrally for enhanced security
