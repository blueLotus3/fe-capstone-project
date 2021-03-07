<template>
<div className="nologin" v-if="!loggedin">
<div className="login">
   <form @submit.prevent="handleSubmit">
       <input
        className="login-input"
        type="text"
        name="username"
        placeholder="username"
        v-model="createUN"
        />
       <input
       className="login-input"
       type="text"
       name="password"
       placeholder="password"
       v-model="createPW"  
       />
      <button type="handleSubmit">Login</button>
       
        </form>
    </div>
    <div className="login" v-if="loggedin">
        <router-link to="/routines">Routines</router-link>
       
</div>
</div>

</template>


<script>
    export default {
    name: 'Login',
    data() {
        return {
            loggedin: false,
            JWT: "",
            createUN: "",
            createPW: "",
            devURL: "http://localhost:3000",
            prodURL: null,
            user: null,
            token: null
        }
    },
    methods: {
   handleSubmit: function(event) {
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
        this.user = data.user
        this.token = data.token
        this.loggedin = true
      })

      
      
    }
  }
}

</script>

<style scoped>



</style>

