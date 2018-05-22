import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Zum from '@/components/company_zum'
import Samsung from '@/components/company_samsung'

import Amore from '@/components/company_amore'
import Kakao from '@/components/company_kakao'
import Est from '@/components/company_est'
import Lg from '@/components/company_lg'
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
      path: '/company_amore',
      name: 'amore',
      component: Amore
    },
    {
      path: '/company_kakao',
      name: 'kakao',
      component: Kakao
    },
    {
      path: '/company_est',
      name: 'est',
      component: Est
    },
    {
      path: '/company_lg',
      name: 'lg',
      component: Lg
    },
    {
      path: '/works/sentimentanalysis',
      name: 'sentimentanalysis',
      component: SentimentAnalysis
    }

  ]
})
