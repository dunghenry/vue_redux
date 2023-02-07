import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../pages/About.vue'),
    },

    // {
    //     path: '/:catchAll(.*)',
    //     redirect: '/login',
    // },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue'),
    },
];
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;
