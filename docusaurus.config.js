/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hisui",
  tagline: "Dinosaurs are cool",
  url: "https://adenohitu.github.io",
  baseUrl: "/Hisui-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/docs/img/favicon.ico",
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
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/adenohitu/hisui",
          label: "GitHub",
          position: "right",
        },
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
            {
              label: "Discord",
              href: "https://discord.gg/d59sCzYkqy",
            },
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
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © 2020-${new Date().getFullYear()} Adenohitu. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
