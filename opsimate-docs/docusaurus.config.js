module.exports = {
  title: 'OpsiMate',
  tagline: 'One console for servers, Docker, and Kubernetes',
  url: 'https://your-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'OpsiMate',
  projectName: 'documentation',

  // ⚠️ Add these lines to ignore broken links temporarily
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
        {
          type: 'html',
          position: 'right',
          value: `
            <a href="https://github.com/OpsiMate/documentation" target="_blank" rel="noopener noreferrer" class="navbar__icon-link" aria-label="GitHub repository">
              <!-- GitHub SVG -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
              </svg>
            </a>
          `,
        },
        // Slack link here...
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
      appId: '9IMDR9GH4R',
      apiKey: '00b61e4dbe8cab74e0e341fb0c1daf81',
      indexName: 'opsimate-docs',
      contextualSearch: true,
      searchParameters: {},
    },
  },
};









