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
                    <NavSubMenu
                            :selectMenu="selectMenu"
                    />
                    <router-view/>
                </div>
            </div>
        </div>
        <div class="asideLeft">
            <el-aside class="aside-wrap">
                <NavMenu
                        :level="level"
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
    import {mapMutations} from 'vuex'
    import menuPath from "@/config/menuPath";
    export default {
        name: "Main",
        components: {
            Header,
            NavMenu,
            NavSubMenu,
            Footer
        },
        created() {
            this.getMenuList()
            this.initPage()
        },
        data() {
            return {
                level:2,
                selectMenu: {},
                menuList: [
                    // 只有一级
                    {
                        "Id": 1,
                        "MenuName": "只有1级",
                        "MenuCode": "UserManagement",
                        "MenuUrl": "/personneladd",
                        "Depth": "1级",
                        "ParentId": null,
                        'Children': []

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
                                "Id": 3,
                                "MenuName": "菜单2级",
                                "MenuCode": "MenuAuthority",
                                "MenuUrl": "/userroleedit",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": []
                            },
                            {
                                "Id": 4,
                                "MenuName": "角色权限",
                                "MenuCode": "RoleAuthority",
                                "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": []
                            },
                            {
                                "Id": 5,
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
                        "Id": 6,
                        "MenuName": "只有1级",
                        "MenuCode": "UserManagement",
                        "MenuUrl": "/personneladd",
                        "Depth": "1级",
                        "ParentId": null,
                        'Children': []

                    },
                    //有3级
                    {
                        "Id": 7,
                        "MenuName": "含有3级",
                        "MenuCode": "AuthorityManagementa",
                        "MenuUrl": "/userroleaddb",
                        "Depth": "1级",
                        "ParentId": null,
                        "Children": [
                            {
                                "Id": 8,
                                "MenuName": "菜单2级",
                                "MenuCode": "MenuAuthority",
                                "MenuUrl": "/userroleedita",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": [
                                    {
                                        "Id": 9,
                                        "MenuName": "菜单3级",
                                        "MenuCode": "MenuAuthority",
                                        "MenuUrl": "/userroledetails",
                                        "Depth": "2级",
                                        "ParentId": 2,
                                        "Children": []
                                    },
                                    {
                                        "Id": 10,
                                        "MenuName": "角色权限",
                                        "MenuCode": "RoleAuthority",
                                        "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                        "Depth": "2级",
                                        "ParentId": 2,
                                        "Children": []
                                    },
                                    {
                                        "Id": 11,
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
                                "Id": 12,
                                "MenuName": "角色权限",
                                "MenuCode": "RoleAuthority",
                                "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": []
                            },
                            {
                                "Id": 13,
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
                        "Id": 14,
                        "MenuName": "只有1级",
                        "MenuCode": "UserManagement",
                        "MenuUrl": "/personneladd",
                        "Depth": "1级",
                        "ParentId": null,
                        'Children': []

                    },
                    //有4级
                    {
                        "Id": 15,
                        "MenuName": "含有4级",
                        "MenuCode": "AuthorityManagement",
                        "MenuUrl": "/userroleaddc111",
                        "Depth": "1级",
                        "ParentId": null,
                        "Children": [
                            {
                                "Id": 16,
                                "MenuName": "菜单2级",
                                "MenuCode": "MenuAuthority",
                                "MenuUrl": "/userroleeditb222",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": [
                                    {
                                        "Id": 17,
                                        "MenuName": "菜单3级",
                                        "MenuCode": "MenuAuthority",
                                        "MenuUrl": "/userroledetails",
                                        "Depth": "2级",
                                        "ParentId": 2,
                                        "Children": [
                                            {
                                                "Id": 18,
                                                "MenuName": "菜单4级",
                                                "MenuCode": "MenuAuthority",
                                                "MenuUrl": "/userrole",
                                                "Depth": "2级",
                                                "ParentId": 2,
                                                "Children": []
                                            },
                                            {
                                                "Id": 19,
                                                "MenuName": "角色权限",
                                                "MenuCode": "RoleAuthority",
                                                "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                                "Depth": "2级",
                                                "ParentId": 2,
                                                "Children": []
                                            },
                                            {
                                                "Id": 20,
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
                                        "Id": 21,
                                        "MenuName": "角色权限",
                                        "MenuCode": "RoleAuthority",
                                        "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                        "Depth": "2级",
                                        "ParentId": 2,
                                        "Children": []
                                    },
                                    {
                                        "Id": 22,
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
                                "Id": 23,
                                "MenuName": "角色权限",
                                "MenuCode": "RoleAuthority",
                                "MenuUrl": "/AuthorityManagement/RoleAuthority",
                                "Depth": "2级",
                                "ParentId": 2,
                                "Children": []
                            },
                            {
                                "Id": 24,
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
        methods: {
            ...mapMutations(['SAVE']),
            initPage(){
                if(this.level===1){
                    this.selectMenu = this.menuList[0]
                    let id = this.menuList[0].Id
                    this.$router.push({
                        path:menuPath[id],
                        query:{

                        }
                    })
                    this.$forceUpdate()
                    return;
                }
                if(this.level===2){

                    if(this.menuList[0].Children.length>0){ //自定义了2级  并且第一个有2级菜单
                        this.selectMenu = this.menuList[0].Children[0]
                        let id = this.menuList[0].Children[0].Id
                        this.$router.push({
                            path:menuPath[id],
                            query:{

                            }
                        })
                        this.$forceUpdate()

                        return
                    }
                    if(this.menuList[0].Children.length===0){ //自定义了2级  并且第一个没有2级菜单
                        this.selectMenu = this.menuList[0]
                        let id = this.menuList[0].Id
                        this.$router.push({
                            path:menuPath[id],
                            query:{

                            }
                        })
                        this.$forceUpdate()
                        return
                    }
                    return
                }
            },
            getMenuList() {
                AxiosUtil.get({
                    url: 'GetMenus',
                    data: {}
                }).then(res => {
                    this.menuList = res
                    console.log(12321312, res)
                }).catch(err => {

                })
            },
            handleOpen(key, keyPath) {
                console.log('handleOpen', key, keyPath)
            },
            handleClose(key, keyPath) {
                console.log('handleClose', key, keyPath)
            },
            select(index, path,url,selectSecondMenu) {
                console.log(index, path,url,selectSecondMenu)
                this.selectMenu = selectSecondMenu
                if(!url || url===this.$route.path){
                    return
                }
                this.$router.push({
                    path:url,
                    query:{

                    }
                })
            }
        }
    }


</script>
<style lang="scss">
    .el-submenu .el-menu-item {
        min-width: auto;
    }

    .aside-wrap {
        width: 180px !important;
        overflow: hidden !important;

        &:hover {
            overflow: auto !important;
        }
    }
</style>