// docusaurus.config.js
module.exports = {
  title: 'OpsiMate',
  tagline: 'One console for servers, Docker, and Kubernetes',
  url: 'https://your-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'OpsiMate',
  projectName: 'documentation',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/opsimate/documentation/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'OpsiMate',
      logo: { alt: 'OpsiMate Logo', src: 'img/opsimate-logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { type: 'doc', docId: 'dashboards/overview', position: 'left', label: 'Dashboard' },
        { type: 'doc', docId: 'alerts/adding-alerts', position: 'left', label: 'Alerts' },
        { type: 'doc', docId: 'integrations/overview', position: 'left', label: 'Integrations' },
        { type: 'doc', docId: 'user-management/register-login', position: 'left', label: 'User Management' },

        // --- Right-side icon links (GitHub + Slack) ---
        {
          href: 'https://github.com/OpsiMate/documentation',
          position: 'right',
          className: 'navbar__icon-link github-icon',
          html: '<img src="/img/github-icon.svg" alt="GitHub" />',
        },
        {
          href: 'https://app.slack.com/client/T096DF2LNBS/C096DF2UDLG',
          position: 'right',
          className: 'navbar__icon-link slack-icon',
          html: '<img src="/img/slack-icon.svg" alt="Slack" />',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Dashboard', to: '/docs/dashboards/overview' },
            { label: 'Alerts', to: '/docs/alerts/adding-alerts' },
            { label: 'Integrations', to: '/docs/integrations/overview' },
            { label: 'User Management & Security', to: '/docs/user-management/register-login' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/OpsiMate/documentation' },
            { label: 'Slack Community', href: 'https://app.slack.com/client/T096DF2LNBS/C096DF2UDLG' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpsiMate. All rights reserved.`,
    },

    algolia: {
      appId: 'GADD2TVEH5',
      apiKey: 'cc7b48e597d80aa85aad4c50df82812f',
      indexName: 'OpsiMate Docs',
      contextualSearch: true,
      searchParameters: {},
    },
  },
};

















