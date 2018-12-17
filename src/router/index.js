import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/Index')
    },
    {
      path: '/bio',
      name: 'Bio',
      component: () => import('@/views/Bio')
    }
  ]
})
