import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
