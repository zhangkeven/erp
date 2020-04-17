<template>
    <div id="header">
        <div class="header-left">
            <div class="logo">
                <img src="../../assets/img/logo.jpg" alt="logo">
            </div>
            <div class="black-wrap">
                <div class="backTo" v-show="isShow">
                    <span @click="goback"><i class="el-icon-arrow-left"></i></span>
                </div>
                <div class="back-home" v-show="isShow">
                    <span @click="backHome" class="backHome"><img src="../../assets/img/green-home-icon.png" alt="back"><span>首页</span></span>
                </div>
                <div class="goTo" v-show="isShow">
                    <span @click="goback"><i class="el-icon-arrow-right"></i></span>
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
                            <div class="headerMenu">
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </div>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>
            <div class="local-time">
                <span>{{ nowDate + ' ' + nowTime + ' ' + nowWeek }}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                isShow:true,//返回+首页默认是否显示
                activeIndex: '1',//【系统】选中当前菜单标识
                nowDate: "",    // 当前日期
                nowTime: "",    // 当前时间
                nowWeek: ""     // 当前星期
            }
        },
        methods:{
            currentTime() {//当前时间实时刷新
                setInterval(this.getDate, 500);
            },
            getDate: function() {//获取当地时间并定义格式
                var _this = this;
                let yy = new Date().getFullYear();
                let mm = new Date().getMonth() + 1;
                let dd = new Date().getDate();
                let week = new Date().getDay();
                let hh = new Date().getHours();
                let mf =
                    new Date().getMinutes() < 10
                        ? "0" + new Date().getMinutes()
                        : new Date().getMinutes();
                if (week == 1) {
                    this.nowWeek = "星期一";
                } else if (week == 2) {
                    this.nowWeek = "星期二";
                } else if (week == 3) {
                    this.nowWeek = "星期三";
                } else if (week == 4) {
                    this.nowWeek = "星期四";
                } else if (week == 5) {
                    this.nowWeek = "星期五";
                } else if (week == 6) {
                    this.nowWeek = "星期六";
                } else {
                    this.nowWeek = "星期日";
                }
                _this.nowTime = hh + ":" + mf;
                _this.nowDate = yy + "/" + mm + "/" + dd;
            },

            goback(){ //返回上一页
                this.$router.go(-1);//返回上一层
            },
            handleSelect(key, keyPath) {//选择菜单
                console.log(key, keyPath);
            },

			backHome(){//返回首页
                this.$router.push({
                    path:'/home'
                })
            },

        },

        mounted() {
            this.currentTime();//本地时间实时刷新
        },

        beforeDestroy: function() {
            if (this.getDate) {// 销毁定时器
              //  console.log("销毁定时器")
                clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
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
            color: var(--first-color) !important;
            font-size: 12px;
            border-bottom: none;
            padding: 0;
        }
        .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
            background: none;
        }
        .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
            color: var(--first-color);
            font-size: 14px;
            margin:0 0 0 8px;
            line-height: 12px;
            display: inline-block;
        }
    }
    .el-menu--horizontal .el-menu--popup.el-menu{
        .headerMenu{
            min-width: 160px;
            .el-menu-item,.el-submenu__title{
                background-color: #dfeae1 ;
                color: #333 !important;

            }
            .el-menu-item.is-active,.el-submenu.is-active>.el-submenu__title,.el-menu-item:hover,.el-submenu__title:hover,.el-menu-item:focus,.el-submenu__title:focus{
                background-color: var(--first-color) ;
            }
        }
    }


</style>
