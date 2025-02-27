// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Shaunotes",
  tagline: "Welcome to my mind palace.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://shaunotes.pages.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ShauryaSwarup", // Usually your GitHub org/user name.
  projectName: "shaunotes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        gtag: {
          trackingID: "G-Q6VZF656FX",
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/", // This makes docs the landing page
          showLastUpdateTime: true,
          // editUrl: "https://github.com/ShauryaSwarup/shaunnotes",
        },
        blog: {
          blogTitle: "Shaun's blog!",
          blogDescription: "Updates, thoughts, and more!",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "VCW3A1M7L6",

        // Public API key: it is safe to commit it
        apiKey: "00bdcb868ab8fbf99644a3e319680ead",

        indexName: "shaupages",

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        // searchParameters: {},

        searchPagePath: "search",

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
      },
      image: "img/preview.jpg",
      navbar: {
        title: "Shaunotes",
        logo: {
          alt: "Shaunnotes Logo",
          src: "img/brain.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "left",
            label: "Explore",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/ShauryaSwarup/shaunotes",
            position: "right",
            className: "header--github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Mind Palace",
            items: [
              {
                label: "Notes & LearnLogs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ShauryaSwarup/",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/shaurya-swarup/",
              },
              {
                label: "X",
                href: "https://x.com/shaun_on_x",
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
                label: "Shaunotes Github",
                href: "https://github.com/ShauryaSwarup/shaunotes",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shaunotes. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
