import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.scss'
import 'virtual:windi-utilities.css'

const app = createApp(App)
const router = createRouter({
	routes: [
		{ path: '/', component: () => import('./pages/list.vue') },
		{ path: '/:uid', component: () => import('./pages/details.vue') },
	],
	history: createWebHistory(),
})
app.use(router)
app.mount('#app')
