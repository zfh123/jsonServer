

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Card from '../components/Card'
import Licai from '../components/Licai'
import My from '../components/My'

Vue.use(VueRouter)

export default new VueRouter({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/licai',
      name: 'Licai',
      component: Licai
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})
