// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JIPCAD',
  tagline: 'Joint-Interactive-Procedural CAD Tool that unleashes your potential in 3D modeling🌈',
  url: 'https://JIPCAD.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/nome.png',
  organizationName: 'JIPCAD', // Usually your GitHub org/user name.
  projectName: 'JIPCAD.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/JIPCAD/NOME3',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/JIPCAD/NOME3',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'JIPCAD',
        logo: {
          alt: 'JIPCAD',
          src: 'img/nome.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Exhibition', position: 'left'},
          {to: '/download', label: 'Download', position: 'left'},
          {to: 'https://www.youtube.com/watch?v=Y1nnXhYHG5E', label: '🎉Happy Birthday Professor Carlo Sequin🎉', position: 'left'},
          {
            href: 'https://github.com/JIPCAD/NOME3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Language Reference',
                to: '/docs/lang-ref',
              },
              {
                label: 'Compiling',
                to: '/docs/compiling',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'slack',
                href: 'https://nomedevelopment.slack.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Exhibition',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/JIPCAD/NOME3',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JIPCAD Project, UC Berkeley.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
