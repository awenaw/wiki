import { createContentLoader } from 'vitepress'

export default createContentLoader('notes/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter(({ frontmatter }) => !frontmatter.hidden)
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title || '未命名文章',
        url,
        date: frontmatter.date || '',
        description: frontmatter.description || excerpt || '',
        category: frontmatter.category || '未分类',
        tags: frontmatter.tags || [],
      }))
      .sort((a, b) => +new Date(b.date) - +new Date(a.date))
  },
})
