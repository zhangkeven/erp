<template>
    <div id="header">
        <div class="header-left">
            <div class="logo">
                <img src="../../assets/img/logo.jpg" alt="logo">
            </div>
            <div class="black-wrap">
                <div class="backTo" v-show="isShow">
                    <span v-on:click="back"><i class="el-icon-arrow-left"></i></span>
                </div>
                <div class="back-home" v-show="isShow">
                    <span @click="backHome" class="backHome"><img src="../../assets/img/green-home-icon.png" alt="back"><span>首页</span></span>
                </div>
                <div class="goTo" v-show="isShow">
                    <span v-on:click="goto"><i class="el-icon-arrow-right"></i></span>
                </div>
            </div>
        </div>
        <div class="header-right">
            <div class="right-top">
                <div class="setting"><i class="el-icon-setting"></i></div>
                <div class="bell"><i class="el-icon-bell"></i><i class="bot-red"></i></div>
                <div class="user-wrap">
                <span class="head-portrait">
<!--                    <img src="#" alt="头像">-->
                </span>
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                        <el-submenu index="1">
                            <template slot="title">MES系统</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>
            <div class="local-time">
                <span>2020/03/02    11:18:00</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isShow:true,
                activeIndex: '1'
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        watch:{
            $route(now,old){     //监控路由变换，控制返回按钮的显示
                if(now.path=="/"){
                    this.isShow=false;
                } else{
                    this.isShow=true;
                }
            }
        }

    }
</script>
<style lang="scss">
    .user-wrap{
        .el-menu--horizontal>.el-submenu .el-submenu__title{
            height: auto;
            line-height: 30px;
            color: var(--first-color);
            border-bottom: none;
            padding: 0;
        }
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background: none;
        }
        .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
            color: var(--first-color);
        }
    }
</style>
<style lang="scss" scoped>
    @import '../../assets/style/variable';
    @import '../../assets/style/mixin';
    @import '../../assets/style/class';
    @import '../../assets/style/color';
</style>