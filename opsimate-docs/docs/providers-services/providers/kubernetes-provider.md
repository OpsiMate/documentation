---
sidebar_position: 3
---

# ☸️ Kubernetes Provider

Monitor pods, services, and deployments across your Kubernetes clusters.

## 🎯 What is a Kubernetes Provider?

A Kubernetes Provider connects to your K8s cluster to monitor containerized applications, deployments, services, and cluster resources.

### Typical Use Cases
- **Microservices** running in pods across multiple nodes
- **Deployments** with multiple replicas and rolling updates
- **Services** and ingress controllers for traffic routing
- **Cluster resources** like nodes, persistent volumes, and namespaces

## 🚀 Quick Setup

### Prerequisites
- Kubernetes cluster (1.19+)
- kubectl access to the cluster
- Kubeconfig file with appropriate permissions
- Network access from Service Peek to K8s API server

### Basic Configuration

```yaml
name: "Production K8s Cluster"
type: "kubernetes"
kubeconfig: "/path/to/kubeconfig"
namespace: "default"  # or specific namespace
context: "production-cluster"  # optional
```

### Connection Test

Service Peek will test the connection and show:
- ✅ Kubernetes API connectivity
- 🔍 Discovered pods, services, and deployments
- 📊 Cluster resources and node status

## 🔧 Advanced Configuration

### Kubeconfig Setup

Ensure your kubeconfig has proper permissions:

```bash
# Test kubectl access
kubectl get nodes
kubectl get pods --all-namespaces
kubectl get services

# Check permissions
kubectl auth can-i get pods
kubectl auth can-i get deployments
kubectl auth can-i get services
```

### Service Account Configuration

Create a dedicated service account for Service Peek:

```yaml
# service-peek-rbac.yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: service-peek
  namespace: default
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: service-peek-reader
rules:
- apiGroups: [""]
  resources: ["pods", "services", "nodes", "namespaces"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["apps"]
  resources: ["deployments", "replicasets", "daemonsets", "statefulsets"]
  verbs: ["get", "list", "watch"]
- apiGroups: ["extensions", "networking.k8s.io"]
  resources: ["ingresses"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: service-peek-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: service-peek-reader
subjects:
- kind: ServiceAccount
  name: service-peek
  namespace: default
```

Apply the RBAC configuration:
```bash
kubectl apply -f service-peek-rbac.yaml
```

### Multi-Namespace Configuration

Monitor specific namespaces or all namespaces:

```yaml
# Single namespace
name: "Production Apps"
type: "kubernetes"
kubeconfig: "/path/to/kubeconfig"
namespace: "production"

# Multiple namespaces
name: "All App Namespaces"
type: "kubernetes"
kubeconfig: "/path/to/kubeconfig"
namespaces: ["production", "staging", "monitoring"]

# All namespaces
name: "Entire Cluster"
type: "kubernetes"
kubeconfig: "/path/to/kubeconfig"
all_namespaces: true
```

## 🔍 Service Discovery

Kubernetes providers automatically discover various resource types:

### Pods and Containers
```bash
# Pods discovered across namespaces
kubectl get pods --all-namespaces -o wide
```

Pod information collected:
- Pod name, namespace, and labels
- Container images and status
- Resource requests and limits
- Node assignment and IP addresses

### Deployments and ReplicaSets
```bash
# Deployments with replica status
kubectl get deployments --all-namespaces
```

Deployment monitoring includes:
- Desired vs available replicas
- Rolling update status
- Deployment strategy and history
- Pod template changes

### Services and Ingress
```bash
# Services and their endpoints
kubectl get services --all-namespaces
kubectl get ingress --all-namespaces
```

Service discovery covers:
- Service types (ClusterIP, NodePort, LoadBalancer)
- Port configurations and selectors
- Ingress rules and TLS configuration
- External endpoints and load balancers

## 📊 Monitoring Capabilities

### Pod Metrics
- **CPU Usage**: Per-container and pod-level utilization
- **Memory**: RAM usage and limits
- **Network**: Ingress/egress traffic rates
- **Storage**: Persistent volume usage

### Cluster Health
- **Node Status**: Ready, disk pressure, memory pressure
- **Resource Quotas**: Namespace limits and usage
- **Persistent Volumes**: Storage capacity and claims
- **Events**: Cluster events and warnings

### Application Health Checks
- **Readiness Probes**: Application ready to serve traffic
- **Liveness Probes**: Application health and restart triggers
- **Startup Probes**: Application initialization status
- **Custom Endpoints**: HTTP health check endpoints

## 🚨 Common Issues & Solutions

### Connection Problems

**Unable to Connect to Cluster**
```bash
# Test kubectl connectivity
kubectl cluster-info
kubectl get nodes

# Check kubeconfig
kubectl config current-context
kubectl config view
```

**Permission Denied**
```bash
# Check RBAC permissions
kubectl auth can-i get pods
kubectl auth can-i get deployments

# View current user/service account
kubectl config view --minify
```

**Certificate Issues**
- Verify kubeconfig certificate validity
- Check cluster CA certificate
- Ensure system time is synchronized

### Discovery Issues

**No Pods Found**
- Check if pods are actually running: `kubectl get pods`
- Verify namespace configuration
- Check pod labels and selectors

**Missing Deployments**
- Ensure deployments exist: `kubectl get deployments`
- Check RBAC permissions for apps/v1 API group
- Verify namespace scope

**Service Discovery Incomplete**
- Check service account permissions
- Verify network policies don't block API access
- Review Service Peek logs for API errors

### Performance Issues

**High API Server Load**
- Reduce monitoring frequency for large clusters
- Use label selectors to filter resources
- Implement resource quotas

**Slow Response Times**
- Check network latency to API server
- Optimize kubeconfig for connection reuse
- Consider using local kubectl proxy

## 🔧 Best Practices

### Security
- Use service accounts with minimal required permissions
- Regularly rotate kubeconfig certificates
- Network policies to restrict API access
- Audit API access logs

### Monitoring Efficiency
- Monitor only necessary namespaces
- Use label selectors for resource filtering
- Implement appropriate monitoring intervals
- Group related services by namespace/labels

### Cluster Management
- Regular cluster updates and patches
- Monitor cluster resource usage
- Implement resource quotas and limits
- Document cluster configuration

## 📊 Advanced Features

### Custom Resource Definitions (CRDs)

Monitor custom resources in your cluster:

```yaml
# Monitor custom resources
custom_resources:
  - apiVersion: "argoproj.io/v1alpha1"
    kind: "Application"
    namespace: "argocd"
  - apiVersion: "monitoring.coreos.com/v1"
    kind: "ServiceMonitor"
    namespace: "monitoring"
```

### Helm Release Monitoring

Track Helm deployments and releases:

```bash
# Discover Helm releases
helm list --all-namespaces
```

### Multi-Cluster Setup

Monitor multiple clusters from a single Service Peek instance:

```yaml
# Multiple cluster configuration
clusters:
  - name: "production-us-east"
    kubeconfig: "/configs/prod-us-east.yaml"
    context: "prod-us-east"
  - name: "production-eu-west"
    kubeconfig: "/configs/prod-eu-west.yaml"
    context: "prod-eu-west"
```

## 📚 Next Steps

After setting up your Kubernetes provider:

1. **[Configure Pod Services](../services/add-services)** - Fine-tune pod monitoring
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of cluster issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize cluster metrics

:::tip Pro Tip
Start with a single namespace in a development cluster to test your configuration before connecting to production clusters.
:::
