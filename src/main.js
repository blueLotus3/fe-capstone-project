import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  data: {
    loggedin: false,
    JWT: "",
    createUN: "",
    createPW: "",
    devURL: "https://fitness-tracker-tl.herokuapp.com/sessions",
    prodURL: null
  },
  methods: {
    handleLogin: function() {
      const URL = this.prodURL ? this.prodURL : this.devURL
      const user = {username: this.createUN, password: this.createPW}
      fetch(`${URL/login}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    }
  }
}).$mount('#app')
