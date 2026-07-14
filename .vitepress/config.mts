import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Wiki',
  description: 'Awen 的个人知识库，记录技术、工具与日常思考',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: '笔记',
          items: [{ text: '笔记目录', link: '/notes/' }],
        },
      ],
    },

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/awenaw/wiki' },
    ],

    footer: {
      message: 'Keep learning. Keep building.',
      copyright: '© 2026 Awen',
    },
  },
})
