import { useFetch } from '@/logic/useFetch'

export function useCharacterDetails(uid: string) {
	const url = `${import.meta.env.VITE_APP_API_URL}/people/${uid}`
	const [data, { isFetching }] = useFetch(url)
	return { details: data, isFetching }
}
