import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Profile from '../pages/Profile.vue';
import About from '../pages/About.vue';
import Menu from '../pages/Menu.vue';
import Contact from '../pages/Contact.vue';
import Orders from '../pages/Orders.vue';
import Settings from '../pages/Settings.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/about', component: About },
    { path: '/menu', component: Menu },
    { path: '/contact', component: Contact },
    { path: '/orders', component: Orders },
    { path: '/settings', component: Settings },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;