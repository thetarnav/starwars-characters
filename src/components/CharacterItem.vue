<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { splitName } from '@/logic/utils'

const props = defineProps<{ name: string; uid: string }>()
const [first, last] = splitName(props.name)

const isSingle = computed(() => !last.length)
</script>

<template>
	<RouterLink
		:to="props.uid"
		class="
			w-full
			p-2
			font-black
			text-3xl
			md:text-5xl
			lg:text-8xl
			break-words
			overflow-hidden
			block
		"
	>
		<div v-if="isSingle" class="flex justify-center">
			<div>{{ first }}</div>
		</div>
		<div v-else class="grid grid-cols-2 gap-x-4 lg:gap-x-8">
			<div class="text-right">{{ first }}</div>
			<div>{{ last }}</div>
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped></style>
