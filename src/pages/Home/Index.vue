
<template>
	<div id="main">
		<div class="headerContent">
			<Header/>
		</div>
		<div class="mainContent">
			<div class="mainCenter">
				<div class="mianLeft">
					<el-aside class="aside-wrap"><NavMenu/></el-aside>
				</div>
				<div class="mianRight">
					<router-view/>
				</div>
			</div>
		</div>
		<div class="footerContent">
			<Footer/>
		</div>
	</div>

</template>

<script>
	import Header from '@/components/Header/index.vue'
	import NavMenu from '@/components/NavMenu/index.vue'
	import Footer from '@/components/Footer/index.vue'
	export default {
		name: "Home",
		data(){
			return {

			}
		},
		components: {
			Header,
			NavMenu,
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