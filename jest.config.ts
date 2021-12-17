import { Config } from '@jest/types'

const config: Config.InitialOptions = {
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.vue$': 'vue-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		// "^@components(.*)$": "<rootDir>/src/components$1",
	},
}
export default config
