// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      collapsed: false,
      items: ['intro', 'core-features'],
    },
    {
      type: 'category',
      label: 'Get Started',
      collapsed: true,
      items: [
        'getting-started/playground',
        'getting-started/deploy',
        'getting-started/configuration',
        'getting-started/system-requirements',
        'getting-started/api-reference',
      ],
    },
    {
      type: 'category',
      label: 'Integrate',
      collapsed: true,
      items: [
        'integrations/overview',
        'integrations/custom-alerts',
        'integrations/grafana',
        'integrations/gcp',
        'integrations/uptime-kuma',
        'integrations/datadog',
        'integrations/zabbix',
        'integrations/vector',
      ],
    },
    {
      type: 'category',
      label: 'Monitor',
      collapsed: true,
      items: [
        'alerts/adding-alerts',
        'alerts/alert-management',
        'alerts/archived-alerts',
        'dashboards/saved-dashboards',
        'alerts/insights',
      ],
    },
    {
      type: 'category',
      label: 'Respond',
      collapsed: true,
      items: [
        'alerts/actions',
        'alerts/silences-and-mute-policies',
        'alerts/enrichments',
      ],
    },
    {
      type: 'category',
      label: 'Configure',
      collapsed: true,
      items: [
        'user-management/register-login',
        'user-management/admin-panel',
        'user-management/audit-logs',
        'user-management/ldap',
        'user-management/ai',
        'user-management/data-retention',
      ],
    },
    {
      type: 'category',
      label: 'Develop',
      collapsed: true,
      items: ['development', 'alerts/root-cause-api'],
    },
  ],
};

module.exports = sidebars;