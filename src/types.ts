import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

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

// export interface People {
// 	count: number
// 	next: string | null
// 	previous: string | null
// 	results: Character[]
// }

// export interface Character {
// 	name: string
// 	height: string
// 	mass: string
// 	hair_color: string
// 	skin_color: string
// 	eye_color: string
// 	birth_year: string
// 	gender: Gender
// 	homeworld: string
// 	films: string[]
// 	species: string[]
// 	vehicles: string[]
// 	starships: string[]
// 	created: string
// 	edited: string
// 	url: string
// }

// export enum Gender {
// 	Female = 'female',
// 	Male = 'male',
// 	NA = 'n/a',
// }
