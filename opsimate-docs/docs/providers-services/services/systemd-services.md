---
sidebar_position: 2
---

# Systemd Services

Monitor Linux system services managed by systemd.

## Adding

**Manual Entry**: Added manually by entering the service name.

### Process
1. Click the three-dots menu
2. Select "Add Services"
3. Choose your server provider
4. Select "Systemd Service" type
5. Enter the service name (e.g., "nginx", "postgresql")

### Configuration
```yaml
service_name: "nginx"
service_type: "systemd"
```

## Control

**SSH Commands**: Controlled via SSH commands using `service start`, `stop`, `restart`, and `logs` to manage the service.

### Basic Operations
```bash
# Start service
sudo systemctl start service-name

# Stop service
sudo systemctl stop service-name

# Restart service
sudo systemctl restart service-name

# View logs
sudo journalctl -u service-name -f
```

## Monitoring Capabilities

- Service status monitoring (active, inactive, failed, disabled)
- Resource consumption tracking
- Service logs and journal entries
- Dependency relationship monitoring
- Automatic restart and failure detection
