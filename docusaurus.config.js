/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hisui",
  tagline: "競技プログラミング支援ツール",
  url: "https://adenohitu.github.io",
  baseUrl: "/Hisui-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "adenohitu", // Usually your GitHub org/user name.
  projectName: "Hisui-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Hisui-使い方",
      logo: {
        alt: "Hisui Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "right",
          label: "ドキュメント",
        },
        // {
        //   href: "https://github.com/adenohitu/hisui",
        //   label: "GitHub",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Discord",
            //   href: "https://discord.gg/d59sCzYkqy",
            // },
            {
              label: "Twitter",
              href: "https://twitter.com/adenohitu",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Introduce",
              href: "https://adenohitu.github.io/Hisui-introduce/",
            },
            {
              label: "GitHub",
              href: "https://github.com/adenohitu/hisui",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Adenohitu.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        gtag: {
          trackingID: "G-J3X1NDP2YH",
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/adenohitu/Hisui-docs/blob/main/",
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
    localeConfigs: {
      ja: {
        label: "日本語",
        direction: "ltr",
      },
    },
  },
};

module.exports = config;
