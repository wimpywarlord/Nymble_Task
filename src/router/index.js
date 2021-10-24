import { createRouter, createWebHistory } from 'vue-router';


// WE ARE IMPORTING THE ROUTER
import About from '../views/About.vue'
import Home from "../views/Home.vue"

const routes = [
    {
        path: "/about",
        name: "About",
        // THIS IS THE VIEW WE WANT TO RENDER
        component: About
    },
    {
        path: "/",
        name: "Home",
        // THIS IS THE VIEW WE WANT TO RENDER
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;