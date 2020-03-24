<template>
	<div id="main">
		<Header/>
		<el-aside class="aside-wrap" width="300px"><NavMenu/></el-aside>

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
<style lang="scss">
	.el-submenu .el-menu-item{
		min-width: auto;
	}
</style>
<style lang="scss" scoped>
	@import '../../assets/style/variable';
	@import '../../assets/style/mixin';
	@import '../../assets/style/class';
	@import '../../assets/style/color';
</style>