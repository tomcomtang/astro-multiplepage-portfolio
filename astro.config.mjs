import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import staticAdapter from '@astrojs/static';

export default defineConfig({
  site: 'https://hdvs21.github.io',

  output: 'static',
  adapter: staticAdapter(),

  integrations: [tailwind()],

  server: {
    port: 4321,
    host: true
  },

  devToolbar: {
    enabled: false
  }
});
