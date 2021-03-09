import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'


Vue.config.productionTip = false

new Vue({
  router,
  Vuex,

  render: function (h) { return h(App) },

}).$mount('#app')
