import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import components
import Home from './components/Home.vue'
import Review from './components/Review.vue'
import Admin from './components/Admin.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/review', component: Review },
  { path: '/admin', component: Admin }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init()