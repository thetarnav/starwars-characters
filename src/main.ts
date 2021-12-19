import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.scss'
import 'virtual:windi-utilities.css'

export const savedMainPageScrollPosition = ref(0)

const app = createApp(App)
const router = createRouter({
	routes: [
		{ name: 'List', path: '/', component: () => import('./pages/list.vue') },
		{
			name: 'Details',
			path: '/:uid',
			component: () => import('./pages/details.vue'),
		},
	],
	history: createWebHistory(),
	scrollBehavior(to, from, saved) {
		if (to.name === 'List') {
			return saved || { top: savedMainPageScrollPosition.value }
		} else {
			if (typeof from.name === 'undefined') return saved || { top: 0 }
			else return { top: 0 }
		}
	},
})
app.use(router)
app.use(createHead())
app.mount('#app')
