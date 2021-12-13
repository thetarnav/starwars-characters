import { Character, People } from '@/types'
import { Ref } from 'vue'
import { useFetch } from '@vueuse/core'

const apiURL = 'https://swapi.dev/api/'

export const usePeopleResource = (): {
	characters: Ref<Character[]>
	isFetching: Ref<boolean>
	reachedEnd: Ref<boolean>
	nextPage: () => void
} => {
	const characters = ref<Character[]>([])
	const reachedEnd = ref(false)
	const page = ref(1)
	const url = computed(() => `${apiURL}/people/?page=${page.value}`)

	const { data, isFetching, onFetchError } = useFetch(url, {
		refetch: true,
	})
		.get()
		.json<People>()

	onFetchError(error => {
		console.error('PeopleResource Fetch ERROR:', error)
		reachedEnd.value = true
	})

	watch(data, data => {
		if (data) {
			if (!data.next) reachedEnd.value = true
			characters.value.push(...data.results)
			console.log(data)
		}
	})

	const nextPage = () => {
		if (reachedEnd.value || isFetching.value) return
		page.value++
	}

	return { characters, isFetching, reachedEnd, nextPage }
}
