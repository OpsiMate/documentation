import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Custom CSS for enhanced styling
const customCss = [
  './src/css/custom.css',
  './static/css/custom.css',
];

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OpsiMate',
  tagline: 'Unified Service Monitoring & Management Platform',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://opsimate-docs.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',
  // Disable trailing slashes for Vercel
  trailingSlash: false,

  // GitHub pages deployment config.
  organizationName: 'opsimate', 
  projectName: 'opsimate-docs',

  // Set to 'ignore' to allow the site to build with broken links for Vercel deployment
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'), // Use sidebar config for navigation
          routeBasePath: '/', // Serve the docs at the site's root
          path: 'docs', // Path to the docs directory
          include: ['**/*.md', '**/*.mdx'], // Include all markdown files
        },
        blog: false, // Disable blog to avoid route conflicts
        pages: false, // Disable pages to avoid route conflicts
        theme: {
          customCss: customCss,
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics ID
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/opsimate-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'opsimate, monitoring, management, devops, infrastructure'},
      {name: 'twitter:card', content: 'summary_large_image'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'support_us',
      content:
        '⭐️ If you like OpsiMate, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/Fifaboyz/OpsiMate">GitHub</a> and join our <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/opsimate/shared_invite/zt-39bq3x6et-NrVCZzH7xuBGIXmOjJM7gA">Slack community</a>! ⭐️',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    navbar: {
      title: 'OpsiMate',
      logo: {
        alt: 'OpsiMate Logo',
        src: 'img/opsimate-logo.svg',
        srcDark: 'img/opsimate-logo.svg',
        width: 32,
        height: 32,
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://join.slack.com/t/opsimate/shared_invite/zt-39bq3x6et-NrVCZzH7xuBGIXmOjJM7gA',
          position: 'right',
          className: 'header-slack-link',
          'aria-label': 'Slack Community',
        },
        {
          href: 'https://github.com/Fifaboyz/OpsiMate',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Fifaboyz/OpsiMate',
            },
            {
              label: 'Slack Community',
              href: 'https://join.slack.com/t/opsimate/shared_invite/zt-39bq3x6et-NrVCZzH7xuBGIXmOjJM7gA',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpsiMate. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'yaml', 'docker', 'javascript', 'typescript'],
    },
    // Search will be enabled when you set up Algolia or other search providers
    // For now, we'll use the default Docusaurus search
  } satisfies Preset.ThemeConfig,
};

export default config;
