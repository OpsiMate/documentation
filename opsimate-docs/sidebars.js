/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'core-features',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'getting-started/deploy',
        'getting-started/configuration',
        'getting-started/system-requirements',
      ],
    },

    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/overview',
        'integrations/grafana',
        'integrations/gcp',
        'integrations/uptime-kuma',
        'integrations/datadog',
        'integrations/zabbix',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard',
      collapsed: true,
      items: [
        'dashboards/saved-dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Alerts',
      collapsed: true,
      items: ['alerts/adding-alerts', 'alerts/alert-management', 'alerts/archived-alerts', 'alerts/tv-mode'],
    },
    {
      type: 'category',
      label: 'User Management & Security',
      collapsed: true,
      items: ['user-management/register-login', 'user-management/admin-panel', 'user-management/audit-logs'],
    },
    'development',
  ],
};

module.exports = sidebars;
