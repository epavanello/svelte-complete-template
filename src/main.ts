import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    appName: "Svelte complete template",
  },
});

export default app;
