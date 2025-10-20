---
sidebar_position: 1
---

# Adding Providers

Connect your infrastructure to OpsiMate.

## Quick Setup

### Add Provider

Adding a provider to OpsiMate is simple and takes just a few steps:

1. **Open the Providers Section**  
   From your OpsiMate dashboard, navigate to **Providers**.

2. **Select a Provider Type**  
   Choose from the available types such as Server, Kubernetes or other supported providers.

3. **Set Up Secrets**
   Create and configure the necessary Secrets for your provider in Settings > Secrets.
   
4. **Configure Provider with Secrets**
   Link the appropriate Secrets to your provider configuration and test the connection.

5. **Enable Monitoring**
   Once the connection test passes, save your provider configuration and start adding services.

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/myprovider-page.png" alt="My Providers Dashboard" style={{width: '600px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} className="doc-image" />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>My Providers page showing configured infrastructure providers and their services</p>
</div>

## Next Steps

Once your provider is added:

1. **[Configure Services](../services/add-services)** - Fine-tune service monitoring
2. **[Set Up Alerts](../../alerts/adding-alerts)** - Get notified of issues

:::info Provider Types
You can find detailed guides for specific provider types in the other pages in this folder:

- **[Server Provider](server-provider)** - SSH-based server monitoring
- **[Kubernetes Provider](kubernetes-provider)** - K8s cluster integration
  :::

## Managing Secrets

OpsiMate uses Secrets to securely manage provider credentials and configurations. This approach offers several advantages:

- **Enhanced Security**: Credentials are encrypted at rest and in transit
- **Access Control**: Fine-grained control over who can view or modify secrets
- **Audit Logging**: Track all access and changes to secrets
- **Easy Rotation**: Update credentials in one place
- **No Local Files**: Eliminate the need to manage configuration files

### Creating Secrets

1. Navigate to **Settings** > **Secrets**
2. Click **Add New Secret**
3. Enter the required information:
   - Name: A unique identifier for the secret
   - Type: Choose from predefined types (SSH Key, API Token, etc.)
   - Value: The actual secret value
4. Set access permissions (optional)
5. Click Save

<div style={{textAlign: 'center', margin: '30px 0'}}>
  <img src="/img/secrets-management.png" alt="Secrets Management Interface" style={{width: '600px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'}} className="doc-image" />
  <p style={{fontSize: '14px', color: '#666', marginTop: '10px', fontStyle: 'italic'}}>Secrets management interface in OpsiMate</p>
</div>

:::tip Best Practice
Start with one provider and ensure it's working perfectly before adding more. This makes troubleshooting much easier!

Use descriptive names for your secrets to easily identify their purpose, such as `PROD_SSH_KEY` or `DEV_API_TOKEN`.
:::
