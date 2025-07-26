---
sidebar_position: 4
---

# Integrations

## Overview

OpsiMate integrates with popular monitoring, logging, and visualization tools to provide a comprehensive view of your infrastructure. These integrations allow you to leverage your existing tools while benefiting from OpsiMate's unified management capabilities.

## Supported Integrations

### Grafana

Connect OpsiMate to your Grafana instances to:
- View dashboards directly within OpsiMate
- Import alerts from Grafana Alert Manager
- Link services to relevant Grafana dashboards

[Learn more about Grafana integration](../integrations/grafana)

### Kibana

Connect OpsiMate to Kibana for:
- Centralized log management
- Advanced log search and analysis
- Log-based alerting

[Learn more about Kibana integration](../integrations/kibana)

## External Links Dropdown

OpsiMate provides an External Links dropdown that gives you quick access to relevant dashboards and tools for each service:

### Key Features

- **Persistent State**: The dropdown stays open during background data updates
- **Manual Refresh**: Refresh dashboard links manually when needed
- **Smart Data Loading**: Only loads data when the dropdown is opened
- **Tag-Based Filtering**: Shows only dashboards relevant to the selected tags

### Technical Implementation

```tsx
// Controlled dropdown state prevents auto-closing
const [isOpen, setIsOpen] = useState(false);
const [hasLoadedData, setHasLoadedData] = useState(false);

// Only fetch when user opens dropdown
const handleOpenChange = (open: boolean) => {
  setIsOpen(open);
  if (open && !hasLoadedData && tags.length > 0) {
    setHasLoadedData(true);
    fetchDashboards();
  }
};
```

## Integration Configuration

All integrations follow strict type safety requirements with no use of `any` types. Configuration fields use camelCase format:

```typescript
// Integration configuration example
{
  name: "Production Grafana",
  type: "Grafana",
  url: "https://grafana.example.com",
  apiKey: "**********************"
}
```

## Best Practices

- **Naming Convention**: Use descriptive names for integrations
- **API Keys**: Regularly rotate API keys for security
- **Dashboard Organization**: Organize dashboards by service or team
- **Tag Consistency**: Use consistent tags across all integrations

## Next Steps

- [Configure your first integration](../integrations/overview)
- [Link services to dashboards](../services/managing-services)
- [Set up automated actions](../features/actions)
