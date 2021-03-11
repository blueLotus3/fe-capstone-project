import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    
state: {
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
    ExerciseList: [],
},
getters: {
    moves: (state) => state.moves,
    ExerciseList: (state) => state.ExerciseList
},
mutations:{
    ADD_Move(state, id) {
        state.ExerciseList.push(id)
    },
    REMOVE_Move(state, index) {
        state.ExerciseList.splice(index, 1)
    }
},
actions: {
    addMove(context, id) {
        context.commit("ADD_Move", id)
    },
    removeMove(context, index) {
        context.commit("REMOVE_Move", index)
    }
},
modules: {},
})