import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg'


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
}
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;