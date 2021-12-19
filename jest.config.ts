import { Config } from '@jest/types'

const config: Config.InitialOptions = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		// "^@components(.*)$": "<rootDir>/src/components$1",
	},
}
export default config
