<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Header</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/reg">Registration</router-link>
    <router-link to="/routines">Routines</router-link>
    </div>
      <router-view />
  </div>
</template>

<script>
import Routines from './views/Routines'



export default {
  name: 'App',
  components: {
    Routines,
    
  },
  

}
</script>

<style>
form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
}

</style>
