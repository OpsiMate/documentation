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
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/deploy',
        'getting-started/configuration',
        'getting-started/system-requirements',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      collapsed: true,
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
          ],
        },
        'services/managing-services',
        'providers/provider-types',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      collapsed: true,
      items: ['monitoring/setting-up-alerts'],
    },
    {
      type: 'category',
      label: 'Dashboards',
      collapsed: true,
      items: ['dashboards/creating-dashboards'],
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
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
      collapsed: true,
      items: ['advanced/technical-specifications', 'advanced/actions', 'advanced/incident-response'],
    },
  ],
};

module.exports = sidebars;
