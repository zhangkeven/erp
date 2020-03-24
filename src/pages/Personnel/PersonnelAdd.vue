<template>
    <div id="PersonnelAdd">
        <Header/>
        <el-aside class="aside-wrap" width="300px"><NavMenu/></el-aside>
        <NavSubMenu/>
    </div>
</template>

<script>
    import Header from '@/components/Header/index.vue'
    import NavMenu from '@/components/NavMenu/index.vue'
    import NavSubMenu from '@/components/NavSubMenu/index.vue'
    export default {
        name: "PersonnelAdd",
        components: {
            Header,
            NavMenu,
            NavSubMenu
        }
    }
</script>
