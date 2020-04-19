<template>
    <div id="UserAdd">
        <Breadcrumb/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm globalForm">
            <div class="formWrapTwo">
                <div class="formLeft">
                    <el-form-item label="账户名称" prop="username">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-select v-model="namevalue" filterable placeholder="请选择员工">
                            <el-option
                                    v-for="item in nameoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>

                    </el-form-item>
                    <el-form-item label="初始密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>

                </div>
                <div class="formRight">

                    <el-form-item label="所属部门" prop="department">
                        <el-select v-model="departmentvalue" filterable placeholder="请选择部门">
                            <el-option
                                    v-for="item in departmentoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="选择角色" prop="role" class="roleChoose selectCheckbox">
                        <el-select
                                v-model="rolevalue"
                                multiple
                                filterable
                                allow-create
                                default-first-option
                                placeholder="请选择角色">
                            <el-option
                                    v-for="item in roleoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>

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
        name: "UserAdd",
        components: {
            Breadcrumb
        },
        data() {
            return {
                options: [{
                    value: 'HTML',
                    label: 'HTML'
                }, {
                    value: 'CSS',
                    label: 'CSS'
                }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }],
                value: [],
                //员工姓名选择
                nameoptions: [{
                    value: '选项1',
                    label: '张三'
                }, {
                    value: '选项2',
                    label: '李四'
                }, {
                    value: '选项3',
                    label: '王二'
                }],
                //角色选择
                roleoptions: [{
                    value: '选项1',
                    label: '角色一'
                }, {
                    value: '选项2',
                    label: '角色二'
                }, {
                    value: '选项3',
                    label: '角色三'
                }],
                //所属部门选择
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
                namevalue: '',
                rolevalue: [],
                departmentvalue: '',

                ruleForm: {
                    username: '',
                    name: '',
                    department: '',
                    pass: '',
                    role: '',
                    IsFile: false,
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    date2: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择活动资源', trigger: 'change'}
                    ],
                    desc: [
                        {required: true, message: '请填写活动形式', trigger: 'blur'}
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
        },
        watch:{

        },
        mounted() {

        },
        created() {

        }
    }
</script>
