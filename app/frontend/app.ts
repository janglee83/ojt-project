import { createApp, h } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { vuetifyPlugin } from './vuetify';
import { resolvePage } from './pages';
import { createPinia } from 'pinia';
import './index.css';
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default function () {
  createInertiaApp({
    resolve: resolvePage,
    progress: {
      delay: 50,
      includeCSS: true,
      showSpinner: false,
    },
    setup({ el, App, props, plugin }) {
      const app = createApp({ render: () => h(App, props) });
      const pinia = createPinia();
      app.use(plugin);
      app.use(vuetifyPlugin);
      app.use(pinia);
      app.use(LoadingPlugin, {});
      app.use(Toast, {
        timeout: 2000,
      });

      app.component('iHead', Head);
      app.component('iLink', Link);

      app.mount(el);
    },
  }).then(r => console.log(r));
}
