import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/components/Index')
const Resumer = () => import('@/components/Resumer')
const Register = () => import('@/components/Register')

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
    }
  ]
})
