<script lang="ts">
export default {
	inheritAttrs: false,
}
</script>

<script lang="ts" setup>
defineProps<{
	when: boolean
}>()
</script>

<template>
	<Transition name="fade" appear mode="out-in">
		<slot v-if="when" />
		<div v-else v-bind="$attrs"></div>
	</Transition>
</template>

<style lang="scss" scoped>
div {
	@apply relative;
	&::before {
		content: '';
		@apply absolute inset-0 bg-gray-600 bg-opacity-20;
		animation: pulse 3s infinite;
	}
}
@keyframes pulse {
	from,
	to {
		opacity: 1;
	}
	50% {
		opacity: 0.6;
	}
}
</style>
