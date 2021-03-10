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
      
      <button  type="handleSubmit">Login</button> 
     
        </form>
    </div>
    <div className="login" v-if="loggedin">
      
       
</div>
</div>

</template>


<script>
import Routines from './Routines'

export default {
    name: 'Login',
    data() {
        return {
            loggedin: false,
            JWT: "",
            createUN: "",
            createPW: "",
            devURL: "https://fitness-tracker-tl.herokuapp.com/",
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
        localStorage.setItem('jwt', data.token)
       
      })

      
      
    }
  }
}

</script>

<style scoped>
button{
    color:white;
    font-size: 16px;
    border: 0.3em solid;
    border-radius: 2em;
    width: 12em;
    height: 3em;       
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 3em;
    position: relative;  
    transition: 0.5s;
    margin: 1em;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cyan;
}


button:hover {
    color: black;
    
    }


</style>

