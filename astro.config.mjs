import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'openclaw40+使用指南',
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
