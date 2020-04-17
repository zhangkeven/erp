<template>
    <div id="navmenu">
                <el-menu
                        default-active="2-1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        :background-color="themeColor"
                        text-color="#fff"
                        active-text-color="#d7e81b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>订单管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><i class="bot-black-icon"></i>订单列表</el-menu-item>
                            <el-menu-item index="1-2"><i class="bot-black-icon"></i>未完成订单</el-menu-item>
                            <el-menu-item index="1-3"><i class="bot-black-icon"></i>进行中订单</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-custom"></i>
                            <span>人员管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1"><i class="bot-black-icon"></i><span @click="goPersonnel">员工管理</span></el-menu-item>
                            <el-menu-item index="2-2"><i class="bot-black-icon"></i><span @click="goOrgan">组织架构</span></el-menu-item>
                            <el-menu-item index="2-3"><i class="bot-black-icon"></i><span @click="goJobList">职位管理</span></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1"><i class="bot-black-icon"></i><span @click="goUser">用户账号</span></el-menu-item>
                            <el-menu-item index="3-2"><i class="bot-black-icon"></i><span @click="goUserRole">用户角色</span></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title" @click="goset">修改主题色</span>
                    </el-menu-item>
                </el-menu>
    </div>
</template>

<script>
	import {mapState} from 'vuex'
    export default {
        name: "NavMenu",
        data(){
            return{

            }
        },
		computed:{
			...mapState({
				themeColor:state=>state.setcolor.themeColor

			})
		},

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goPersonnel(){
                this.$router.push({
                    path:'/personnel'
                })
            },
            goOrgan(){
                this.$router.push({
                    path:'/organ'
                })
            },
            goJobList(){
                this.$router.push({
                    path:'/job'
                })
            },
            goUser(){
                this.$router.push({
                    path:'/user'
                })
            },
            goUserRole(){
                this.$router.push({
                    path:'/userrole'
                })
            },
            ///测试修改主题色
            goset(){
                this.$router.push({
                    path:'/setColor'
                })
            },
        }

    }
</script>
<style lang="scss">
    #navmenu{
        .el-menu{
            border: none;
            padding-top: 15px;
        }
        .el-submenu .el-menu-item,
        .el-submenu__title{
            min-width: auto;
            font-size: 14px;
            padding: 0 15px;
            height: 40px;
            line-height: 40px;
        }
        .el-submenu .el-menu{
            padding-top: 0;
        }
        .el-submenu .el-menu-item{

        }
        .el-submenu [class^=el-icon-],
        .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow,
        .el-submenu__title i{
            color: #fff;
            font-size: 16px;
            margin-right: 5px;
            width: 24px;
            line-height: 16px;
        }
        .el-menu-item-group__title{
            display: none;
        }
    }
</style>
