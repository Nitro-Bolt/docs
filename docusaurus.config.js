/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NitroBolt Documentation',
  url: 'https://docs.nitrobolt.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'NitroBolt',
  projectName: 'docs',
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'NitroBolt Documentation',
      items: [
        {
          href: '/development/',
          label: 'Development',
          position: 'left'
        },
        {
          href: 'https://nitrobolt.org/',
          label: 'NitroBolt',
          position: 'right'
        },
        {
          href: 'https://github.com/NitroBolt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: require('./code-themes/light'),
      darkTheme: require('./code-themes/dark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          breadcrumbs: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};