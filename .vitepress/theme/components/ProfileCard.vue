<script setup lang="ts">
import { computed } from 'vue'
import { data as posts } from '../posts.data'

const categories = computed(() => new Set(posts.map((post) => post.category)).size)
const tags = computed(() => new Set(posts.flatMap((post) => post.tags)).size)
</script>

<template>
  <aside class="profile-column">
    <section class="profile-card panel-card">
      <div class="profile-avatar">A</div>
      <h2>Awen</h2>
      <p>保持好奇，持续记录。</p>

      <div class="profile-stats">
        <a href="/articles">
          <strong>{{ posts.length }}</strong>
          <span>文章</span>
        </a>
        <div>
          <strong>{{ categories }}</strong>
          <span>分类</span>
        </div>
        <div>
          <strong>{{ tags }}</strong>
          <span>标签</span>
        </div>
      </div>

      <a class="profile-github" href="https://github.com/awenaw/wiki" target="_blank" rel="noreferrer">
        GitHub <span>↗</span>
      </a>
    </section>

    <section class="side-nav panel-card">
      <a href="/" class="side-nav__item">
        <span>⌂</span>
        <div><strong>主页</strong><small>最近更新与站点概览</small></div>
      </a>
      <a href="/articles" class="side-nav__item">
        <span>▤</span>
        <div><strong>文章</strong><small>全部 Markdown 笔记</small></div>
      </a>
      <a href="/timeline" class="side-nav__item">
        <span>◷</span>
        <div><strong>时间轴</strong><small>按照时间回顾记录</small></div>
      </a>
    </section>
  </aside>
</template>
