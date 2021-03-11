<template>
    <header className="moves">
        <div className="moves">
         <ul >
             <li>{{name}}</li>
         </ul>
        </div>
    </header>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../components/store'
Vue.use(Vuex)
export default {
    name:"moves",
    props: ["id","name"],
    components: {
        store
    },
    data() {
        return {
            moves: []
        }
    },
    methods: {
        addToList(id) {
            this.$store.dispatch("addToList", id)
        }
    }
}
</script>

<style scoped>


</style>