import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

export const createApp = ViteSSG(
	App,
	{
		routes: [
			{ path: '/', component: () => import('./pages/list.vue') },
			{ path: '/about', component: () => import('./pages/details.vue') },
		],
	},
	ctx => {
		Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
			i.install?.(ctx),
		)
	},
)
