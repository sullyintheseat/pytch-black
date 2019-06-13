import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Selection from '@/components/screens/Selection'
import Lander from '@/components/screens/Lander'
import OptionOne from '@/components/screens/OptionOne'
import OptionTwo from '@/components/screens/OptionTwo'
import OptionThree from '@/components/screens/OptionThree'
import OptionFour from '@/components/screens/OptionFour'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/option1',
      name: 'Option1',
      component: OptionOne
    },
    {
      path: '/option2',
      name: 'Option2',
      component: OptionTwo
    },
    {
      path: '/option3',
      name: 'Option3',
      component: OptionThree
    },
    {
      path: '/option4',
      name: 'Option4',
      component: OptionFour
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
