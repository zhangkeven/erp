<template>
    <div id="NavSub-Menu">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                text-color="#333"
                active-text-color="var(--first-color)">
            <el-menu-item index="1" class="NavSubTitle" disabled>
                <template slot="title">{{selectMenu.MenuName}}</template>
            </el-menu-item>
            <div class="secondItem" v-for="(firstItem,firstIndex) in selectMenu.Children" :key="firstIndex">
                <el-menu-item :index="JSON.stringify(firstItem.Id)" class="NavSubTitle" v-if="firstItem.Children.length === 0">
                    <template slot="title">{{firstItem.MenuName}}</template>
                </el-menu-item>
                <el-submenu :index="JSON.stringify(firstItem.Id)" v-if="firstItem.Children.length > 0">
                    <template slot="title">{{firstItem.MenuName}}</template>
                    <div class="NavSub-SubMenu">

                        <el-menu-item v-for="(secondItem,secondIndex) in firstItem.Children" :key="secondIndex" :index="JSON.stringify(secondItem.Id)">{{secondItem.MenuName}}</el-menu-item>
                    </div>

                </el-submenu>
            </div>
        </el-menu>

    </div>

</template>

<script>
    export default {
        name: "NavSubMenu",
        props:{
            selectMenu:{
                type:Object,
                default:{}
            }
        },
        data() {
            return {
                activeIndex: '2-1',
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
    #NavSub-Menu{
        margin: 15px 0 10px;
        .el-menu-demo{
            display: flex;
            flex-direction: row;
        }
        .el-menu.el-menu--horizontal{
            background-color:#dfeae1 ;
        }
        .el-menu-item,.NavSubTitle,.el-menu--horizontal>.el-submenu{
            border-right: 1px solid #fff !important;
        }
        .NavSubTitle.is-disabled,.el-menu--horizontal>.NavSubTitle.is-disabled:hover,.el-menu--horizontal>NavSubTitle.is-disabled:focus{
            color: var(--first-color) !important;
            background: none !important;
            border:none !important;
            opacity: 1;
        }
        .el-submenu__title,.el-menu--horizontal>.el-menu-item{
            height: 32px;
            line-height: 32px;
            font-size: 12px;

        }
        .el-menu--horizontal>.el-submenu .el-submenu__title{
            border:none !important;

        }
        .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,.el-menu--horizontal>.el-submenu:hover .el-submenu__title,.el-menu--horizontal>.el-submenu:focus .el-submenu__title,
        .el-menu--horizontal>.el-menu-item:hover,.el-menu--horizontal>.el-menu-item:focus,.el-menu--horizontal>.el-menu-item.is-active{
            background-color:var(--first-color) ;
            color: #fff !important;
            border:none !important;

        }
        .el-menu--horizontal>.el-submenu.is-active .el-submenu__title i, .el-menu--horizontal>.el-submenu.is-opened .el-submenu__title i{
            color: #fff ;
        }

    }

    .el-menu--horizontal{
        .el-menu--popup.el-menu{
            background-color: var(--first-color) ;
            padding: 0;
            .el-menu-item,.el-submenu__title{
                background-color: var(--first-color) ;
                color: #fff !important;
                border-bottom: 1px solid #fff;
                height: 38px;
                line-height: 38px;
                padding: 0 15px;
                font-size: 12px;
            }
            .el-menu-item.is-active,.el-submenu.is-active>.el-submenu__title,.el-menu-item:hover,.el-submenu__title:hover,.el-menu-item:focus,.el-submenu__title:focus{
                color: #fff !important;
                background-color: #00a847 ;
            }
            .NavSub-SubMenu{
                min-width: 160px;

            }

        }
    }

</style>


