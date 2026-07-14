<script setup lang="ts">
import { computed, ref } from 'vue'
import { data as posts } from '../posts.data'
import ProfileCard from './ProfileCard.vue'

const selectedCategory = ref('全部')
const selectedTag = ref('全部')

const categories = computed(() => [...new Set(posts.map((post) => post.category))])
const tags = computed(() => [...new Set(posts.flatMap((post) => post.tags))])

const filteredPosts = computed(() =>
  posts.filter((post) => {
    const categoryMatches = selectedCategory.value === '全部' || post.category === selectedCategory.value
    const tagMatches = selectedTag.value === '全部' || post.tags.includes(selectedTag.value)
    return categoryMatches && tagMatches
  }),
)

const grouped = computed(() => {
  const groups = new Map<string, typeof posts>()
  for (const post of filteredPosts.value) {
    const list = groups.get(post.category) || []
    list.push(post)
    groups.set(post.category, list)
  }
  return [...groups.entries()]
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { month: '2-digit', day: '2-digit' }).format(new Date(date))

const clearFilters = () => {
  selectedCategory.value = '全部'
  selectedTag.value = '全部'
}
</script>

<template>
  <div class="blog-layout">
    <main class="catalog-panel panel-card">
      <header class="page-heading">
        <span class="section-kicker">ARCHIVE</span>
        <h1>文章</h1>
        <p>共 {{ posts.length }} 篇记录，可按分类和标签筛选。</p>
      </header>

      <div class="filter-panel">
        <section id="categories" class="filter-row">
          <strong>分类</strong>
          <div>
            <button
              v-for="category in ['全部', ...categories]"
              :key="category"
              type="button"
              :class="{ active: selectedCategory === category }"
              @click="selectedCategory = category"
            >
              {{ category }}
            </button>
          </div>
        </section>

        <section id="tags" class="filter-row">
          <strong>标签</strong>
          <div>
            <button
              v-for="tag in ['全部', ...tags]"
              :key="tag"
              type="button"
              :class="{ active: selectedTag === tag }"
              @click="selectedTag = tag"
            >
              {{ tag }}
            </button>
          </div>
        </section>
      </div>

      <div class="filter-summary">
        <span>显示 {{ filteredPosts.length }} 篇文章</span>
        <button v-if="selectedCategory !== '全部' || selectedTag !== '全部'" type="button" @click="clearFilters">
          清除筛选
        </button>
      </div>

      <section v-for="[category, items] in grouped" :key="category" class="article-group">
        <h2><span>#</span> {{ category }} <small>{{ items.length }}</small></h2>
        <a v-for="post in items" :key="post.url" :href="post.url" class="article-line">
          <span class="article-line__title">{{ post.title }}</span>
          <span class="article-line__date">{{ formatDate(post.date) }}</span>
        </a>
      </section>

      <div v-if="!filteredPosts.length" class="empty-state">没有符合当前条件的文章。</div>
    </main>

    <ProfileCard />
  </div>
</template>
