import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg'
import Routines from '../components/Routines'


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