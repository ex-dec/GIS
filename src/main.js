import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Maps from './views/Maps.vue'
import App from './App.vue'
import '@/styles/index.css'
import '@/styles/app.css'
import 'leaflet/dist/leaflet.css'

const routes = [
    { 
        path: "/", 
        name: 'home',
        component: Home
    },
    { 
        path: "/maps", 
        name: 'maps',
        component: Maps 
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')