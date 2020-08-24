import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/components/Home'
import Home_new from '@/components/Home_new'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home_new',
      component: Home_new
    }
  ]
})
