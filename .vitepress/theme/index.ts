import DefaultTheme from 'vitepress/theme'
import './custom.css'
import SiteHome from './components/SiteHome.vue'
import ArticleIndex from './components/ArticleIndex.vue'
import TimelinePage from './components/TimelinePage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SiteHome', SiteHome)
    app.component('ArticleIndex', ArticleIndex)
    app.component('TimelinePage', TimelinePage)
  },
}
