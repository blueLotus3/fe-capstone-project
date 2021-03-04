<template>
  <div id="app">
    <div id="nav">
    <router-link to="/">Header</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/reg">Registration</router-link>
    </div>
      <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>

</style>
