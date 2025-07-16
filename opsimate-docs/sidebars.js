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
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/adding-providers',
        'getting-started/discovering-services',
        'getting-started/quick-start',
      ],
    },
    {
      type: 'category',
      label: '⚡ Core Features',
      collapsed: false,
      items: [
        'features/infrastructure-management',
        'features/monitoring',
        'features/alerts',
        'features/actions',
        'features/incident-response',
        'features/integrations',
      ],
    },
    {
      type: 'category',
      label: '🔧 Services & Providers',
      collapsed: true,
      items: [
        'services/managing-services',
        'providers/provider-types',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: ['monitoring/setting-up-alerts'],
    },
    {
      type: 'category',
      label: 'Dashboards',
      items: ['dashboards/creating-dashboards'],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        'integrations/overview',
        'integrations/grafana',
        'integrations/prometheus',
        'integrations/kibana',
        'integrations/coralogix',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: ['advanced/technical-specifications', 'advanced/actions', 'advanced/incident-response'],
    },
  ],
};

module.exports = sidebars;
