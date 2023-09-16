import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercel(),
  image: {
    domains: ['images.microcms-assets.io'],
  },
  integrations: [react()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
