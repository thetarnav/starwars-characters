import { useFetch } from '@/logic/useFetch'
import {
	CharacterDetailsResponse,
	PlanetDetails,
	PlanetResponse,
} from '@/types'

export function useCharacterDetails(uid: string) {
	const url = `${import.meta.env.VITE_APP_API_URL}/people/${uid}`
	const [data, { isFetching }] = useFetch<CharacterDetailsResponse>(url)
	const details = computed(() => data.value?.result.properties)

	const [homeworldData] = useFetch<PlanetResponse>(
		computed(() => details.value?.homeworld),
		false,
	)

	return {
		details,
		homeworld: computed<PlanetDetails | undefined>(
			() => homeworldData.value?.result.properties,
		),
		isFetching,
	}
}
