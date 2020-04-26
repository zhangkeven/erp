<template>
    <div id="OrganAdd">
        <Breadcrumb/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm globalForm">
            <div class="formWrapTwo">
                <div class="formLeft">
                    <el-form-item label="部门编号" prop="num">
                        <el-input v-model="ruleForm.num"></el-input>
                    </el-form-item>
                    <el-form-item label="部门名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="上级部门" prop="department">
                        <el-select v-model="departmentvalue" filterable placeholder="请选择部门">
                            <el-option
                                    v-for="item in departmentoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="负责人" prop="Superior">
                        <el-select v-model="nameSuperiorvalue" filterable placeholder="请选择负责人">
                            <el-option
                                    v-for="item in nameSuperioroptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>

                    </el-form-item>

                </div>
                <div class="formRight">

                    <el-form-item label="人数" prop="number">
                        <el-input v-model="ruleForm.number"></el-input>
                    </el-form-item>
                    <el-form-item label="是否停用" prop="IsFile">
                        <el-switch v-model="ruleForm.IsFile"></el-switch>
                    </el-form-item>
                    <el-form-item label="备注" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </div>
            </div>
            <el-form-item class="formSubm">
                <el-button type="primary" @click="submitForm('ruleForm')" class="sunmenuBtn Btn">提交</el-button>
                <el-button @click="resetForm('ruleForm')" class="resetBtn">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import Breadcrumb from '@/components/Breadcrumb/index.vue'
    export default {
        name: "OrganAdd",
        components: {
            Breadcrumb
        },
        data() {
            return {
                //负责人姓名选择
                nameSuperiorvalue: '',
                nameSuperioroptions: [{
                    value: '选项1',
                    label: '张三'
                }, {
                    value: '选项2',
                    label: '李四'
                }, {
                    value: '选项3',
                    label: '王二'
                }],

                //所属部门选择
                departmentvalue: '',
                departmentoptions: [{
                    value: '选项1',
                    label: '部门一'
                }, {
                    value: '选项2',
                    label: '部门二'
                }, {
                    value: '选项3',
                    label: '部门三'
                }],
                ruleForm: {
                    num:'',
                    name: '',
                    sex:'',
                    department:'',
                    number:'',
                    Superior:'',
                    IsFile: false,
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
