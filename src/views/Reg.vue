<template>
<div className="reg">
  <p>Please<br>Register</p>

<div className="signup-form">
   <form @submit.prevent="handleSignup">
     
       <input
        className="sign-up"
        type="text"
        name="username"
        placeholder="username"
        v-model="createUN"
        />
       <input
       className="sign-up"
       type="text"
       name="password"
       placeholder="password"
       v-model="createPW"  
       />
      
      <button type="handleSignup">Signup</button> 
          </form>
    </div>
 
</div>
</template>


<script>


export default {
    name: 'Reg',
    data() {
      //credit to alex merced and his youtube videos on vue authentication.
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

      handleSignup: function(){
          const URL = this.prodURL ? this.prodURL : this.devURL
          const user = JSON.stringify ({username: this.createUN, password: this.createPW})

          fetch(`${URL}/users`, {
              method: "post",
              header: {
                  "Content-Type": "application/json"
              },
              body: user,
          })
          .then((response) => response.json())
          .then(data => {
                 if (data.error){
              alert('error logging in')
          }else {
        this.user = data.user
        this.token = data.token
        this.loginUN= ""
        this.loginPW= ""
        this.loggedin = true
        this.createPW= ""
        this.createUN = ""
        localStorage.setItem('JWT', data.token)
          }
           
          })
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
	padding: 1.2em .9em;
	margin: .5em 0;
	width: 12.5em;
}
p {

  font-size: 3em;
 
}
</style>

