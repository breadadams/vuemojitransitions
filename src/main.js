import Vue from 'vue'
import vOutsideEvents from 'vue-outside-events'
import router from './router'
import store from './store'
import App from './App'

import '@/assets/scss/app.scss'

import SideGlowLink from '@/components/SideGlowLink/SideGlowLink'
import HugeEmoji from '@/components/HugeEmoji/HugeEmoji'

Vue.use(vOutsideEvents)

Vue.component('side-glow-link', SideGlowLink)
Vue.component('huge-emoji', HugeEmoji)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: `<App />`
})