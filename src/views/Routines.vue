<template>
    <div className="routines">
        <h1>Hello, User</h1>
    <div className="exercises-data">
    <button className="routine-button" v-on:click="toggleVisibility">Create Routine</button>
    <ul className="exercises-list" v-show="isVisible">        
        <li>{{exercises.results[0].name}}</li>    
        <li>{{exercises.results[1].name}}</li>
        <li>{{exercises.results[2].name}}</li>
        <li>{{exercises.results[3].name}}</li>
        <li>{{exercises.results[4].name}}</li>
        <li>{{exercises.results[5].name}}</li>
        <li>{{exercises.results[6].name}}</li>
        <li>{{exercises.results[7].name}}</li>
        <li>{{exercises.results[8].name}}</li>
        <li>{{exercises.results[9].name}}</li>
        <li>{{exercises.results[10].name}}</li>
        <li>{{exercises.results[11].name}}</li>
        <li>{{exercises.results[12].name}}</li>
        <li>{{exercises.results[13].name}}</li>
        <li>{{exercises.results[14].name}}</li>
        <li>{{exercises.results[15].name}}</li>
        <li>{{exercises.results[16].name}}</li>
        <li>{{exercises.results[17].name}}</li>
        <li>{{exercises.results[18].name}}</li>
        <li>{{exercises.results[19].name}}</li>
           
        </ul>    
    </div>
    <div className="savedRoutines"> 
        <h3>this is saved routines</h3><hr>
               
    </div>
    </div>

    
</template>




<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import Login from './Login'


Vue.use(VueAxios,Vuex,axios)
export default {
    name: 'Routines',
    data() {
        return {
            exercises: {},
            isVisible: false,
            
        }
    },
    mounted() {
        const {SECRET_ENV} = process.env
        axios.get(`https://wger.de/api/v2/exercise/`)
        .then(res => {this.exercises = res.data}    
        ).catch(error => console.log(error))
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible
        },
        mutations: {},
        actions: {},
        getters: {
            
        }
   
     }
}
</script>



<style scoped>
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