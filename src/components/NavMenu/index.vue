<template>
    <div id="navmenu">

        <el-menu
                default-active="2-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                @select="select"
                :background-color="themeColor"
                text-color="#fff"
                active-text-color="#d7e81b"
                ref="menubg"
        >
            <div v-for="(firstItem,firsIndex) in menuList" :key="firsIndex">
                <!--                只有一级的模版-->
                <el-menu-item
                        :index="JSON.stringify(firstItem.Id)"
                        v-if="firstItem.Children.length===0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{firstItem.MenuName}}</span>
                </el-menu-item>
                <!--                有多级的模版-->
                <el-submenu
                        :index="JSON.stringify(firstItem.Id)"
                        v-if="firstItem.Children.length>0"
                >
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>{{firstItem.MenuName}}</span>
                    </template>
                    <el-menu-item-group
                            v-for="(secondItem,secondIndex) in firstItem.Children"
                            :key="secondIndex"

                    >
                        <!--                        二级下没有三级了-->
                        <el-menu-item :index="JSON.stringify(secondItem.Id)" v-if="secondItem.Children.length===0 || level===2">
                            <i class="bot-black-icon"></i>{{secondItem.MenuName}}
                        </el-menu-item>
                        <!--                        二级下面有三级-->
                        <el-submenu
                                :index="JSON.stringify(secondItem.Id)"
                                v-if="secondItem.Children.length>0 && level>2">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{secondItem.MenuName}}</span>
                            </template>
                            <el-menu-item-group
                                    v-for="(thirdItem,thirdIndex) in secondItem.Children"
                                    :key="thirdIndex"

                            >
                                <!--                        三级下面没有四级了-->
                                <el-menu-item :index="JSON.stringify(thirdItem.Id)" v-if="thirdItem.Children.length===0 || level===3">
                                    <i class="bot-black-icon"></i>{{thirdItem.MenuName}}
                                </el-menu-item>
                                <!--                                 三级下面有四级   -->
                                <el-submenu
                                        :index="JSON.stringify(thirdItem.Id)"
                                        v-if="thirdItem.Children.length>0 && level>3">
                                    <template slot="title">
                                        <i class="el-icon-document"></i>
                                        <span>{{thirdItem.MenuName}}</span>
                                    </template>
                                    <el-menu-item-group
                                            v-for="(fourItem,fourIndex) in thirdItem.Children"
                                            :key="fourIndex">
                                        <el-menu-item :index="JSON.stringify(fourItem.Id)" v-if="fourItem.Children.length===0">
                                            <i class="bot-black-icon"></i>{{fourItem.MenuName}}
                                        </el-menu-item>
                                    </el-menu-item-group>
                                </el-submenu>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu-item-group>
                </el-submenu>
            </div>
        </el-menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import menuPath from "@/config/menuPath";
    export default {
        name: "NavMenu",
        props: {
            level:{
                type:Number,
                default:2
            },
            menuList: {
                type: Array,
                default: function () {
                    return [
                        {
                            "Id": 1,
                            "MenuName": "用户管理",
                            "MenuCode": "UserManagement",
                            "MenuUrl": "//",
                            "Depth": "1级",
                            "ParentId": null,
                            'Children': []
                        },
                        {
                            "Id": 1,
                            "MenuName": "用户管理",
                            "MenuCode": "UserManagement",
                            "MenuUrl": "//",
                            "Depth": "1级",
                            "ParentId": null,
                            "Children": [
                                {
                                    "Id": 3,
                                    "MenuName": "员工管理",
                                    "MenuCode": "EmployeeManagement",
                                    "MenuUrl": "/UserManagement/EmployeeManagement",
                                    "Depth": "2级",
                                    "ParentId": 1,
                                    "Children": []
                                }
                            ]
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
            }
        },
        data() {
            return {
                keyList: []
            }
        },
        computed: {
            ...mapState({
                themeColor: state => state.setcolor.themeColor

            })
        },

        methods: {
            handleOpen(key, keyPath) {
                if (key.length === 1) {
                    return
                }
                this.keyList = keyPath
                this.$emit('handleOpen', key, keyPath)
            },
            handleClose(key, keyPath) {
                for (let i = 0; i < this.keyList.length; i++) {
                    if (i > 0 && i < 3) {
                        let dom = this.keyList[i]
                        this.$refs['menubg'].close(dom)
                    }
                }
                this.keyList = []
                this.$emit('handleClose', key, keyPath)
            },
            select(index, path) {
                let selectMenu= {}
                if(path.length===1){ //只有一级的
                    selectMenu = this.menuList.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[0]
                    })[0]
                }
                if(path.length===2){ //只有两级
                    let selectFirstMenu = this.menuList.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[0]
                    })[0]
                    selectMenu = selectFirstMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[1]
                    })[0]
                }
                if(path.length===3){ //只有三级
                    let selectFirstMenu = this.menuList.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[0]
                    })[0]
                    let selectSecondMenu = selectFirstMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[1]
                    })[0]
                    selectMenu = selectSecondMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[2]
                    })[0]
                }
                if(path.length===4){ //只有四级
                    let selectFirstMenu = this.menuList.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[0]
                    })[0]
                    let selectSecondMenu = selectFirstMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[1]
                    })[0]
                    let selectThirdMenu = selectSecondMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[2]
                    })[0]
                    selectMenu = selectThirdMenu.Children.filter((item, index) => {
                        return JSON.stringify(item.Id) === path[3]
                    })[0]
                }
                let pagePath = menuPath[selectMenu.Id] //获取页面路径
                this.$emit('select', index, path,pagePath,selectMenu)
            },
            ///测试修改主题色
            goset() {
                this.$router.push({
                path: '/setColor'
                })
            },
        }

    }
</script>
<style lang="scss">
    #navmenu {

    .el-menu {
        border: none;
        padding-top: 15px;
    }

    .el-submenu .el-menu-item,
    .el-submenu__title {
        min-width: auto;
        font-size: 14px;
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
    }

    .el-submenu .el-menu {
        padding-top: 0;
    }

    .el-submenu .el-menu-item {

    }

    .el-submenu [class^=el-icon-],
    .el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow,
    .el-submenu__title i {
        color: #fff;
        font-size: 16px;
        margin-right: 5px;
        width: 24px;
        line-height: 16px;
    }

    .el-menu-item-group__title {
        display: none;
    }

    }
</style>
