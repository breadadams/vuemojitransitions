import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeBreadcrumb: ''
  },
  mutations: {
    updateActiveBreadcrumb (state, breadcrumb) {
      if (state.activeBreadcrumb !== breadcrumb) {
        state.activeBreadcrumb = breadcrumb
      }
    }
  }
})

export default store
