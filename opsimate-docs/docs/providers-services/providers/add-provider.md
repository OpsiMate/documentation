---
sidebar_position: 1
---

# ➕ Adding Providers

Connect your infrastructure to OpsiMate for comprehensive monitoring.

## 🚀 Quick Setup

### Add Provider

Adding a provider to OpsiMate is simple and takes just a few steps:

<div style={{display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px 0'}}>
  <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <div style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>1</div>
    <div>
      <strong>Navigate to Providers</strong>
      <p style={{margin: '5px 0 0 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)'}}>Go to the Providers section in your OpsiMate dashboard</p>
    </div>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <div style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>2</div>
    <div>
      <strong>Select Provider Type</strong>
      <p style={{margin: '5px 0 0 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)'}}>Choose from Server, Kubernetes, AWS EC2, or other provider types</p>
    </div>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <div style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>3</div>
    <div>
      <strong>Configure & Test</strong>
      <p style={{margin: '5px 0 0 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)'}}>Fill in connection details and test the connection</p>
    </div>
  </div>
  
  <div style={{display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px', border: '1px solid var(--ifm-color-emphasis-200)'}}>
    <div style={{background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>4</div>
    <div>
      <strong>Start Monitoring</strong>
      <p style={{margin: '5px 0 0 0', fontSize: '14px', color: 'var(--ifm-color-emphasis-700)'}}>Save your provider and watch OpsiMate discover services automatically</p>
    </div>
  </div>
</div>


## 📚 Next Steps

Once your provider is added:

1. **[Configure Services](../services/add-services)** - Fine-tune service monitoring
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize your infrastructure

:::info Provider Types
You can find detailed guides for specific provider types in the other pages in this folder:
- **[Server Provider](server-provider)** - SSH-based server monitoring
- **[Kubernetes Provider](kubernetes-provider)** - K8s cluster integration
- **[AWS EC2 Provider](aws-ec2-provider)** - AWS auto-scaling groups
:::

:::tip Best Practice
Start with one provider and ensure it's working perfectly before adding more. This makes troubleshooting much easier!
:::
