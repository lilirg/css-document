const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CSS 参考',
  tagline: '一个广泛的 CSS 参考，包含所有重要的属性和信息',
  url: 'https://css-document.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/css-logo.svg',
  organizationName: 'css-document',
  projectName: 'css-document',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/css-document/css-document/tree/main/website/',
        },
        blog: false,
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
        title: 'CSS 参考',
        logo: {
          alt: 'CSS Logo',
          src: 'img/css-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStarted',
            label: '入门',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'concepts',
            label: '概念',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reference',
            label: '参考',
            position: 'left',
          },
          {
            href: 'https://github.com/css-document/css-document',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '入门',
                to: '/docs/intro',
              },
              {
                label: '概念',
                to: '/docs/concepts/intro',
              },
              {
                label: '参考',
                to: '/docs/reference/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/css-document/css-document',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'CSS-Tricks',
                href: 'https://css-tricks.com/',
              },
              {
                label: 'MDN Web Docs',
                href: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CSS 参考.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;