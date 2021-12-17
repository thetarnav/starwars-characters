<script lang="ts" setup>
import { savedMainPageScrollPosition } from '@/main'
import { useEventListener } from '@vueuse/core'

useEventListener(
	window,
	'scroll',
	() => (savedMainPageScrollPosition.value = window.scrollY),
)
</script>

<template>
	<div>
		<header class="min-h-screen flex flex-col justify-center items-center">
			<h1 class="text-7xl md:text-9xl text-center">
				STAR WARS<br />CHARA&shy;CTERS
			</h1>
		</header>
		<main class="pb-24 lg:pb-48">
			<CharactersList />
		</main>
	</div>
</template>

<style lang="scss" scoped>
header {
	font-family: 'starjedi', 'Gothic A1', sans-serif;
}
</style>
