<template>
    <div className="reg">
    <form>
       <input
        className="reg-input"
        type="text"
        name="username"
        placeholder="username"
        />
       <input
       className="reg-input"
       type="text"
       name="password"
       placeholder="password"  
       />
        <input
       className="reg-input"
       type="text"
       name="password"
       placeholder="confirm password"  
       />
       <button className="reg-button">Register</button>
       
   </form>
    
    </div>
</template>


<script>
export default {
   data() {
       return{
           regInfo: {
               username: "",
               password: "",
               password_confirmation: "",
               registrationErrors: ""
           }
       }
   } 
}
</script>

<style scoped>

</style>
