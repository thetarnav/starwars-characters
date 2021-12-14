import { useFetch } from '@/logic/useFetch'
import { CharactersResponse, CharacterItem } from '@/types'

const characters = ref<CharacterItem[]>([])
const reachedEnd = ref(false)
const page = ref(1)
const url = computed(
	() =>
		`${import.meta.env.VITE_APP_API_URL}/people/?page=${page.value}&limit=12`,
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
			characters.value.push(...data.results)
		}
	})

	const fetchNext = () => {
		console.log('NEXT')

		if (reachedEnd.value || isFetching.value) return
		page.value++
	}

	return { characters, isFetching, reachedEnd, fetchNext }
}
