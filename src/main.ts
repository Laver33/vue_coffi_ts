import { createApp } from 'vue';
import App from './App.vue';


import {createMemoryHistory, createRouter} from 'vue-router';

// Components
import Home from './pages/Home.vue';

const routes = [
    { path: '/', component: Home }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

let app = createApp(App)
app.use(router);
app.mount('#app')