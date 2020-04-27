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
				        // 只有一级
					{
						"Id": 1,
						"MenuName": "只有1级",
						"MenuCode": "UserManagement",
						"MenuUrl": "/personneladd",
						"Depth": "1级",
						"ParentId": null,
                        'Children':[]

                    },
                    //有2级
                    {
                        "Id": 2,
                        "MenuName": "含有2级",
                        "MenuCode": "AuthorityManagement",
                        "MenuUrl": "/userroleadda",
                        "Depth": "1级",
                        "ParentId": null,
                        "Children": [
                            {
                                "Id": 4,
                                "MenuName": "菜单2级",
                                "MenuCode": "MenuAuthority",
                                "MenuUrl": "/userroleedit",
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
                    },
                    {
                        "Id": 1,
                        "MenuName": "只有1级",
                        "MenuCode": "UserManagement",
                        "MenuUrl": "/personneladd",
                        "Depth": "1级",
                        "ParentId": null,
                        'Children':[]

                    },
                    //有3级
                    {
                        "Id": 2,
                        "MenuName": "含有3级",
                        "MenuCode": "AuthorityManagementa",
                        "MenuUrl": "/userroleaddb",
                        "Depth": "1级",
                        "ParentId": null,
                        "Children": [
                            {
                                "Id": 4,
                                "MenuName": "菜单2级",
                                "MenuCode": "MenuAuthority",
                                "MenuUrl": "/userroleedita",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": [
                                    {
                                        "Id": 4,
                                        "MenuName": "菜单3级",
                                        "MenuCode": "MenuAuthority",
                                        "MenuUrl": "/userroledetails",
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
                    },
                    {
                        "Id": 1,
                        "MenuName": "只有1级",
                        "MenuCode": "UserManagement",
                        "MenuUrl": "/personneladd",
                        "Depth": "1级",
                        "ParentId": null,
                        'Children':[]

                    },
                    //有4级
					{
						"Id": 2,
						"MenuName": "含有4级",
						"MenuCode": "AuthorityManagement",
						"MenuUrl": "/userroleaddc",
						"Depth": "1级",
						"ParentId": null,
						"Children": [
							{
								"Id": 4,
								"MenuName": "菜单2级",
								"MenuCode": "MenuAuthority",
								"MenuUrl": "/userroleeditb",
								"Depth": "2级",
								"ParentId": 2,
                                "Children": [
                                    {
                                        "Id": 4,
                                        "MenuName": "菜单3级",
                                        "MenuCode": "MenuAuthority",
                                        "MenuUrl": "/userroledetails",
                                        "Depth": "2级",
                                        "ParentId": 2,
                                        "Children": [
                                            {
                                                "Id": 4,
                                                "MenuName": "菜单4级",
                                                "MenuCode": "MenuAuthority",
                                                "MenuUrl": "/userrole",
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
				console.log('handleOpen',key,keyPath)
			},
			handleClose(key, keyPath) {
				console.log('handleClose',key,keyPath)
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