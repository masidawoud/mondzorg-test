import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  output: 'static',
  integrations: [
    ...(isDev ? [react(), markdoc(), keystatic()] : []),
  ],
});
