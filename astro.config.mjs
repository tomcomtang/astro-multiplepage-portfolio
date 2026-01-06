import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import staticAdapter from '@astrojs/static';

export default defineConfig({
  site: 'https://hdvs21.github.io',

  output: 'static',
  adapter: staticAdapter(),

  integrations: [tailwind()]
});
