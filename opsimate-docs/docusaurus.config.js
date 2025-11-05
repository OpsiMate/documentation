// docusaurus.config.js
module.exports = {
  title: 'OpsiMate',
  tagline: 'One console for servers, Docker, and Kubernetes',
  url: 'https://your-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'OpsiMate',
  projectName: 'documentation',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/OpsiMate/documentation/edit/main/opsimate-docs/',

        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
        // REMOVE gtag config here - we're using custom component instead
      },
    ],
  ],

  themeConfig: {
    // Color mode configuration - THIS ENABLES THE TOGGLE
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false, // This enables the toggle!
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'OpsiMate',
      logo: { alt: 'OpsiMate Logo', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Docs' },
        { type: 'doc', docId: 'dashboards/overview', position: 'left', label: 'Dashboard' },
        { type: 'doc', docId: 'alerts/adding-alerts', position: 'left', label: 'Alerts' },
        { type: 'doc', docId: 'integrations/overview', position: 'left', label: 'Integrations' },
        { type: 'doc', docId: 'user-management/register-login', position: 'left', label: 'User Management' },
        { 
          href: 'https://www.opsimate.com/', 
          label: 'Website', 
          position: 'left' 
         },

        // --- Right-side icons (GitHub + Slack) ---
        {
          type: 'html',
          position: 'right',
          value: `
            <div class="navbar-icons-container">
              <a href="https://github.com/OpsiMate/OpsiMate"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub repository"
                 class="navbar-icon-link">
                <img src="/img/github.svg" alt="GitHub" class="navbar-icon" />
              </a>
              <a href="https://app.slack.com/client/T096DF2LNBS/C096DF2UDLG"
                 target="_blank" rel="noopener noreferrer"
                 aria-label="Slack community"
                 class="navbar-icon-link">
                <img src="/img/slack.svg" alt="Slack" class="navbar-icon" />
              </a>
            </div>
          `,
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Integrate with',
          items: [
            {
              html: `
                <div class="footer-integrations">
                  <a href="/docs/integrations/grafana" class="integration-item" aria-label="Grafana Integration">
                    <div class="integration-icon-container">
                      <img src="/img/grafana.svg" alt="Grafana" class="integration-icon" />
                    </div>
                    <span class="integration-name">Grafana</span>
                  </a>
                  <a href="/docs/integrations/kibana" class="integration-item" aria-label="Kibana Integration">
                    <div class="integration-icon-container">
                      <img src="/img/kibana.svg" alt="Kibana" class="integration-icon" />
                    </div>
                    <span class="integration-name">Kibana</span>
                  </a>
                  <a href="/docs/providers-services/services/container-services" class="integration-item" aria-label="Docker Integration">
                    <div class="integration-icon-container">
                      <img src="/img/docker.svg" alt="Docker" class="integration-icon" />
                    </div>
                    <span class="integration-name">Docker</span>
                  </a>
                  <a href="/docs/providers-services/services/kubernetes-pods" class="integration-item" aria-label="Kubernetes Integration">
                    <div class="integration-icon-container">
                      <img src="/img/kubernetes.svg" alt="Kubernetes" class="integration-icon" />
                    </div>
                    <span class="integration-name">Kubernetes</span>
                  </a>
                  <a href="/docs/providers-services/services/systemd-services" class="integration-item" aria-label="Systemd Integration">
                    <div class="integration-icon-container">
                      <img src="/img/systemd.svg" alt="Systemd" class="integration-icon" />
                    </div>
                    <span class="integration-name">Systemd</span>
                  </a>
                  <a href="/docs/integrations/datadog" class="integration-item" aria-label="Datadog Integration">
                    <div class="integration-icon-container">
                      <img src="/img/datadog.svg" alt="Datadog" class="integration-icon" />
                    </div>
                    <span class="integration-name">Datadog</span>
                  </a>
                </div>
              `,
            },  
          ],
        },
        
        {
         
          title: 'Community',
          items: [
            {
              html: `
                  <div class="footer-community-icons">
                    <a href="https://github.com/OpsiMate/OpsiMate"
                      target="_blank" rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      class="footer-community-icon-link">
                      <img src="/img/github.svg" alt="GitHub" class="footer-community-icon" />
                    </a>
                    <a href="https://app.slack.com/client/T096DF2LNBS/C096DF2UDLG"
                      target="_blank" rel="noopener noreferrer"
                      aria-label="Slack community"
                      class="footer-community-icon-link">
                      <img src="/img/slack.svg" alt="Slack" class="footer-community-icon" />
                    </a>
                  </div>
                `,
              },
            ],
          },
        {
          title: 'Resources',
          items: [
            {
              label: 'Main Website',
              href: 'https://www.opsimate.com/',
            },
            {
              label: 'Documentation',
              href: '/',
            },
          ],
        },
      ],
      // --- VERCEL CARD FOOTER BOTTOM ---
      copyright: `
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <div class="footer-copyright">
              Copyright © ${new Date().getFullYear()} OpsiMate. All rights reserved.
            </div>
            
            <a href="https://vercel.com"
               target="_blank"
               rel="noopener noreferrer"
               class="vercel-card-container">
              <div class="vercel-card">
                <span class="vercel-card-text">Deployed on</span>
                <img src="/img/vercel.svg" alt="Vercel" class="vercel-card-logo" />
              </div>
            </a>
          </div>
        </div>
      `,
    },

    algolia: {
      appId: 'GADD2TVEH5',
      apiKey: 'cc7b48e597d80aa85aad4c50df82812f',
      indexName: 'OpsiMate Docs',
      contextualSearch: true,
    },
  },
};



