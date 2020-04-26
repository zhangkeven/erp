<template>
    <div id="PersonnelAdd">
        <Breadcrumb/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm globalForm">
            <div class="formWrapTwo">
                <div class="formLeft">
                    <el-form-item label="职位编号" prop="num">
                        <el-input v-model="ruleForm.num" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="职位名称" prop="name">
                        <el-input v-model="ruleForm.name" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="是否停用" prop="IsFile">
                        <el-input v-model="ruleForm.IsFile" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="备注" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc" readonly></el-input>
                    </el-form-item>


                </div>
            </div>
        </el-form>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb/index.vue'
    export default {
        name: "JobAdd",
        components: {
            Breadcrumb
        },
        data() {
            return {

                ruleForm: {
                    num:'11111',
                    name: '职位一',
                    IsFile: '是',
                    desc: '备注信息'
                },
            };
        },
        methods: {
        }
    }
</script>
