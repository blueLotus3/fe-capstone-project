<template>
    <div className="routines">
        <h1>Hello, User</h1>
    <div className="exercises-data">
    <button v-on:click="toggleVisibility">Create Routine</button>
    <ul  >        
     <li className="exercises-list" v-for="exercise in exercises" 
     :key="exercise.name"  v-show="isVisible">{{exercise.name}} </li>
           
        </ul>    
    </div>
    <div className="savedRoutines"> 
        <Saved /><hr>
               
    </div>
    </div>

    
</template>




<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
import Login from './Login'
import Saved from './Saved'
import {v4 as uuidv4} from 'uuid'


Vue.use(VueAxios,Vuex,axios)
export default {
    name: 'Routines',
    components: {
        Saved
    },
    data() {
        return {
           exercises: [
    {
      name: 'skullcrushers',
      description: 'Lower barbell towards forehead'
    },
    {
      name: 'burpees',
      description: 'squat,jump, push into pushup position and right back up'
    },
    {
      name: 'squats',
      description: 'lower down as sitting on a invisable chair upright'
    },
    {
      name: 'shadowbox',
      description: 'pretend that youre boxing against someone'
    },
    {
      name: 'ab wheel',
      description: 'roll out front of body with wheel and tighten core with arms extending out'
    },
    {
      name: 'russian twist',
      description: "sit with bent knees and feet pressing to floor and twist side to side with spine straight"
    },
    {
      name: 'bicycle crunches',
      description: 'lie faceup with legs extended and arms along sides and draw knees toward elbows on opposite ends'
    },
    {
      name: 'mountain climbers',
      description: "It's super-efficient!"
    },
    {
      name: 'box jumps',
      description: "grab a box and jump on it."
    },
    {
      name: 'slam weights',
      description: 'helps your self esteem,maybe'
    },
    {
      name: 'yoga',
      description: 'ITS GOOD FOR YOU THEY SAY'
    },
    {
      name: 'sit throughs',
      description: 'something we do in jiu jitsu'
    },
    {
      name: 'front rolls',
      description: 'I swear these help'
    },
    {
      name: 'yeses',
      description: 'nod your head 100 times'
    },
    {
      name: 'noes',
      description: 'shake your head 100 times'
    },
    {
      name: 'the steve',
      description: 'hold a minute v-up and then a minute reverse plank'
    },
    {
      name: 'plank',
      description: 'dont be that guy who tells us to do it.'
    },
    {
      name: 'v-ups',
      description: 'fold your self like a v from laying on floor'
    },
    {
      name: 'pyramid kicks',
      description: 'kick pads in a pyramid fashion, build from 1 to 2 to 3 to ....10 then back down.'
    },
    {
      name: 'running',
      description: "use your legs"
    }
  ],
            isVisible: false,
            
        }
    },
    state: {
        selectedExercise: undefined
    },
    mounted() {
     
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
    
   
     }
}
</script>



<style scoped>


</style>