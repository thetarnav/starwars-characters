import { useFetch } from '@/logic/useFetch'
import {
	CharacterDetailsResponse,
	PlanetDetails,
	PlanetResponse,
} from '@/types'

export function useCharacterDetails(uid: string) {
	const router = useRouter()
	const abortOperation = (reason: string) => {
		console.error(reason)
		router.push('/')
	}

	if (!uid || typeof uid !== 'string')
		abortOperation('Character UID was not provided')

	const url = `${import.meta.env.VITE_APP_API_URL}/people/${uid}`
	const [data, { onFetchError }] = useFetch<CharacterDetailsResponse>(url)
	const details = computed(() => data.value?.result?.properties)

	watch(data, data => {
		if (data?.message === 'not found')
			abortOperation('Character not found, probably an invalid UID: ' + uid)
	})
	onFetchError(() =>
		abortOperation('Character Details Request Failed, UID: ' + uid),
	)

	const [homeworldData, { onFetchError: onPlanetFetchError }] =
		useFetch<PlanetResponse>(
			computed(() => details.value?.homeworld),
			false,
		)
	onPlanetFetchError(() =>
		abortOperation(`Planet Details Request Failed; UID: ${uid}`),
	)

	return {
		details,
		homeworld: computed<PlanetDetails | undefined>(
			() => homeworldData.value?.result.properties,
		),
	}
}
