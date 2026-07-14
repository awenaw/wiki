import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Wiki',
  description: '个人 Markdown 笔记',
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
      message: '使用 VitePress 构建',
    },
  },
})
