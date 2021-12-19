<script lang="ts" setup>
import mix from 'mix-color'
import { useCharacterDetails } from '@/modules/details'
import { objectPick } from '@vueuse/core'
import { fillNewObject } from '@/logic/utils'
import { useHead } from '@vueuse/head'

const { params } = useRoute()
const { details, homeworld } = useCharacterDetails(params.uid + '')

const planetColor = () =>
	homeworld.value && homeworld.value.surface_water !== 'unknown'
		? mix(
				'rgb(251, 146, 60)',
				'rgb(96, 165, 250)',
				Number(homeworld.value.surface_water) / 100,
		  )
		: 'rgb(251, 146, 60)'

const tableKays = [
	'birth_year',
	'gender',
	'height',
	'mass',
	'hair_color',
	'eye_color',
	'skin_color',
]

const tableContent = () =>
	details.value
		? objectPick(details.value, tableKays as any)
		: fillNewObject(...tableKays)

useHead({
	title: computed(() =>
		details.value
			? details.value.name + ' — Star Wars Characters'
			: 'Star Wars Characters',
	),
})
</script>

<template>
	<main
		class="
			px-8
			py-28
			md:px-16
			lg:px-24
			max-w-screen-md
			mx-auto
			overflow-hidden
		"
	>
		<Skeleton :when="!!details" class="w-full h-28">
			<h1 class="text-6xl sm:text-8xl font-bold break-words">
				{{ (details as any).name }}
			</h1>
		</Skeleton>
		<figure
			class="
				mt-32
				pb-8
				mb-12
				grid grid-cols-2
				items-end
				border-b border-yellow border-opacity-20
			"
		>
			<figcaption>
				<p class="uppercase font-bold mb-4 opacity-80">Home Planet</p>
				<Skeleton :when="!!homeworld" class="w-52 h-12">
					<h3 class="text-5xl font-bold">
						{{ (homeworld as any).name }}
					</h3>
				</Skeleton>
			</figcaption>
			<div
				v-if="homeworld"
				class="relative animate-fade-in animate-duration-500"
			>
				<div
					class="absolute -z-1 -top-48 w-64 h-64 rounded-full opacity-50"
					:style="{
						'background-color': planetColor(),
						transform: `scale(${
							Math.min(Number(homeworld.diameter), 20000) / 12000
						})`,
					}"
				></div>
			</div>
		</figure>
		<div class="py-16">
			<ListTable :data="tableContent()" />
		</div>
		<router-link to="/">Go back to the characters list</router-link>
	</main>
</template>
