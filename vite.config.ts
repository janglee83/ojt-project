import { defineConfig, loadEnv } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import vue from '@vitejs/plugin-vue';
import FullReload from 'vite-plugin-full-reload';
import vuetify from 'vite-plugin-vuetify';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  process.env = { ...process.env, ...env };

  return defineConfig({
    plugins: [
      RubyPlugin(),
      vue(),
      vuetify({ autoImport: true }),
      FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    ],
  });
};
