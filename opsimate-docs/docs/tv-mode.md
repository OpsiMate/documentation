---
sidebar_position: 3
---

# 📺 TV Mode

TV Mode transforms OpsiMate into a powerful display solution perfect for monitoring rooms, NOCs, and public dashboards. With its clean, distraction-free interface and real-time updates, TV Mode ensures your team always has visibility into your infrastructure health.

## 🎯 What is TV Mode?

TV Mode is a specialized viewing mode designed for large displays and monitoring environments. It provides:

- **Clean, distraction-free interface** - No navigation menus or controls cluttering the view
- **Real-time data refresh** - Automatic updates keep information current
- **Optimized for large screens** - Perfect for wall-mounted displays and monitoring stations
- **Public-friendly display** - Safe for viewing in shared spaces without exposing sensitive controls

:::tip 💡 Perfect For
- Network Operations Centers (NOCs)
- Monitoring rooms and dashboards
- Public displays in office lobbies
- Conference room status boards
- DevOps team war rooms
:::

## 🚀 How to Enable TV Mode

### Method 1: URL Parameter (Quick Access)

Add `?tv=true` to any OpsiMate URL to instantly enable TV Mode:

```
https://your-opsimate-instance.com/dashboard?tv=true
https://your-opsimate-instance.com/services?tv=true
```

### Method 2: Configuration File

Add TV Mode settings to your OpsiMate configuration:

```yaml
# opsimate-config.yml
tv_mode:
  enabled: true
  refresh_interval: 30  # seconds
  hide_navigation: true
  auto_refresh: true
```

### Method 3: User Interface Toggle

1. Navigate to your desired dashboard or view
2. Click the **Settings** icon in the top-right corner
3. Toggle **TV Mode** to enable
4. The interface will automatically adjust for optimal display

## ✨ TV Mode Features

### 🔍 Enhanced Search & Navigation

- **Simplified search bar** - Quick access to services and metrics
- **Keyboard shortcuts** - Navigate without mouse interaction
- **Auto-complete suggestions** - Faster service discovery

### 📊 Dashboard Optimization

- **Full-screen dashboards** - Maximum screen real estate utilization
- **Responsive layouts** - Adapts to any screen size
- **Clean metrics display** - Clear, readable charts and graphs
- **Status indicators** - Color-coded health status at a glance

### 👁️ Visibility Features

- **Service health overview** - Instant status recognition
- **Alert summaries** - Current issues prominently displayed
- **Performance metrics** - Key indicators highlighted
- **Trend visualizations** - Historical data in easy-to-read formats

### 🔄 Real-time Refresh

- **Automatic updates** - Data refreshes without manual intervention
- **Configurable intervals** - Set refresh rates from 10 seconds to 5 minutes
- **Smart refresh** - Only updates when data changes
- **Connection status** - Visual indicator of data freshness

## 🎨 Customization Options

### Display Settings

```yaml
tv_mode:
  theme: "dark"  # or "light"
  font_size: "large"
  chart_height: "tall"
  show_timestamps: true
  show_refresh_indicator: true
```

### Layout Configuration

```yaml
tv_mode:
  layout:
    services_per_row: 4
    show_service_details: true
    show_alert_count: true
    highlight_critical: true
```

## 📱 Example Screenshots

*Note: Screenshots would be added here showing TV Mode in action*

### Dashboard View
- Clean, uncluttered interface
- Large, readable metrics
- Clear status indicators

### Service Overview
- Grid layout of all services
- Color-coded health status
- Real-time update timestamps

### Alert Summary
- Prominent alert display
- Critical issues highlighted
- Quick status overview

## 🔧 Advanced Configuration

### Custom Refresh Intervals

```yaml
tv_mode:
  refresh_settings:
    dashboard: 30      # Dashboard refreshes every 30 seconds
    services: 60       # Service list refreshes every minute
    alerts: 15         # Alerts refresh every 15 seconds
    metrics: 10        # Metrics refresh every 10 seconds
```

### Display Preferences

```yaml
tv_mode:
  display:
    hide_sidebar: true
    hide_header: false
    show_branding: true
    fullscreen: true
```

## 🚨 Troubleshooting

### Common Issues

**TV Mode not activating:**
- Check that the URL parameter `?tv=true` is correctly formatted
- Verify configuration file syntax
- Ensure user has appropriate permissions

**Data not refreshing:**
- Check network connectivity
- Verify refresh interval settings
- Look for JavaScript console errors

**Display issues:**
- Clear browser cache
- Check browser zoom level (should be 100%)
- Verify screen resolution compatibility

### Performance Tips

- Use wired network connections for stable data updates
- Close unnecessary browser tabs to optimize performance
- Consider using dedicated devices for TV Mode displays
- Enable hardware acceleration in browser settings

## 🔗 Related Documentation

- **[Dashboard Overview](dashboards/overview)** - Learn about OpsiMate dashboards
- **[Service Management](providers-services/services/add-services)** - Configure services for monitoring
- **[Alert Configuration](alerts/adding-alerts)** - Set up alerts for TV Mode display
- **[System Requirements](getting-started/system-requirements)** - Hardware recommendations for TV Mode

---

:::info 💡 Pro Tip
For the best TV Mode experience, use a dedicated device (like a Raspberry Pi or small computer) connected to your display. This ensures consistent performance and prevents accidental interactions.
:::
