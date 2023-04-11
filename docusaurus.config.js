const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'revolt.js Guide',
  tagline: 'A revolt.js beginner guide made by the community for the community. ',
  url: 'https://revolt.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'revolt-guide',
  projectName: 'guide',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
        localeConfigs: {
      en: {
        label: 'English',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/revolt-guide/guide',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
      ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'revolt.js Guide',
        logo: {
          alt: 'Guide Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: '/category/setup',
            position: 'left',
            label: 'Setup',
          },
          {
            type: 'doc',
            docId: '/category/features',
            position: 'left',
            label: 'Features',
          },
                    {
            type: 'doc',
            docId: '/category/commands',
            position: 'left',
            label: 'Commands',
          },
          {
            type: "localeDropdown",
            position: "right"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Social',
            items: [
              {
                label: 'Revolt server',
                href: 'https://revolt.chat',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/revolt-guide/guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} revolt.guide | Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
