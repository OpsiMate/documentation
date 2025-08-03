---
sidebar_position: 2
---

# Service Menu

Access service-specific options and controls through the right-side menu.

## Accessing the Service Menu

Click on any service in the dashboard to open the service-specific menu panel.

<div style={{textAlign: 'center', margin: '20px 0'}}>
  <img src="/img/service-sidebar.png" alt="Service Menu Sidebar" style={{width: '400px', maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
  <p style={{fontSize: '14px', color: '#666', marginTop: '8px', fontStyle: 'italic'}}>Service menu sidebar with detailed controls and information</p>
</div>

<div style={{display: 'flex', gap: '20px', margin: '20px 0'}}>
  <div style={{flex: 1, padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white'}}>
    <h3 style={{marginTop: 0, color: 'white'}}>Service Details</h3>
    <p style={{marginBottom: 0, color: 'white'}}>View comprehensive service information and status</p>
  </div>
  <div style={{flex: 1, padding: '20px', border: '1px solid #e0e0e0', borderRadius: '8px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white'}}>
    <h3 style={{marginTop: 0, color: 'white'}}>Quick Actions</h3>
    <p style={{marginBottom: 0, color: 'white'}}>Start, stop, restart, and manage services</p>
  </div>
</div>

## Menu Options

### Service Control
- **Start Service**: Activate inactive services
- **Stop Service**: Gracefully stop running services
- **Restart Service**: Restart services to resolve issues
- **Force Stop**: Emergency service termination

### Monitoring & Alerts
- **Configure Alerts**: Set up service-specific notifications
- **View Metrics**: Access detailed performance data
- **Health Checks**: Configure and view service health status
- **Threshold Settings**: Set resource usage alerts

### Logs & Diagnostics
- **View Logs**: Access real-time service logs
- **Download Logs**: Export log files for analysis
- **Log Filtering**: Search and filter log entries
- **Error Analysis**: Identify and analyze service errors

### Service Configuration
- **Edit Settings**: Modify service configuration
- **Environment Variables**: Manage service environment
- **Resource Limits**: Set CPU and memory constraints
- **Dependency Management**: Configure service dependencies

### Tags & Organization
- **Add Tags**: Label services for better organization
- **Edit Description**: Update service descriptions
- **Group Assignment**: Assign services to logical groups
- **Priority Settings**: Set service monitoring priority

## Context-Sensitive Options

Menu options adapt based on service type and current status.

### For Running Services
- Stop and restart options available
- Real-time metrics and logs accessible
- Performance monitoring active

### For Stopped Services
- Start option prominently displayed
- Configuration editing enabled
- Historical data available

### Service Type Specific
- **Systemd Services**: Systemctl command options
- **Docker Containers**: Container management commands
- **Kubernetes Pods**: Kubectl operations and namespace management
