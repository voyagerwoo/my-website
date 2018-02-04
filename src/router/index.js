import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import DevLog from '@/components/DevLog'
import LifeLog from '@/components/LifeLog'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/devlog',
      name: 'Dev Log',
      component: DevLog
    },
    {
      path: '/lifelog',
      name: 'Life Log',
      component: LifeLog
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
