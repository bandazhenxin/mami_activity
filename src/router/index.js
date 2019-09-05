import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/dist',
  scorllBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home')
    }
  ]
})
