<template>
	<div id="main">
		<div class="headerContent">
			<Header/>
		</div>
		<div class="footerContent">
			<Footer/>
		</div>
		<div class="mainContent">
			<div class="mainCenter">
				<div class="mianLeft"></div>
				<div class="mianRight">
					<NavSubMenu/>
					<router-view/>
				</div>
			</div>
		</div>
		<div class="asideLeft">
			<el-aside class="aside-wrap"><NavMenu/></el-aside>
		</div>
	</div>

</template>

<script>
	import Header from '@/components/Header/index.vue'
	import NavMenu from '@/components/NavMenu/index.vue'
	import NavSubMenu from '@/components/NavSubMenu/index.vue'
	import Footer from '@/components/Footer/index.vue'
	export default {
		name: "Main",
		components: {
			Header,
			NavMenu,
			NavSubMenu,
			Footer
		}
	}


</script>
<style lang="scss">
	.el-submenu .el-menu-item{
		min-width: auto;
	}
	.aside-wrap{
		width: 180px !important;
	}
</style>