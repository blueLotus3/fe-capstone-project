<template>
    <div className="routines">
        <h1>Hello, User</h1>
    <div className="exercises-data">
        <ul>
        <li>{{exercises.results}}</li>
        </ul>
    </div>
    </div>
    
</template>




<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
export default {
    name: 'Routines',
    data() {
        return {
            exercises: [
                {
                    name: ''
                }
            ]
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
