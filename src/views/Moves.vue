<template>
    <header className="moves">
        <div className="moves">
            <button className="routine-button" v-on:click="toggleVisibility">More Routines</button>
         <ul v-show="isVisible">
             <li v-for="(move) in moves" v-bind:key="move.name">
                 <p>{{move.name}}</p>
             </li>
         </ul>
        </div>
    </header>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../components/store'
import {mapState} from 'vuex'
Vue.use(Vuex)
export default {
data: () => {
    return {
    moves: [
        {
            id: 1,
            name: "SkullCrushers"
        },
        {
            id: 2,
            name: "ShadowBox"
        },
        {
            id: 3,
            name: "Box Jumps"
        },
        {
            id: 4,
            name: "Burpees"
        },
        {
            id: 5,
            name: "Bench Press"
        },
        {
            id: 6,
            name: "Arnold Press"
        },
        {
            id: 7,
            name: "Two Arm Kettle Press"
        },
        {
            id: 8,
            name: "Reverse Lunges"
        },
        {
            id: 9,
            name: "Pyramid Kicks"
        },
        {
            id: 10,
            name: "Squats"
        },
        {
            id: 11,
            name: "Yoga"
        },
        {
            id: 12,
            name: "Pull Ups"
        },
        {
            id: 13,
            name: "Speed Bag"
        },
        {
            id: 14,
            name: "Leg Press"
        },
        {
            id: 15,
            name: "Turkish Get-ups"
        },
        {
            id: 16,
            name: "Bear Crawls"
        },
        {
            id: 17,
            name: "Sit-Throughs"
        },
        {
            id: 18,
            name: "Knee Reaps"
        },
        {
            id: 19,
            name: "Burnouts"
        },
        {
            id: 20,
            name: "Cleans"
        },
    ],
    isVisible: false,
    } 
    },
    
    methods: {
         toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        addToList(id) {
            this.$store.dispatch("addToList", id)
        },
        setMoves(state,moves) {
            state.moves = moves
        }
    }
}
</script>

<style scoped>
moves {
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}


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
    margin-left:3.3em;
}


button:hover {
    color: black;
    
    }

h1 {
    text-align: center;
}
ul {
    margin-right: 2em;
    list-style-type: none;
}
li {
  display: block;
  border: .1em solid white;
  padding-left: 2em;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  animation: fadeIn 0.5s linear;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    top: 6.25em;
  }
  75% {
    opacity: 0.5;
    top: 0em;
  }
  100% {
    opacity: 1;
  }
}
@media screen and (min-width: 1024px) {
    routines {
    display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}


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
    margin-left:3.3em;
}


button:hover {
    color: black;
    
    }

h1 {
    text-align: center;
}
ul {
    margin-right: 2em;
    list-style-type: none;
}
li {
  display: block;
  border: .1em solid white;
  padding-left: 2em;
  padding: 1em;
  text-align: center;
  text-transform: uppercase;
  animation: fadeIn 0.5s linear;
  animation-fill-mode: both;
}
}

</style>