import { createWebHistory, createRouter } from 'vue-router'
import { routes } from '@/pages/index.js'

export const router = createRouter({
    history: createWebHistory('/er-telecom/'),
    routes
})
