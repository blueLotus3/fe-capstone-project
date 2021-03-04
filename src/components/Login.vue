<template>
<div className="login">
   <form>
       <input
        className="login-input"
        type="text"
        name="username"
        placeholder="username"
        
        />
       <input
       className="login-input"
       type="text"
       name="password"
       placeholder="password"  
       />
       <button v-on:click= "handleLogin" className="login-button">Login</button>
       
   </form>
</div>
</template>


<script>
export default {
    data() {
        return {
            login: {
                username: "",
                password: "",
            }
        }
    },
}
</script>

<style scoped>



</style>
