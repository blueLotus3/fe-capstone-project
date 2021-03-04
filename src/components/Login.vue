<template>
<div className="reg">
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
      <button className="login-button">Login</button>
       
   </form>
</div>
</template>


<script>
    import axios from 'axios'


    export default {
    name: 'Login',
    data() {
        return {
            login: false,
            JWT: "",
            createUN: "",
            createPW: "",
            devURL: "http://localhost:3000",
            prodURL: null
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
        console.log(data)
      })
      
    }
  }
}

</script>

<style scoped>



</style>

