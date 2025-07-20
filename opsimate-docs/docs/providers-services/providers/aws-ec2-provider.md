---
sidebar_position: 4
---

# ☁️ AWS EC2 Provider

Monitor multiple EC2 instances and auto-scaling groups with dynamic service discovery and cloud-native integration.

## 🎯 What is an AWS EC2 Provider?

An AWS EC2 Provider connects to your AWS account to monitor multiple EC2 instances, auto-scaling groups, and their services. This is ideal for dynamic infrastructure that scales up and down.

### Typical Use Cases
- **Auto Scaling Groups**: Web servers that scale based on demand
- **Multi-Instance Applications**: Load-balanced application tiers
- **Dynamic Infrastructure**: Instances that come and go frequently
- **Cloud-Native Applications**: Services using AWS-specific features

## 🚀 Quick Setup

### Prerequisites
- AWS account with appropriate permissions
- AWS CLI configured or IAM credentials
- EC2 instances running and accessible
- Network connectivity to instances (SSH/SSM)

### Basic Configuration

```yaml
name: "Web App Auto Scaling Group"
type: "aws-ec2"
region: "us-east-1"
access_key: "AKIA..."
secret_key: "..."
instance_filter:
  tags:
    Environment: "production"
    Application: "web-app"
connection_method: "ssh"  # or "ssm"
```

### Connection Test

OpsiMate will test the AWS connection and show:
- ✅ AWS API connectivity and permissions
- 🔍 Discovered EC2 instances matching filters
- 📊 Instance states and available services

## 🔧 Advanced Configuration

### AWS Credentials Setup

#### Using AWS CLI Profile
```yaml
name: "Production EC2 Instances"
type: "aws-ec2"
region: "us-west-2"
profile: "production"  # Uses ~/.aws/credentials profile
```

#### Using IAM Role (Recommended)
```yaml
name: "Production EC2 Instances"
type: "aws-ec2"
region: "us-west-2"
assume_role: "arn:aws:iam::123456789012:role/ServicePeekRole"
```

#### Using Environment Variables
```bash
export AWS_ACCESS_KEY_ID="AKIA..."
export AWS_SECRET_ACCESS_KEY="..."
export AWS_DEFAULT_REGION="us-east-1"
```

### Instance Filtering

#### Tag-Based Filtering
```yaml
instance_filter:
  tags:
    Environment: "production"
    Team: "backend"
    Application: "api"
  tag_operators:
    Environment: "equals"
    Team: "contains"
```

#### Auto Scaling Group Filtering
```yaml
instance_filter:
  auto_scaling_groups:
    - "web-app-asg"
    - "api-backend-asg"
  include_standby: false
```

#### Instance State Filtering
```yaml
instance_filter:
  states: ["running", "pending"]
  instance_types: ["t3.medium", "t3.large", "m5.large"]
  availability_zones: ["us-east-1a", "us-east-1b"]
```

### Connection Methods

#### SSH Connection
```yaml
connection:
  method: "ssh"
  port: 22
  username: "ec2-user"  # or "ubuntu" for Ubuntu AMIs
  ssh_key: "/path/to/ec2-key.pem"
  jump_host:  # Optional bastion host
    host: "bastion.example.com"
    username: "ec2-user"
    ssh_key: "/path/to/bastion-key.pem"
```

#### AWS Systems Manager (SSM)
```yaml
connection:
  method: "ssm"
  document_name: "AWS-RunShellScript"
  timeout: 60
  # No SSH keys needed - uses IAM roles
```

## 🔍 Service Discovery

AWS EC2 providers automatically discover services across instances:

### Instance Discovery
```bash
# Instances discovered via AWS API
aws ec2 describe-instances --filters "Name=tag:Environment,Values=production"
```

### Service Discovery Per Instance
- **Systemd Services**: Linux services via systemctl
- **Docker Containers**: Containers running on instances
- **Process Monitoring**: Application processes
- **Load Balancer Health**: ELB/ALB target health

### Auto Scaling Group Integration
```yaml
auto_scaling:
  monitor_scaling_events: true
  track_instance_lifecycle: true
  alert_on_scale_events: true
  health_check_grace_period: 300
```

## 📊 Monitoring Capabilities

### Instance-Level Metrics
- **Instance State**: running, stopped, terminated, pending
- **Instance Health**: system status, instance status
- **CPU Utilization**: CloudWatch metrics integration
- **Network Traffic**: Ingress/egress bandwidth
- **EBS Volumes**: Disk usage and IOPS

### Application-Level Metrics
- **Service Health**: Per-instance service status
- **Load Balancer Health**: Target group health status
- **Custom Metrics**: Application-specific monitoring
- **Log Aggregation**: CloudWatch Logs integration

### Auto Scaling Metrics
```yaml
auto_scaling_metrics:
  desired_capacity: true
  current_capacity: true
  scaling_activities: true
  unhealthy_instances: true
  target_group_health: true
```

## 🔧 AWS Integration Features

### CloudWatch Integration

```yaml
cloudwatch:
  enabled: true
  metrics:
    - "AWS/EC2/CPUUtilization"
    - "AWS/EC2/NetworkIn"
    - "AWS/EC2/NetworkOut"
    - "AWS/ApplicationELB/TargetResponseTime"
  custom_metrics:
    - namespace: "MyApp/Production"
      metric_name: "ActiveConnections"
```

### Load Balancer Integration

```yaml
load_balancer:
  type: "application"  # or "network", "classic"
  target_groups:
    - "web-app-tg"
    - "api-backend-tg"
  health_check_integration: true
  traffic_monitoring: true
```

### Auto Scaling Actions

```yaml
auto_scaling_actions:
  scale_out_on_high_load:
    enabled: true
    cpu_threshold: 80
    duration: 300
    cooldown: 600
  
  scale_in_on_low_load:
    enabled: true
    cpu_threshold: 20
    duration: 900
    cooldown: 300
```

## 🚨 Common Issues & Solutions

### AWS Connection Problems

**Authentication Failures**
```bash
# Test AWS credentials
aws sts get-caller-identity

# Check IAM permissions
aws iam simulate-principal-policy \
  --policy-source-arn arn:aws:iam::123456789012:user/service-peek \
  --action-names ec2:DescribeInstances

# Verify region configuration
aws configure list
```

**Permission Issues**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeInstances",
        "ec2:DescribeInstanceStatus",
        "autoscaling:DescribeAutoScalingGroups",
        "elasticloadbalancing:DescribeTargetHealth",
        "ssm:SendCommand",
        "ssm:GetCommandInvocation"
      ],
      "Resource": "*"
    }
  ]
}
```

### Instance Discovery Issues

**No Instances Found**
```bash
# Check instance filters
aws ec2 describe-instances --filters "Name=tag:Environment,Values=production"

# Verify instance states
aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,State.Name,Tags]'

# Check region configuration
aws configure get region
```

**SSH Connection Failures**
```bash
# Test SSH connectivity
ssh -i /path/to/key.pem ec2-user@instance-ip

# Check security groups
aws ec2 describe-security-groups --group-ids sg-12345678

# Verify key pair
aws ec2 describe-key-pairs
```

### Service Discovery Issues

**SSM Connection Problems**
```bash
# Check SSM agent status
aws ssm describe-instance-information

# Test SSM command execution
aws ssm send-command \
  --instance-ids "i-1234567890abcdef0" \
  --document-name "AWS-RunShellScript" \
  --parameters 'commands=["echo hello"]'
```

**Auto Scaling Integration Issues**
```bash
# Check auto scaling group status
aws autoscaling describe-auto-scaling-groups --auto-scaling-group-names my-asg

# View scaling activities
aws autoscaling describe-scaling-activities --auto-scaling-group-name my-asg
```

## 🔧 Best Practices

### Security
- Use IAM roles instead of access keys when possible
- Implement least-privilege permissions
- Regular credential rotation
- VPC security groups for network access

### Cost Optimization
- Monitor only necessary instances
- Use appropriate monitoring intervals
- Leverage CloudWatch for metrics when possible
- Implement proper instance lifecycle management

### Scalability
- Design for dynamic instance discovery
- Use tags consistently for filtering
- Implement proper health check strategies
- Consider multi-region deployments

## 📊 Advanced Features

### Multi-Region Monitoring

```yaml
multi_region:
  enabled: true
  regions:
    - name: "us-east-1"
      primary: true
    - name: "us-west-2"
      failover: true
    - name: "eu-west-1"
      disaster_recovery: true
```

### Spot Instance Monitoring

```yaml
spot_instances:
  monitor_interruption_notices: true
  alert_on_termination: true
  automatic_replacement: true
  bid_price_monitoring: true
```

### Container Service Integration

```yaml
container_services:
  ecs_integration:
    enabled: true
    clusters: ["production-cluster"]
    services: ["web-service", "api-service"]
  
  docker_monitoring:
    enabled: true
    discovery_method: "docker_api"
```

### Custom AMI Monitoring

```yaml
custom_ami:
  base_image: "ami-12345678"
  monitoring_agents:
    - "cloudwatch-agent"
    - "datadog-agent"
  custom_scripts:
    - "/opt/monitoring/health-check.sh"
```

## 📚 Next Steps

After setting up your AWS EC2 provider:

1. **[Configure Services](../services/add-services)** - Fine-tune service monitoring across instances
2. **[Set Up Alerts](../../monitoring/setting-up-alerts)** - Get notified of infrastructure issues
3. **[Create Dashboards](../../dashboards/creating-dashboards)** - Visualize your AWS infrastructure

:::tip Pro Tip
Use consistent tagging strategies across your AWS resources to make instance filtering and organization much easier.
:::
