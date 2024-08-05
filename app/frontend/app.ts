import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import { vuetifyPlugin } from "./vuetify";
import { resolvePage } from "./pages";
import { createPinia } from "pinia";

export default function () {
  createInertiaApp({
    resolve: resolvePage,
    progress: {
      // The delay after which the progress bar will appear, in milliseconds...
      delay: 50,

      // Whether to include the default NProgress styles...
      includeCSS: true,

      // Whether the NProgress spinner will be shown...
      showSpinner: false,
    },
    setup({ el, App, props, plugin }) {
      const app = createApp({ render: () => h(App, props) });
      const pinia = createPinia();
      app.use(plugin);
      app.use(vuetifyPlugin);
      app.use(pinia);

      app.component("iHead", Head);
      app.component("iLink", Link);

      app.mount(el);
    },
  });
}
