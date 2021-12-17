import { useFetch } from '@/logic/useFetch'
import { CharactersResponse, CharacterItem } from '@/types'
import { objectPick, useStorage } from '@vueuse/core'

const characters = useStorage<CharacterItem[]>('character-list', [])
const reachedEnd = useStorage('character-list-reached-end', false)
const page = useStorage('character-list-page', 1)
const url = computed(
	() => `https://www.swapi.tech/api/people/?page=${page.value}&limit=12`,
)

export function useCharacterList() {
	const [data, { isFetching, onFetchError, fetchData }] =
		useFetch<CharactersResponse>(url, false)

	if (!characters.value.length) fetchData()

	onFetchError(error => {
		console.error('PeopleResource Fetch ERROR:', error)
		reachedEnd.value = true
	})

	watch(data, data => {
		if (data) {
			if (!data.next) reachedEnd.value = true
			const list = data.results.map(i => objectPick(i, ['name', 'uid']))
			characters.value.push(...list)
		}
	})

	const fetchNext = () => {
		if (reachedEnd.value || isFetching.value) return
		if (page.value) page.value++
	}

	return { characters, isFetching, reachedEnd, fetchNext }
}
