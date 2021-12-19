export interface CharactersResponse {
	message: string
	total_records: number
	total_pages: number
	previous: null
	next: string
	results: CharacterItem[]
}

export interface CharacterItem {
	uid: string
	name: string
}

export interface CharacterDetailsResponse {
	message: string
	result: {
		properties: CharacterDetails
		uid: string
	}
}

export type CharacterDetails = {
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: string
	name: string
	homeworld: string
	url: string
}

export interface PlanetResponse {
	message: string
	result: {
		properties: PlanetDetails
	}
}

export interface PlanetDetails {
	diameter: string
	surface_water: string
	name: string
}
