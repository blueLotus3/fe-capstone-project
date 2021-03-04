import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
  data: {
    login: false,
    JWT: "",
    createUN: "",
    createPW: "",
    devURL: "http://localhost:3000",
    prodURL: null
  },
  methods: {
    handleLogin: function(event) {
      event.preventDefault()
      const URL = this.prodURL ? this.prodURL : this.devURL
      console.log(URL)
      const user = {username: this.createUN, password: this.createPW}
      console.log(user)
        fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      
    }
  }
}).$mount('#app')
