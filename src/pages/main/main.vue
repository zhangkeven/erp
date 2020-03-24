<template>
	<div id="main">
		<Header/>
		<div class="content">
			<div class="left">
				<el-aside class="aside-wrap"><NavMenu/></el-aside>
			</div>
			<div class="right">
				<router-view/>
			</div>
		</div>
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
	.content{
		width: 100%;
		height: calc(100% - 70px);
		display: flex;
		flex-direction: row;
		.left{
			// width: 220px;
		}
		.right{
			flex: 1;
			height: 100%;
		}
	}
</style>