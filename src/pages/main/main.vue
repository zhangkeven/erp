<template>
	<div id="main">
		<Header/>
		<NavMenu/>
	</div>

</template>

<script>
	import Header from '@/components/Header/index.vue'
	import NavMenu from '@/components/NavMenu/index.vue'
	export default {
		name: "Main",
		components: {
			Header,
			NavMenu
		}
	}


</script>

<style>
</style>
