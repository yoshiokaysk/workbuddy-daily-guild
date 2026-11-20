import { defineConfig } from "vitepress";

import { handbookSidebar } from "./handbook-sidebar";
import { configureMermaidMarkdown } from "./mermaid-markdown";
import { siteSidebar } from "./sidebar";

export default defineConfig({
  lang: "zh-CN",
  title: "WorkBuddy 日常工作指南",
  titleTemplate: ":title · WorkBuddy 日常工作指南",
  description: "一份简洁、实用的 WorkBuddy 日常工作参考手册。",
  base: "/workbuddy-daily-guide/",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/workbuddy-daily-guide/favicon.svg",
      },
    ],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  markdown: {
    config: configureMermaidMarkdown,
  },
  themeConfig: {
    appearance: false,
    siteTitle: "日常工作指南",
    nav: [
      { text: "首页", link: "/" },
      { text: "日常指南", link: "/guide/", activeMatch: "/guide/" },
      { text: "实战蓝皮书", link: "/bluebook/", activeMatch: "/bluebook/" },
      { text: "案例集", link: "/cases/", activeMatch: "/cases/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "指南概览", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
        {
          text: "日常工作",
          items: [
            { text: "日常工作流", link: "/guide/daily-workflow" },
            { text: "效率技巧", link: "/guide/tips" },
          ],
        },
        handbookSidebar,
      ],
      ...siteSidebar,
    },
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 3],
      label: "本页目录",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "medium",
      },
    },
    footer: {
      message: "WorkBuddy 日常工作指南 · 让日常工作更从容",
      copyright: "Copyright © 2026 WorkBuddy Daily Guide",
    },
  },
});
