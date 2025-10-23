---
sidebar_position: 3
---

# Kubernetes Provider

Monitor your Kubernetes clusters using secure, Secret-based authentication that stores your kubeconfig safely within the system.

## Configuration

Kubernetes providers use **Secrets** to securely store and manage kubeconfig credentials. Instead of uploading or manually saving configuration files, your kubeconfig content is now stored as a Secret that enables secure and reusable authentication.

### Connection Parameters

| Parameter                 | Type   | Description                              | Required |
| ------------------------- | ------ | ---------------------------------------- | -------- |
| **Authentication Secret** | Secret | Secret containing kubeconfig credentials | Yes      |

### Setting Up Authentication

Kubernetes providers authenticate using Secrets that encapsulate your kubeconfig data. You can either **use an existing Secret** or **create a new one** during the provider setup process.

#### Using an Existing Secret

If you've already created a Secret containing your kubeconfig credentials:

1. Select **“Use Existing Secret”** from the authentication options.
2. Choose the appropriate Secret from the dropdown list.
3. Confirm that the Secret contains valid kubeconfig data.

#### Creating a New Secret

To create a new Secret during provider configuration:

1. Select **“Create New Secret”** from the authentication options.
2. Provide a descriptive name for your Secret.
3. Paste or enter your kubeconfig content.
4. The kubeconfig will be securely stored as a Secret and associated with this provider.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/kubernetes-provider-add.png" alt="Kubernetes Provider Configured Using Secrets" style={{width: '500px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>Kubernetes provider successfully configured with kubeconfig stored as a Secret</p>
</div>

:::tip Security Best Practice
Secrets encrypt kubeconfig credentials at rest, providing a secure and centralized way to manage access. You can reuse the same Secret across multiple providers that connect to the same cluster.
:::

## Types of Services

Kubernetes providers support automatic detection and monitoring of cluster resources.

### Pods

**Automatic Discovery**: OpsiMate automatically detects all pods within your configured cluster context. Detected pods can be added as monitored services directly from the **My Providers** page, enabling seamless and real-time infrastructure visibility.

## Managing Secrets

Secrets associated with Kubernetes providers can be managed independently for flexibility and security:

- **Update**: Edit or replace kubeconfig data without reconfiguring the provider.
- **Reuse**: Apply the same Secret across multiple Kubernetes providers.
- **Rotate**: Regularly update credentials for enhanced security and compliance.
