<template>
    <div id="Breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="#">角色列表</a></el-breadcrumb-item>
            <el-breadcrumb-item>添加角色</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumb",
    }
</script>
<style lang="scss">
</style>
