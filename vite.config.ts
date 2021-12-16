import path from 'path'
import fetch from 'node-fetch'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
	resolve: {
		alias: {
			'@/': `${path.resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [
		vue(),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-imports.d.ts',
		}),
		Components({
			extensions: ['vue'],
			include: [/\.vue$/, /\.vue\?vue/],
			dts: 'src/components.d.ts',
		}),
		WindiCSS(),
	],
	server: {
		fs: {
			strict: true,
		},
	},
	ssgOptions: {
		script: 'async',
		includedRoutes: async () => {
			const res = await fetch(
				'https://www.swapi.tech/api/people/?page=1&limit=1',
			)
			const { total_records } = (await res.json()) as any
			const peopleRoutes = Array.from(
				{ length: total_records },
				(_, i) => `/${i + 1}`,
			)

			return ['/', ...peopleRoutes]
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
	},
})
