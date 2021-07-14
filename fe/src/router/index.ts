import { createRouter, createWebHistory } from 'vue-router'
import User from '@/pages/User.vue'
import Login from '@/pages/Login.vue'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        name: 'login',
        path: '/login',
        alias: '/login.html',
        component: Login,
        meta: { status: 0 },
    },
    {
        path: '/register',
        name: 'register',
        component: Login,
        meta: { status: 1 },
    },
    {
        path: '/user',
        name: 'user',
        component: User,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router
