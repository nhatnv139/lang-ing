import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/index.vue'
import Layout from '@/layout/index.vue'
import Roadmap from '@/views/Roadmap/index.vue'
import About from '@/views/About/index.vue'
import Support from '@/views/Support/index.vue'
import WhitePapper from '@/views/WhitePapper/index.vue'
import TermService from "@/views/WhitePapper/TermService.vue";
import Privacy from "@/views/WhitePapper/Privacy.vue";
import PageNotFound from "@/views/Page-not-found/index.vue";
import Foundation from "@/views/Foundation/index.vue";
import PitchDeck from "@/views/Pitch-deck/index.vue";
import PageDownload from "@/views/Download/index.vue"
import Ecosystem from "@/views/Ecosystem/index.vue"
export const LIST_ROUTES = [
  {
    path: '/',
    name: 'home',
    title: 'HOME',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '',
        name: 'home',
        title: 'HOME',
        alias: '/home',
        component: HomeView
      }
    ]
  },
  {
    path: '/',
    name: 'download',
    title: 'DOWNLOAD',
    component: Layout,
    redirect: '/download',
    children: [
      {
        path: 'download',
        name: 'download',
        title: 'DOWNLOAD',
        component: PageDownload
      }
    ]
  },
  {
    path: '/',
    name: 'roadmap',
    title: 'ROADMAP',
    component: Layout,
    redirect: '/roadmap',
    children: [
      {
        path: 'roadmap',
        name: 'roadmap',
        title: 'ROADMAP',
        component: Roadmap
      }
    ]
  },
  {
    path: '/',
    name: 'ecosystem',
    title: 'ECOSYSTEM',
    component: Layout,
    redirect: '/ecosystem',
    children: [
      {
        path: 'ecosystem',
        name: 'ecosystem',
        title: 'ECOSYSTEM',
        component: Ecosystem
      }
    ]
  },
  {
    path: '/',
    name: 'about',
    title: 'ABOUT US',
    component: Layout,
    redirect: '/about',
    children: [
      {
        path: 'about',
        name: 'about',
        title: 'ABOUT US',
        component: About
      }
    ]
  },
  {
    path: '/',
    name: 'white-paper',
    title: 'WHITEPAPER',
    component: Layout,
    redirect: '/white-paper',
    children: [
      {
        path: 'white-paper',
        name: 'white-paper',
        title: 'WHITEPAPER',
        component: WhitePapper
      }
    ]
  },
  {
    path: '/',
    name: 'mobile-app',
    title: 'MOBILE APP',
    component: Layout,
    redirect: '/mobile-app',
    children: [
      {
        path: 'mobile-app',
        name: 'mobile-app',
        title: 'MOBILE APP',
        component: HomeView,
        type: 'Button'
      }
    ]
  },
  {
    path: '/',
    name: 'foundation',
    title: 'ATHENE FOUNDATION',
    component: Layout,
    redirect: '/foundation',
    children: [
      {
        path: 'foundation',
        name: 'foundation',
        title: 'ATHENE FOUNDATION',
        component: Foundation
      }
    ]
  },
  {
    path: '/',
    name: 'pitch-deck',
    title: 'PITCHDECK',
    component: Layout,
    redirect: '/pitch-deck',
    meta: {
      link: true,
    },
    children: [
      {
        path: 'pitch-deck',
        name: 'pitch-deck',
        title: 'PITCHDECK',
        component: PitchDeck,
      }
    ]
  },
  {
    path: '/',
    name: 'support',
    title: 'SUPPORT',
    component: Layout,
    redirect: '/support',
    children: [
      {
        path: 'support',
        name: 'support',
        title: 'SUPPORT',
        component: Support
      }
    ]
  },
  {
    path: '/',
    name: 'term-service',
    title: 'TERM OF SERVICE',
    redirect: '/term-of-service',
    component: Layout,
    hideMenu: true,
    children: [
      {
        path: 'term-of-service',
        name: 'term-service',
        title: 'TERM OF SERVICE',
        component: TermService,
        hideMenu: true
      }
    ]
  },
  {
    path: '/',
    name: 'privacy',
    title: 'Privacy Policy',
    redirect: '/privacy-policy',
    component: Layout,
    hideMenu: true,
    children: [
      {
        path: 'privacy-policy',
        name: 'privacy',
        hideMenu: true,
        title: 'Privacy Policy',
        component: Privacy
      }
    ]
  },
  {
    path: '/',
    name: 'path-not-found',
    title: 'PathNotFound',
    component: Layout,
    redirect: '/page-not-found',
    hideMenu: true,
    hideFooter: true,
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
        alias: 'page-not-found',
        hideMenu: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: LIST_ROUTES
})

router.beforeEach((to, from, next) => {
  if (to.name === 'pitch-deck') {
    if(window.innerWidth < 1025) {
      window.open('/PitchDeck.pdf')
      next(from)
    } else  next()
  }
  else next()
})

export default router
