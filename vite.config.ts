import path from 'path'
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
			imports: ['vue'],
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
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
	},
})
