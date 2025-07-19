---
sidebar_position: 1
---

# ➕ Adding Providers

Connect your infrastructure to Service Peek for comprehensive monitoring.

## 🚀 Quick Setup

Adding a provider is simple - just provide connection details and let Service Peek discover your services automatically.

### Step 1: Navigate to Providers

1. Open Service Peek dashboard
2. Click **"Providers"** in the sidebar
3. Click **"Add Provider"** button

### Step 2: Choose Provider Type

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '20px 0'}}>
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white', cursor: 'pointer'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>🖥️ Server</h3>
    <p style={{margin: 0, fontSize: '14px'}}>Single server or VM with SSH access</p>
  </div>
  
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '12px', color: 'white', cursor: 'pointer'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>☸️ Kubernetes</h3>
    <p style={{margin: 0, fontSize: '14px'}}>K8s cluster with kubectl access</p>
  </div>
  
  <div style={{padding: '20px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '12px', color: 'white', cursor: 'pointer'}}>
    <h3 style={{color: 'white', margin: '0 0 10px 0'}}>☁️ AWS EC2</h3>
    <p style={{margin: 0, fontSize: '14px'}}>Auto-scaling group or multiple instances</p>
  </div>
</div>

### Step 3: Configure Connection

Fill in the connection details based on your provider type:

#### 🖥️ Server Provider
```yaml
name: "Production Web Server"
host: "192.168.1.100"
port: 22
username: "ubuntu"
ssh_key: "/path/to/private-key.pem"
```

#### ☸️ Kubernetes Provider  
```yaml
name: "Production K8s Cluster"
kubeconfig: "/path/to/kubeconfig"
namespace: "default"  # or specific namespace
```

#### ☁️ AWS EC2 Provider
```yaml
name: "Web App Auto Scaling Group"
region: "us-east-1"
access_key: "AKIA..."
secret_key: "..."
instance_filter: "tag:Environment=production"
```

### Step 4: Test Connection

Service Peek will automatically test the connection and show you:

- ✅ **Connection Status**: Can we reach your infrastructure?
- 🔍 **Discovery Preview**: Services found during initial scan
- 📊 **Estimated Resources**: How many services will be monitored

### Step 5: Complete Setup

Once the connection test passes:

1. **Review** discovered services
2. **Select** which services to monitor (or select all)
3. **Click "Add Provider"** to complete setup

## 🔧 Advanced Configuration

### SSH Key Setup

For server providers, ensure your SSH key is properly configured:

```bash
# Generate SSH key if needed
ssh-keygen -t ed25519 -f ~/.ssh/service_peek_key

# Copy public key to target server
ssh-copy-id -i ~/.ssh/service_peek_key.pub user@server

# Test connection
ssh -i ~/.ssh/service_peek_key user@server 'echo "Connection successful"'
```

### Kubernetes Access

For Kubernetes providers, ensure kubectl access:

```bash
# Test kubectl access
kubectl get nodes
kubectl get pods --all-namespaces

# Verify permissions
kubectl auth can-i get pods
kubectl auth can-i get services
```

### AWS Permissions

For AWS providers, ensure proper IAM permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceStatus",
        "ssm:SendCommand",
        "ssm:GetCommandInvocation"
      ],
      "Resource": "*"
    }
  ]
}
```

## 🚨 Troubleshooting

### Connection Issues

**SSH Connection Failed**
- Verify SSH key permissions: `chmod 600 ~/.ssh/private_key`
- Test manual SSH connection first
- Check firewall rules on target server

**Kubernetes Connection Failed**  
- Verify kubeconfig file path and permissions
- Test kubectl commands manually
- Check cluster network connectivity

**AWS Connection Failed**
- Verify AWS credentials and permissions
- Check region and instance filters
- Ensure instances are running and accessible

### Discovery Issues

**No Services Found**
- Check if services are actually running
- Verify Service Peek has proper permissions
- Try manual service discovery commands

**Partial Service Discovery**
- Some services may require specific permissions
- Check service logs for access issues
- Review provider configuration

## 📚 Next Steps

Once your provider is added:

1. **[Configure Services](../services/add-services)** - Fine-tune service monitoring
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize your infrastructure

:::tip Best Practice
Start with one provider and ensure it's working perfectly before adding more. This makes troubleshooting much easier!
:::
