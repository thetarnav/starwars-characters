<script lang="ts" setup>
import { splitName } from '@/logic/splitName'

const props = defineProps<{ name: string }>()
const [first, last] = splitName(props.name)
</script>

<template>
	<div
		class="w-full grid grid-cols-2 gap-x-4 lg:gap-x-8 font-black text-4xl lg:text-8xl break-words overflow-hidden"
	>
		<div class="text-right">{{ first }}</div>
		<div>{{ last }}</div>
	</div>
</template>

<style lang="scss" scoped></style>
