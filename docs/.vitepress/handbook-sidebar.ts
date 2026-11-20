import type { DefaultTheme } from "vitepress";

const base = "/guide/handbook/";

const link = (file: string, text: string): DefaultTheme.SidebarItem => ({
  text,
  link: `${base}${file}`,
});

export const handbookSidebar: DefaultTheme.SidebarItem = {
  text: "日常工作应对指南",
  collapsed: false,
  items: [
    link("index", "导读：这份指南怎么用"),
    {
      text: "第一篇 · 基础认知",
      items: [
        link("01-what-it-does", "1. 能为你做什么"),
        link("02-mindset", "2. 建立协作预期"),
        link("03-task-inventory", "3. 盘点你的工作"),
      ],
    },
    {
      text: "第二篇 · 核心方法",
      items: [
        link("04-five-elements", "4. 五要素表达法"),
        link("05-templates", "5. 模板化"),
        link("06-dialogue-rhythm", "6. 对话节奏"),
        link("07-validation", "7. 验收与纠错"),
      ],
    },
    {
      text: "第三篇 · 场景实战",
      items: [
        link("08-meetings-info", "8. 会议与信息整理"),
        link("09-writing", "9. 文档与内容写作"),
        link("10-data-tables", "10. 表格与数据处理"),
        link("11-communication", "11. 沟通与协作"),
        link("12-learning-knowledge", "12. 学习与知识管理"),
        link("13-time-tasks", "13. 时间与任务管理"),
      ],
    },
    {
      text: "第四篇 · 系统化与进阶",
      items: [
        link("14-personal-workflow", "14. 个人工作流"),
        link("15-team-usage", "15. 团队应用"),
        link("16-pitfalls-safety", "16. 避坑与安全边界"),
      ],
    },
    link("appendix", "附录：模板速查"),
  ],
};
