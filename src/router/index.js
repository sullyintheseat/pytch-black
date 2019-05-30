import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Selection from '@/components/screens/Selection'
import Lander from '@/components/screens/Lander'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/select',
      name: 'Selection',
      component: Selection
    },
    {
      path: '/lander',
      name: 'Lander',
      component: Lander
    },
    {
      path: '/:id',
      component: Main
    }
  ]
})
