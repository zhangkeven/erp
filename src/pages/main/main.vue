<template>
	<div id="main">
		<Header/>
		<el-aside class="aside-wrap" width="300px"><NavMenu/></el-aside>
		<router-view/>
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
