import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface People {
	count: number
	next: string | null
	previous: string | null
	results: Character[]
}

export interface Character {
	name: string
	height: string
	mass: string
	hair_color: string
	skin_color: string
	eye_color: string
	birth_year: string
	gender: Gender
	homeworld: string
	films: string[]
	species: string[]
	vehicles: string[]
	starships: string[]
	created: string
	edited: string
	url: string
}

export enum Gender {
	Female = 'female',
	Male = 'male',
	NA = 'n/a',
}
