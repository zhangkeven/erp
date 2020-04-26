<template>
    <div id="PersonnelAdd">
        <Breadcrumb/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm globalForm">
            <div class="formWrapTwo">
                <div class="formLeft">
                    <el-form-item label="工号" prop="numId">
                        <el-input v-model="ruleForm.numId"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>

                    <el-form-item label="职位名称" prop="jobTitle">
                        <el-select v-model="jobvalue" filterable placeholder="请选择职位">
                            <el-option
                                    v-for="item in joboptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

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
                    <el-form-item label="直属上级" prop="superior">
                        <el-select v-model="namesuperiorvalue" filterable placeholder="请选择直属上级">
                            <el-option
                                    v-for="item in namesuperioroptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="timeIcon" label="入职时间" required prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>

                    <el-form-item label="联系方式" prop="tel">
                        <el-input v-model="ruleForm.tel"></el-input>
                    </el-form-item>

                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>

                    <el-form-item label="QQ" prop="qq">
                        <el-input v-model="ruleForm.qq"></el-input>
                    </el-form-item>
                </div>
                <div class="formRight">

                    <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="ruleForm.sex">
                            <el-radio label="男"></el-radio>
                            <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model="ruleForm.age"></el-input>
                    </el-form-item>

                    <el-form-item label="身份证号" prop="IDnumber">
                        <el-input v-model="ruleForm.IDnumber"></el-input>
                    </el-form-item>
                    <el-form-item label="文化程度" prop="DegreeEducation">
                        <el-select v-model="ruleForm.DegreeEducation" placeholder="请选择文凭">
                            <el-option label="小学" value="1"></el-option>
                            <el-option label="初中" value="2"></el-option>
                            <el-option label="高中" value="3"></el-option>
                            <el-option label="职中" value="4"></el-option>
                            <el-option label="大专" value="5"></el-option>
                            <el-option label="本科" value="6"></el-option>
                            <el-option label="研究生" value="7"></el-option>
                            <el-option label="博士" value="8"></el-option>
                            <el-option label="其他" value="9"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="籍贯" prop="Nativeplace">
                        <el-input v-model="ruleForm.Nativeplace"></el-input>
                    </el-form-item>

                    <el-form-item label="居住地址" prop="address">
                        <el-input v-model="ruleForm.address"></el-input>
                    </el-form-item>

                    <el-form-item label="薪资" prop="salary">
                        <el-input v-model="ruleForm.salary"></el-input>
                    </el-form-item>

                    <el-form-item label="归档" prop="IsFile">
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
        name: "PersonnelAdd",
        components: {
            Breadcrumb
        },
        data() {
            return {
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
                //职位选择
                jobvalue: '',
                joboptions: [{
                    value: '选项1',
                    label: '职位一'
                }, {
                    value: '选项2',
                    label: '职位二'
                }, {
                    value: '选项3',
                    label: '职位三'
                }],

                //直属上级姓名选择
                namesuperiorvalue: '',
                namesuperioroptions: [{
                    value: '选项1',
                    label: '张三'
                }, {
                    value: '选项2',
                    label: '李四'
                }, {
                    value: '选项3',
                    label: '王二'
                }],

                ruleForm: {
                    num:'',
                    name: '',
                    sex:'',
                    department:'',
                    Superior:'',
                    date1: '',
                    IsFile: false,
                    tel:'',
                    email:'',
                    qq:'',
                    age:'',
                    IDnumber:'',
                    DegreeEducation:'',
                    Nativeplace:'',
                    address:'',
                    salary:'',
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
