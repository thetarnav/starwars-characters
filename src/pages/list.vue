<script lang="ts" setup>
import { usePeopleResource } from '../logic/api'
import CharacterItem from '../components/CharacterItem.vue'
import { isClient, useWindowScroll } from '@vueuse/core'

const { characters, isFetching, nextPage } = usePeopleResource()

const { y: scrollY } = useWindowScroll()

watch(scrollY, y => {
	if (!isClient) return
	if (scrollY.value + window.innerHeight + 100 >= document.body.offsetHeight)
		nextPage()
})
</script>

<template>
	<div>list</div>
	<div>{{ isFetching ? 'fetching' : 'not fetching' }}</div>
	<button @click="nextPage" class="bg-gray-800 p-2 rounded-lg">Fetch more</button>
	<div v-if="characters.length">
		<h4>Results:</h4>
		<ol class="space-y-8">
			<li v-for="character in characters">
				<CharacterItem :name="character.name" />
			</li>
		</ol>
	</div>
</template>

<style lang="scss" scoped></style>
