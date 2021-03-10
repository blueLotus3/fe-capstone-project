<template>
  <div id="app">
    
    <div id="nav">
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
#app {
  background-image:url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-scooter.png);
  background-repeat: no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  height: 93.7em;
}



</style>
