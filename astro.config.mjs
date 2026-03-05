import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://openclaw40-guide.vercel.app',
  integrations: [
    starlight({
      title: 'openclaw40+使用指南',
      description: '从零开始，轻松掌握 OpenClaw AI 助理',
      customCss: [
        './src/styles/custom.css',
      ],
      defaultLocale: 'zh',
      locales: {
        zh: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      social: {
        github: 'https://github.com/openclaw/openclaw',
      },
      sidebar: [
        {
          label: '开始',
          items: [
            { label: '首页', link: '/' },
          ],
        },
        {
          label: '📦 安装篇',
          items: [
            { label: '环境准备', link: '/install/prerequisites/' },
            { label: '快速安装', link: '/install/quickstart/' },
            { label: '配置指南', link: '/install/config/' },
          ],
        },
        {
          label: '💡 使用篇',
          items: [
            { label: '基础操作', link: '/usage/basics/' },
            { label: '技能安装', link: '/usage/skills/' },
          ],
        },
        {
          label: '❓ FAQ',
          items: [
            { label: '常见问题', link: '/faq/' },
          ],
        },
        {
          label: '📚 资源推荐',
          items: [
            { label: '精选技能', link: '/resources/skills/' },
          ],
        },
        {
          label: '👤 关于',
          items: [
            { label: '关于本站', link: '/about/' },
          ],
        },
      ],
      lastUpdated: true,
      pagefind: true,
      pagination: true,
    }),
  ],
  output: 'static',
});
