import { creteRouter, createWebHistory } from 'vue-router';


// WE ARE IMPORTING THE ROUTER
import About from '../views/About'

const routes = [
    {
        path: "/about",
        name: "About",
        // THIS IS THE COMPONENT WE WANT TO RENDER
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;