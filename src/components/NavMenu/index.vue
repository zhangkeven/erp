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
                :router="true"
        >
            <div v-for="(firstItem,firsIndex) in menuList" :key="firsIndex">
                <!--                只有一级的模版-->
                <el-menu-item
                        :index="'/personneladd'"
                        v-if="firstItem.Children.length===0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{firstItem.MenuName}}</span>
                </el-menu-item>
                <!--                有多级的模版-->
                <el-submenu
                        :index="firstItem.MenuUrl"
                        v-if="firstItem.Children.length>0">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span>{{firstItem.MenuName}}</span>
                    </template>
                    <el-menu-item-group
                            v-for="(secondItem,secondIndex) in firstItem.Children"
                            :key="secondIndex">
                        <!--                        二级下没有三级了-->
                        <el-menu-item :index="secondItem.MenuUrl" v-if="secondItem.Children.length===0">
                            <i class="bot-black-icon"></i>{{secondItem.MenuName}}
                        </el-menu-item>
                        <!--                        二级下面有三级-->
                        <el-submenu
                                :index="secondItem.MenuUrl"
                                v-if="secondItem.Children.length>0">
                            <template slot="title">
                                <i class="el-icon-document"></i>
                                <span>{{secondItem.MenuName}}</span>
                            </template>
                            <el-menu-item-group
                                    v-for="(thirdItem,thirdIndex) in secondItem.Children"
                                    :key="thirdIndex">
                                <!--                        三级下面没有四级了-->
                                <el-menu-item :index="thirdItem.MenuUrl" v-if="thirdItem.Children.length===0">
                                    <i class="bot-black-icon"></i>{{thirdItem.MenuName}}
                                </el-menu-item>
                                <!--                                 三级下面有四级   -->
                                <el-submenu
                                        :index="thirdItem.MenuUrl"
                                        v-if="thirdItem.Children.length>0">
                                    <template slot="title">
                                        <i class="el-icon-document"></i>
                                        <span>{{thirdItem.MenuName}}</span>
                                    </template>
                                    <el-menu-item-group
                                            v-for="(fourItem,fourIndex) in thirdItem.Children"
                                            :key="fourIndex">
                                        <el-menu-item :index="fourItem.MenuUrl" v-if="fourItem.Children.length===0">
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

    export default {
        name: "NavMenu",
        props: {
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
            return {}
        },
        computed: {
            ...mapState({
                themeColor: state => state.setcolor.themeColor

            })
        },

        methods: {
            handleOpen(key, keyPath) {
                this.$emit('handleOpen', key, keyPath)
            },
            handleClose(key, keyPath) {
                this.$emit('handleClose', key, keyPath)
            },
            select(index, path) {
                this.$emit('select', index, path)
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
