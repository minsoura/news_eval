import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Zum from '@/components/company_zum'
import Samsung from '@/components/company_samsung'
import SentimentAnalysis from '@/components/works/SentimentAnalysis'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/company_zum',
      name: 'zum',
      component: Zum
    },
    {
      path: '/company_samsung',
      name: 'samsung',
      component: Samsung
    },
    {
      path: '/works/sentimentanalysis',
      name: 'sentimentanalysis',
      component: SentimentAnalysis
    }

  ]
})
