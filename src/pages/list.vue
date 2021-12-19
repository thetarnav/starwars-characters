<script lang="ts" setup>
import { savedMainPageScrollPosition } from '@/main'
import { useEventListener } from '@vueuse/core'
import { useHead } from '@vueuse/head'

useEventListener(
	window,
	'scroll',
	() => (savedMainPageScrollPosition.value = window.scrollY),
)

useHead({
	title: 'Star Wars Characters',
})
</script>

<template>
	<header
		class="
			min-h-screen
			flex flex-col
			justify-center
			items-center
			font-display
		"
	>
		<h1 class="text-7xl md:text-9xl text-center">
			STAR WARS<br />CHARA&shy;CTERS
		</h1>
	</header>
	<main class="pb-24 lg:pb-48">
		<CharactersList />
	</main>
</template>
