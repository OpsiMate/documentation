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
    // {
    //   type: 'category',
    //   label: 'Providers & Services',
    //   collapsed: true,
    //   items: [
    //     'providers-services/overview',
    //     {
    //       type: 'category',
    //       label: 'Providers',
    //       collapsed: true,
    //       items: [
    //         'providers-services/providers/add-provider',
    //         'providers-services/providers/server-provider',
    //         'providers-services/providers/kubernetes-provider',
    //       ],
    //     },
    //     {
    //       type: 'category',
    //       label: 'Services',
    //       collapsed: true,
    //       items: [
    //         'providers-services/services/add-services',
    //         'providers-services/services/container-services',
    //         'providers-services/services/systemd-services',
    //         'providers-services/services/kubernetes-pods',
    //       ],
    //     },
    //   ],
    // },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      items: [
        'integrations/overview',
        'integrations/grafana',
        'integrations/gcp',
        'integrations/datadog',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Dashboard',
    //   collapsed: true,
    //   items: [
    //     'dashboards/overview',
    //     'dashboards/service-menu',
    //     'dashboards/saving-views',
    //   ],
    // },
    {
      type: 'category',
      label: 'Alerts Dashboard',
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
