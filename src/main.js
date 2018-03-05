// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vOutsideEvents from 'vue-outside-events'
import router from './router'
import store from './store'
import App from './App.vue'
import 'assets/scss/app.scss'

Vue.use(vOutsideEvents)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: `<App />`
})
