<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import commonUtil from '@/util/commonUtil'
    import {switchEnvironment} from '@/config/sysconfig'
    import globalData from '@/util/globalData'
    import AxiosUtil from '@/util/axiosutil'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        created() {
            window.globalData = globalData
            commonUtil.initColor()  //初始化主题色
            this.setConfig()
        },
        data() {
            return {
                checked: false
            }
        },
        methods: {
            setConfig() {
                switchEnvironment('dev')
            },
            // setColor() {
            //
            // },
        }
    }
</script>

<style scoped lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }
</style>
