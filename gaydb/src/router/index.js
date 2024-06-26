import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayView from '../views/PlayView.vue'
import AboutView from '../views/AboutView.vue'
import GrafView from '../views/GrafView.vue'
import PrihlaseniView from '../views/PrihlaseniView.vue'
import RegistraceView from '../views/RegistraceView.vue'
import UcetView from '../views/UcetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/play',
      name: 'play',
      component: PlayView,
      meta: {
        title: ''
      }
    },
    {
      path: '/graf',
      name: 'graf',
      component: GrafView,
      meta: {
        title: 'graf'
      }
    },
    {
      path: '/prihlaseni',
      name: 'prihlaseni',
      component: PrihlaseniView,
      meta: {
        title: 'Přihlásit se'
      }
    },
    {
      path: '/registrace',
      name: 'registrace',
      component: RegistraceView,
      meta: {
        title: 'Registrovat se'
      }
    },
    {
      path: '/ucet',
      name: 'ucet',
      component: UcetView,
      meta: {
        title: 'Me, myself and I'
      }
    },
    {
    path: '/',
      name: 'home',
      component: AboutView,
      meta: {
        title: 'Me, myself and I'
      } 
    }
  ]
})



export default router
