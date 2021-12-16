<script lang="ts" setup>
import { snakeToTitle } from '@/logic/utils'

const props = defineProps<{
	data: Record<any, any>
}>()
</script>

<template>
	<table class="w-full">
		<tbody>
			<tr
				class="border-b border-yellow border-opacity-20 last:border-b-0"
				v-for="(value, key) in props.data"
			>
				<th class="py-4 text-left uppercase tracking-wide opacity-80">
					{{ snakeToTitle(key + '') }}
				</th>
				<td class="py-4 text-left uppercase tracking-wide">
					<Skeleton :when="!!value" class="h-6 w-16">
						{{ value }}
					</Skeleton>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style lang="scss" scoped></style>
