import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
