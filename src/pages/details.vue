<script lang="ts" setup>
import pick from 'just-pick'
import mix from 'mix-color'
import { useCharacterDetails } from '@/modules/details'

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

const tableContent = computed(() =>
	details.value
		? pick(
				details.value,
				'birth_year',
				'gender',
				'height',
				'mass',
				'hair_color',
				'eye_color',
				'skin_color',
		  )
		: {},
)
</script>

<template>
	<div class="fixed top-2 left-2">
		<router-link to="/"> GO BACK </router-link>
	</div>
	<main
		v-if="details"
		class="px-8 py-28 md:px-16 lg:px-24 max-w-screen-md mx-auto overflow-hidden"
	>
		<h1 class="text-6xl sm:text-8xl font-bold break-words">
			{{ details.name }}
		</h1>
		<figure
			v-if="homeworld"
			class="mt-32 pb-8 mb-12 grid grid-cols-2 items-end border-b border-yellow border-opacity-20"
		>
			<figcaption>
				<p class="uppercase font-bold mb-4 opacity-80">Home Planet</p>
				<h3 class="text-5xl font-bold">{{ homeworld.name }}</h3>
			</figcaption>
			<div class="relative">
				<div
					class="absolute -top-48 w-64 h-64 rounded-full opacity-50"
					:style="{
						'background-color': planetColor(),
						transform: `scale(${Number(homeworld.diameter) / 12000})`,
					}"
				></div>
			</div>
		</figure>
		<div class="py-16">
			<ListTable :data="tableContent" />
		</div>
		<router-link to="/">Go back to the characters list</router-link>
	</main>
</template>
