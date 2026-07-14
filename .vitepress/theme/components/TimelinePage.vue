<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import ProfileCard from './ProfileCard.vue'

const grouped = computed(() => {
  const groups = new Map<string, typeof posts>()
  for (const post of posts) {
    const year = new Date(post.date).getFullYear().toString()
    const list = groups.get(year) || []
    list.push(post)
    groups.set(year, list)
  }
  return [...groups.entries()]
})

const formatDay = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { month: '2-digit', day: '2-digit' }).format(new Date(date))
</script>

<template>
  <div class="blog-layout">
    <main class="timeline-panel panel-card">
      <header class="page-heading">
        <span class="section-kicker">TIMELINE</span>
        <h1>时间轴</h1>
        <p>沿着时间，回看每一次记录。</p>
      </header>

      <div class="timeline">
        <div class="timeline-future"><i></i><span>未完待续…</span></div>
        <section v-for="[year, items] in grouped" :key="year" class="timeline-year">
          <h2><i></i>{{ year }}</h2>
          <a v-for="post in items" :key="post.url" :href="post.url" class="timeline-entry">
            <time>{{ formatDay(post.date) }}</time>
            <i></i>
            <div><span>{{ post.category }}</span><strong>{{ post.title }}</strong></div>
          </a>
        </section>
      </div>
    </main>

    <ProfileCard />
  </div>
</template>
