import Vue from 'vue'
import VueRouter from 'vue-router'
import strings from './strings'
import store from './store'

import Home from 'pages/Home/Home.vue'
import Dog from 'pages/Dog/Dog.vue'
import Poop from 'pages/Poop/Poop.vue'
import Santa from 'pages/Santa/Santa.vue'
import Turtle from 'pages/Turtle/Turtle.vue'

Vue.use(VueRouter)

const { homeTitle, dogTitle, poopTitle, santaTitle, turtleTitle } = strings

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: { breadcrumbTitle: homeTitle }
    },
    {
      path: '/dog',
      component: Dog,
      meta: { backgroundClass: 'bg-dog', breadcrumbTitle: dogTitle }
    },
    {
      path: '/poop',
      component: Poop,
      meta: { backgroundClass: 'bg-poop', breadcrumbTitle: poopTitle }
    },
    {
      path: '/santa',
      component: Santa,
      meta: { backgroundClass: 'bg-santa', breadcrumbTitle: santaTitle }
    },
    {
      path: '/turtle',
      component: Turtle,
      meta: { backgroundClass: 'bg-turtle', breadcrumbTitle: turtleTitle }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { backgroundClass: backgroundClassFrom = '' } = from.meta
  const { backgroundClass: backgroundClassTo = '', breadcrumbTitle } = to.meta

  // Handle class changes on `body`
  if (backgroundClassFrom) {
    document.body.classList.remove(backgroundClassFrom)
  }
  if (backgroundClassTo) {
    document.body.classList.add(backgroundClassTo)
  }

  // Handle store mutation for breadcrumb
  if (breadcrumbTitle) {
    store.commit('updateActiveBreadcrumb', breadcrumbTitle)
  }

  next()
})

export default router
