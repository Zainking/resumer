import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Resumer from '@/components/Resumer'
import Register from '@/components/Register'
import ChangePass from '@/components/ChangePass'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/changepass',
      name: 'ChangePass',
      component: ChangePass
    }
  ]
})
