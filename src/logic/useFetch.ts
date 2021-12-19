import { get, MaybeRef } from '@vueuse/core'
import { Ref } from 'vue'

export function useFetch<T>(
	url: MaybeRef<string | undefined>,
	immediate: boolean = true,
): [
	Ref<T | null>,
	{
		isFetching: Ref<boolean>
		onFetchError: (handler: (error: unknown) => void) => void
		fetchData: () => void
	},
] {
	let onFetchError: (error: unknown) => void = () => {}
	const data = ref(null) as Ref<T | null>
	const isFetching = ref(false)
	const fetchData = async () => {
		const _url = get(url)
		if (isFetching.value || !_url) return
		isFetching.value = true

		try {
			const res = await fetch(_url)
			let _data = await res.json()
			isFetching.value = false
			data.value = _data
		} catch (error) {
			isFetching.value = false
			onFetchError(error)
		}
	}
	watch(() => get(url), fetchData)
	if (immediate) fetchData()
	return [
		data,
		{ isFetching, onFetchError: fn => (onFetchError = fn), fetchData },
	]
}
