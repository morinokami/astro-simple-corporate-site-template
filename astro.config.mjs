import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare(),
  image: {
    domains: ['images.microcms-assets.io'],
  },
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
