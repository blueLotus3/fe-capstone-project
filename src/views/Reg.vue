<template>
<div className="reg">
   <form @submit.prevent="handleSubmit">
       <input
        className="login-input"
        type="text"
        name="username"
        placeholder="username"
        v-model="username"
        />
       <input
       className="login-input"
       type="text"
       name="password"
       placeholder="password"
       model="password"  
       />
        <input
       className="login-input"
       type="text"
       name="confirm-password"
       placeholder="confirm password"
       model="confirm_password"  
       />
     <button className="login-button">Register</button>
       
   </form>
</div>
</template>


<script>
    import axios from 'axios'


    export default {
    name: 'Register',
    data() {
        return {
            username: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
    handleSubmit(e){
        const data = {
            username: this.username,
            password: this.password,
            password_confirm: this.password_confirm
        }
       
        axios.post('http://localhost:3000/login', data)
        .then(
            res => {
                console.log(res)
            }

        ).catch(
            err => {
                console.log(err)
            }
        )        
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
