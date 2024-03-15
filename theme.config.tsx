import React from "react";
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import APP from "./src/lib/constants";
import Logo from "./src/ui/Logo";
import Head from "./src/ui/Head";
import FooterComponent from "./src/ui/Footer";

const titleComponent = ({ title, type }) => {
  if (type === "separator") {
    return <span className="cursor-default">{title}</span>;
  }
  return <>{title}</>;
};

const config: DocsThemeConfig = {
  docsRepositoryBase: APP.github.repository,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: `%s - ${APP.nameShort}`,
      };
    }
  },
  darkMode: true,
  head: Head,
  logo: Logo,
  project: {
    link: APP.github.author,
    // icon: null // TODO: uncomment if you want to hide this,
  },
  chat: {
    link: "https://example.com", // undefined // TODO: chat link
    icon: null,
  },
  // search: {},
  // banner: {},
  // navbar: {},
  sidebar: {
    titleComponent,
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  // components: {},
  // direction: "rtl",
  // main: Component,
  toc: {
    title: "On This Page",
    backToTop: true,
  },
  editLink: {
    text: "Edit this page on GitHub →",
    // component: null,
  },
  feedback: {
    content: "Questions? Give us your feedback.", // null
    labels: "feedback",
  },
  // navigation: {},
  // gitTimestamp: Component,
  footer: {
    component: FooterComponent,
  },
  // themeSwitch: {},
};

export default config;
