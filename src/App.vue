<template>
  <div id="app">
    
    <div id="nav">
      <Reveal closeOnNavigation=true>
    <router-link to="/login">Login</router-link>
    <router-link to="/reg">Registration</router-link>
    <router-link to="/routines">Routines</router-link>
      </Reveal>
    </div>
    
      <router-view />
  </div>
</template>

<script>
import Routines from './views/Routines'
import { Reveal } from 'vue-burger-menu'



export default {
  name: 'App',
  components: {
    Routines,
    Reveal,
    },


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
#app {
  background-image:url(https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-scooter.png);
  background-repeat: no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  height: 93.7em;
  padding: 5em;
}
  .bm-menu {
      height: 100%; 
      width: 0; 
      position: fixed; 
      z-index: 1000; 
      top: 0;
      left: 0;
      background-color:cyan; 
      overflow-x: hidden; 
      padding-top: 16em; 
      transition: 0.5s; 
    }
    .bm-item-list {
      color:black;
      font-size: 1.5em;
    }




</style>
