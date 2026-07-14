<script setup lang="ts">
import { data as posts } from '../posts.data'
import ProfileCard from './ProfileCard.vue'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' }).format(new Date(date))
</script>

<template>
  <div class="blog-layout">
    <main class="blog-main">
      <section class="welcome-panel panel-card">
        <span class="section-kicker">PERSONAL WIKI</span>
        <h1>记录所学，整理所想。</h1>
        <p>一个专注技术、工具与日常思考的个人知识库。</p>
        <div class="welcome-actions">
          <a class="primary-link" href="/articles">浏览全部文章</a>
          <a class="text-link" href="/timeline">查看时间轴 <span>→</span></a>
        </div>
      </section>

      <section class="topic-grid">
        <a href="/articles" class="topic-card topic-card--blue">
          <span>▤</span><strong>文章归档</strong><small>浏览全部内容</small>
        </a>
        <a href="/timeline" class="topic-card topic-card--amber">
          <span>◷</span><strong>时间轴</strong><small>查看更新记录</small>
        </a>
        <button class="topic-card topic-card--green" type="button" @click="document.querySelector('.DocSearch-Button')?.click()">
          <span>⌕</span><strong>全文搜索</strong><small>快速找到笔记</small>
        </button>
      </section>

      <section class="recent-panel panel-card">
        <div class="section-heading">
          <div><span class="section-kicker">RECENT</span><h2>最近文章</h2></div>
          <a href="/articles">查看全部 <span>→</span></a>
        </div>

        <div v-if="posts.length" class="post-list">
          <a v-for="post in posts.slice(0, 6)" :key="post.url" :href="post.url" class="post-row">
            <div class="post-row__date">{{ formatDate(post.date) }}</div>
            <div class="post-row__body">
              <span class="post-category">{{ post.category }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.description }}</p>
            </div>
            <span class="post-arrow">→</span>
          </a>
        </div>
        <div v-else class="empty-state">第一篇文章正在路上。</div>
      </section>
    </main>

    <ProfileCard />
  </div>
</template>
