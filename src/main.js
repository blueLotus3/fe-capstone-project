import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Login from './views/Login'

Vue.config.productionTip = false

new Vue({
  router,
  Vuex,
  Login,
  render: function (h) { return h(App) },

}).$mount('#app')
