<script lang="ts" setup></script>

<template>
	<nav
		class="
			fixed
			top-0
			inset-x-0
			h-12
			md:h-16
			px-6
			bg-black bg-opacity-40
			backdrop-blur-md backdrop-filter
			flex
			justify-between
			items-center
			font-display
		"
	>
		<router-link to="/"> Star Wars Characters </router-link>
		<a href="https://github.com/thetarnav/starwars-characters">
			<GithubIcon />
		</a>
	</nav>
</template>

<style lang="scss" scoped></style>
