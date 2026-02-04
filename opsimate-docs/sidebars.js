// sidebars.js
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // Getting Started
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/quick-start',
      ],
    },

    // Providers & Services
    {
      type: 'category',
      label: 'Providers & Services',
      collapsed: true,
      items: [
        'providers-services/overview',
        {
          type: 'category',
          label: 'Providers',
          collapsed: true,
          items: [
            'providers-services/providers/add-provider',
            'providers-services/providers/server-provider',
            'providers-services/providers/kubernetes-provider',
          ],
        },
        {
          type: 'category',
          label: 'Services',
          collapsed: true,
          items: [
            'providers-services/services/add-services',
            'providers-services/services/container-services',
            'providers-services/services/systemd-services',
            'providers-services/services/kubernetes-pods',
          ],
        },
      ],
    },

    // Integrations
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/overview',
        'integrations/grafana',
        'integrations/datadog',
        'integrations/gcp',
        'integrations/uptime-kuma',
        'integrations/zabbix',
      ],
    },

    // Dashboards
    {
      type: 'category',
      label: 'Dashboards',
      collapsed: true,
      items: [
        'dashboards/saved-dashboards',
      ],
    },

    // Alerts
    {
      type: 'category',
      label: 'Alerts',
      collapsed: true,
      items: [
        'alerts/adding-alerts',
        'alerts/alert-management',
        'alerts/archived-alerts',
        'alerts/tv-mode-view',
      ],
    },

    // User Management
    {
      type: 'category',
      label: 'User Management',
      collapsed: true,
      items: [
        'user-management/register-login',
        'user-management/admin-panel',
        'user-management/audit-logs',
      ],
    },

    // Single-page sections (not collapsible)
    'development',
    'contributing/index',
    'glossary/index',
    'faq/index',
    'legal/privacy',
  ],
};

module.exports = sidebars;