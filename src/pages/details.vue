<script lang="ts" setup>
import { useCharacterDetails } from '@/modules/details'

const { params } = useRoute()
const { details } = useCharacterDetails(params.uid + '')
</script>

<template>
	<div class="fixed top-2 left-2">
		<router-link to="/"> GO BACK </router-link>
	</div>
	<div>ID {{ params.uid }}</div>
	<div>DETAILS: {{ details }}</div>
</template>

<style lang="scss" scoped></style>
