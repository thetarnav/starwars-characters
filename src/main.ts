import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.scss'
import 'virtual:windi-utilities.css'

export const createApp = ViteSSG(
	App,
	{
		routes: [
			{ path: '/', component: () => import('./pages/list.vue') },
			{ path: '/:uid', component: () => import('./pages/details.vue') },
		],
	},
	ctx => {
		Object.values(import.meta.globEager('./modules/*.ts')).map(i =>
			i.install?.(ctx),
		)
	},
)
