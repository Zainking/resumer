import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Resumer from '@/components/Resumer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/resumer',
      name: 'Resumer',
      component: Resumer
    }
  ]
})
