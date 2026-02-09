// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ftrianakast.github.io',
  // Uncomment the line below if you're deploying to a repository named something other than username.github.io
  // base: '/repository-name',
  vite: {
    plugins: [tailwindcss()]
  }
});