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


## Control

**SSH Commands**: Controlled via SSH commands using `service start`, `stop`, `restart`, to manage the service.

### Basic Operations
```bash
# Start service
sudo systemctl start service-name

# Stop service
sudo systemctl stop service-name

# Restart service
sudo systemctl restart service-name
```