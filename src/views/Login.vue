<template>
<div className="title">
  <p>Fitness<br>Guardian</p>
<div className="nologin" v-if="!loggedin">
<div className="login-form">
   <form @submit.prevent="handleSubmit">
     
       <input
        className="login-input"
        type="text"
        name="username"
        placeholder="username"
        v-model="loginUN"
        />
       <input
       className="login-input"
       type="text"
       name="password"
       placeholder="password"
       v-model="loginPW"  
       />
      
      <button type="handleSubmit">Login</button> 
          </form>
    </div>
  </div>
    <div className="login" v-if="loggedin" to="/routines">
    <h3>Welcome, {{user.username}}</h3>
       <button className="logout" v-on:click="handleLogout">Logout</button>

</div>
</div>
</template>


<script>


export default {
    name: 'Login',
    data() {
      //credit to alex merced and his youtube videos on vue authentication.
        return {
            loggedin: false,
            JWT: "",
            createUN: "",
            createPW: "",
            loginUN: "",
            loginPW: "",
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
      const user = {username: this.loginUN, password: this.loginPW}
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
        this.loginPW= ""
        this.loginUN = ""
        localStorage.setItem('JWT', data.token)
       
      })
      },
      handleLogout: function(){
        this.loggedin=false
        this.user=null
        this.token=null
      }
  }
}

</script>

<style scoped>
button{
    color:white;
    font-size: 1em;
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
h3{
  text-align: center;
  text-transform: capitalize;
  font-size: 2rem;
  text-align: center;
  color: #c6e2ff;
  animation: neon .08s ease-in-out infinite alternate;
}
form {
 	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 3.2em;
	height: 100%;
	text-align: center;
}
input {
	border: none;
  border-radius: 1em;
	padding: 1.5em .9em;
	margin: .5em 0;
	width: 12.5em;
}
p {

  font-size: 3em;
 
}
@media screen and (min-width: 1024px) {
  button{
    color:white;
    font-size: 1em;
    border: 0.3em solid;
    border-radius: 2em;
    width: 20em;
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
form {
 	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 3.2em;
	height: 100%;
	text-align: center;
}
input {
	border: none;
  border-radius: 2em;
	padding: 1.2em .9em;
	margin: .5em 0;
	width: 24em;
}
p {

  font-size: 3em;
 
}

h3{
  text-align: center;
  text-transform: capitalize;
      font-size: 5.6rem;
    text-align: center;
    line-height: 1;
    color: #c6e2ff;
    animation: neon .08s ease-in-out infinite alternate;
}
}



</style>

