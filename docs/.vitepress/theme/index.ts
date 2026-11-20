import { defineAsyncComponent } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component(
      "MermaidDiagram",
      defineAsyncComponent(() => import("./MermaidDiagram.vue")),
    );
  },
};
