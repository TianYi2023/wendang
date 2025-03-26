import { defineUserConfig } from "vuepress";
import { path } from "@vuepress/utils";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: "E:/rang ke yan xiang/my-docs/.vuepress/dist",

  lang: "zh-CN",
  title: "文档演示",
  description: "vuepress-theme-hope 的文档演示",

  theme,

  // 配置主页
  locales: {
    "/": {
      lang: "zh-CN",
      title: "项目主页",
      description: "项目描述",
    },
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
