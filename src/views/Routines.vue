<template>
    <div className="routines">
        <h1>Hello, User</h1>
    <div className="exercises-data">
        <ul>
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
    </div>
    
</template>




<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from './Login'

Vue.use(VueAxios, axios)
export default {
    name: 'Routines',
    data() {
        return {
            exercises: []
        }
    },
    mounted() {
        const {SECRET_ENV} = process.env
        axios.get(`https://wger.de/api/v2/exercise/`)
        .then(res => {this.exercises = res.data}    
        ).catch(error => console.log(error))
    }  


}
</script>



<style scoped>

</style>
