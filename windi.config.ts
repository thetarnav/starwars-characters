import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
	darkMode: 'class',
	attributify: true,
	plugins: [typography()],
	theme: {
		extend: {
			colors: {
				blue: {
					1: '#337ab7',
					2: 'rgb(105, 166, 213)',
					3: 'rgb(141, 187, 223)',
				},
				yellow: '#FFE81F',
			},
		},
	},
})
