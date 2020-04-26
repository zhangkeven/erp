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
			<el-aside class="aside-wrap">
				<NavMenu
						:menuList="menuList"
						@handleOpen="handleOpen"
						@handleClose="handleClose"
						@select="select"
				/>
			</el-aside>
		</div>
	</div>

</template>

<script>
	import Header from '@/components/Header/index.vue'
	import NavMenu from '@/components/NavMenu/index.vue'
	import NavSubMenu from '@/components/NavSubMenu/index.vue'
	import Footer from '@/components/Footer/index.vue'
	import AxiosUtil from '@/util/axiosutil'
	export default {
		name: "Main",
		components: {
			Header,
			NavMenu,
			NavSubMenu,
			Footer
		},
		created(){
			this.getMenuList()
		},
		data(){
			return{
				menuList:[
					{
						"Id": 1,
						"MenuName": "用户管理",
						"MenuCode": "UserManagement",
						"MenuUrl": "//",
						"Depth": "1级",
						"ParentId": null,
					},
					{
						"Id": 2,
						"MenuName": "权限管理",
						"MenuCode": "AuthorityManagement",
						"MenuUrl": "//",
						"Depth": "1级",
						"ParentId": null,
						"Children": [
							{
								"Id": 4,
								"MenuName": "菜单权限",
								"MenuCode": "MenuAuthority",
								"MenuUrl": "/AuthorityManagement/MenuAuthority",
								"Depth": "2级",
								"ParentId": 2,
								"Children": []
							},
							{
								"Id": 5,
								"MenuName": "角色权限",
								"MenuCode": "RoleAuthority",
								"MenuUrl": "/AuthorityManagement/RoleAuthority",
								"Depth": "2级",
								"ParentId": 2,
								"Children": []
							},
							{
								"Id": 6,
								"MenuName": "数据权限",
								"MenuCode": "DataAuthority",
								"MenuUrl": "/AuthorityManagement/DataAuthority",
								"Depth": "2级",
								"ParentId": 2,
								"Children": []
							}
						]
					}
				]
			}
		},
		methods:{
			getMenuList(){
				AxiosUtil.get({
					url:'GetMenus',
					data:{

					}
				}).then(res =>{
					this.menuList = res
					console.log(12321312,res)
				}).catch(err =>{

				})
			},
			handleOpen(key, keyPath) {
				// console.log('handleOpen',key,keyPath)
			},
			handleClose(key, keyPath) {
				// console.log('handleClose',key,keyPath)
			},
			select(index,path){
				console.log('selectindex',index,'selectpath',path)
			}
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