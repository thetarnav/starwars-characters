<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { splitName } from '@/logic/utils'

const props = defineProps<{ name: string; uid: string }>()
const [first, last] = splitName(props.name)
</script>

<template>
	<RouterLink
		:to="props.uid"
		class="
			w-full
			p-2
			grid grid-cols-2
			gap-x-4
			lg:gap-x-8
			font-black
			text-4xl
			lg:text-8xl
			break-words
			overflow-hidden
		"
	>
		<div class="text-right">{{ first }}</div>
		<div>{{ last }}</div>
	</RouterLink>
</template>

<style lang="scss" scoped></style>
