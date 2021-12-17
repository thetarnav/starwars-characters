import { mount } from '@vue/test-utils'
import { until } from '@vueuse/core'
import flushPromises from 'flush-promises'
import { computed, watch } from 'vue'

import { useCharacterList } from '../src/modules/characters'

describe('Example suite', () => {
	test('my first test', async () => {
		const { characters, isFetching, reachedEnd, fetchNext } =
			useCharacterList()

		expect(characters.value).toBeInstanceOf(Array)
		expect(reachedEnd.value).toBe(false)

		jest.setTimeout(3000)

		watch(
			characters,
			() => {
				console.log(characters.value)
			},
			{ deep: true },
		)

		await until(computed(() => characters.value.length)).toBeTruthy()

		console.log(characters.value)
	})
})
