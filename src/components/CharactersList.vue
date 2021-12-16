<script lang="ts" setup>
import { isClient, useWindowScroll } from '@vueuse/core'
import { useCharacterList } from '@/modules/characters'

const { characters, fetchNext } = useCharacterList()

const { y } = useWindowScroll()
const checkScroll = () => {
	if (
		isClient &&
		y.value + window.innerHeight + 100 >= document.body.offsetHeight
	)
		fetchNext()
}
watch(y, checkScroll)
watch(
	characters,
	async () => {
		await nextTick()
		checkScroll()
	},
	{ deep: true },
)
</script>

<template>
	<div v-if="characters.length">
		<ol class="space-y-8">
			<li v-for="character in characters" :key="character.uid">
				<CharacterItem :name="character.name" :uid="character.uid" />
			</li>
		</ol>
	</div>
</template>

<style lang="scss" scoped></style>
