<template>
  <div id="app">
    
    <div id="nav">
      <Slide :closeOnNavigation="true">
    <router-link to="/">Login</router-link>
    <router-link to="/reg">Registration</router-link>
    <router-link to="/routines">Routines</router-link>
    <router-link to="/moves">Moves</router-link>
      </Slide>
    </div>
    
      <router-view />
  </div>
</template>

<script>
import Routines from './views/Routines'
import { Slide } from 'vue-burger-menu'
import store from './components/store'


export default {
  name: 'App',
  components: {
    Routines,
    Slide,
    store,
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
  height: 200.7em;
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
