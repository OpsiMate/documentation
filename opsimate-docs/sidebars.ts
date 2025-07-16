import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/quick-start',
        'getting-started/adding-providers',
        'getting-started/discovering-services',
      ],
    },
    {
      type: 'category',
      label: 'Providers',
      items: [
        'providers/provider-types',
      ],
    },
    {
      type: 'category',
      label: 'Services',
      items: [
        'services/managing-services',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring',
      items: [
        'monitoring/setting-up-alerts',
      ],
    },
    {
      type: 'category',
      label: 'Dashboards',
      items: [
        'dashboards/creating-dashboards',
      ],
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
      items: [
        'advanced/actions',
        'advanced/incident-response',
      ],
    },
  ],
};

export default sidebars;
