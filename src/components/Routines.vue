<template>
    <div className="routines">
        <h1>Hello, User</h1>
    <div className="exercises-data">
        <h3>{{exercises}}</h3>
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
            exercises: []
        }
    },
    mounted() {
        const {SECRET_ENV} = process.env
        axios.get(`https://wger.de/api/v2/exercise/`)
        .then(res => {this.exercises = res.data}
            )
    }


}
</script>



<style scoped>

</style>
