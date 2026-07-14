<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import ProfileCard from './ProfileCard.vue'

const grouped = computed(() => {
  const groups = new Map<string, typeof posts>()
  for (const post of posts) {
    const list = groups.get(post.category) || []
    list.push(post)
    groups.set(post.category, list)
  }
  return [...groups.entries()]
})

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { month: '2-digit', day: '2-digit' }).format(new Date(date))
</script>

<template>
  <div class="blog-layout">
    <main class="catalog-panel panel-card">
      <header class="page-heading">
        <span class="section-kicker">ARCHIVE</span>
        <h1>文章</h1>
        <p>共 {{ posts.length }} 篇记录，按主题整理。</p>
      </header>

      <section v-for="[category, items] in grouped" :key="category" class="article-group">
        <h2><span>#</span> {{ category }} <small>{{ items.length }}</small></h2>
        <a v-for="post in items" :key="post.url" :href="post.url" class="article-line">
          <span class="article-line__title">{{ post.title }}</span>
          <span class="article-line__date">{{ formatDate(post.date) }}</span>
        </a>
      </section>
    </main>

    <ProfileCard />
  </div>
</template>
