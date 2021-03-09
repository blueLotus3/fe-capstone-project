import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../views/Header.vue'
import Login from '../views/Login.vue'
import Reg from '../views/Reg'
import Routines from '../views/Routines'


Vue.use(VueRouter);

const routes = [
{
    path: "/",
    name: "Header",
    component: Header

},
{
    path: "/login",
    name: "Login",
    component: Login
},
{
    path: "/reg",
    name: "Reg",
    component: Reg
},
{
    path: "/routines",
    name: "Routines",
    component: Routines

},

]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;