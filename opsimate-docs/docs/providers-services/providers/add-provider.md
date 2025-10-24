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

3. **Configure and Test**  
   Enter the required connection details and run a quick test to confirm connectivity.

4. **Enable Monitoring**  
   Save your configuration and start adding services.

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

:::tip Best Practice
Start with one provider and ensure it's working perfectly before adding more. This makes troubleshooting much easier!
:::
