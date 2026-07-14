import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "Awen's Wiki",
  description: 'Awen 的个人知识库，记录技术、工具与日常思考',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles' },
      { text: '时间轴', link: '/timeline' },
    ],

    sidebar: {
      '/notes/': [
        {
          text: '文章',
          items: [
            { text: '全部文章', link: '/articles' },
            { text: '欢迎来到我的知识库', link: '/notes/welcome' },
          ],
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
