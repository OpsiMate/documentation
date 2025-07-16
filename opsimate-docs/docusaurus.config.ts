import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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
  url: 'https://docs.opsimate.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'opsimate', 
  projectName: 'opsimate-docs',

  // Change this to 'warn' to allow the site to build with broken links
  // This is helpful during development
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
          customCss: [
            './src/css/custom.css',
            './static/css/custom.css',
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/opsimate-social-card.jpg',
    navbar: {
      title: 'OpsiMate',
      logo: {
        alt: 'OpsiMate Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://join.slack.com/t/opsimate/shared_invite/zt-39bq3x6et-NrVCZzH7xuBGIXmOjJM7gA',
          label: 'Slack Community',
          position: 'right',
        },
        {
          href: 'https://github.com/Fifaboyz/OpsiMate',
          label: 'GitHub',
          position: 'right',
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
