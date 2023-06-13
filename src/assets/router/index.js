import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'About',
        component: () =>
        import("../views/About.vue"),
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () =>
        import("../views/Resume.vue"),
    }
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ top: 0 })
            }, 1000)
        })
    },
    routes
})

export default router