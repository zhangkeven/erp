<template>
    <div id="UserRoleAdd">
        <Breadcrumb/>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm globalForm">
            <div class="formWrapTwo">
                <div class="formLeft">
                    <el-form-item label="角色名称" prop="rolename">
                        <el-input v-model="ruleForm.rolename"></el-input>
                    </el-form-item>
                    <el-form-item label="父级角色" prop="parentRole">
                        <el-select v-model="value" filterable placeholder="请选择角色">
                            <el-option
                                    v-for="item in parentRoleoptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="菜单权限" prop="IsFile">
                        <span @click="menuBtn" class="setBtn btn">设置</span>
                    </el-form-item>

                    <el-form-item label="操作权限" prop="IsFile">
                        <span @click="operaBtn" class="setBtn btn">设置</span>
                    </el-form-item>

                    <el-form-item label="数据权限" prop="IsFile">
                        <span @click="dataBtn" class="setBtn btn">设置</span>
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
        name: "UserRoleAdd",
        components: {
            Breadcrumb
        },
        data() {
            return {
                menuData: [{//权限-菜单设置-选项
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                menuProps: {
                    children: 'children',
                    label: 'label'
                },

                //父级角色选择
                parentRoleoptions: [{
                    value: '选项1',
                    label: '角色一'
                }, {
                    value: '选项2',
                    label: '角色二'
                }, {
                    value: '选项3',
                    label: '角色三'
                }],
                value: '',

                ruleForm: {
                    rolename:'',
                    parentRole: '',
                    department:'',
                    pass:'',
                    role:'',
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
            },
            //菜单权限
            menuBtn(){
                this.$zlDialog({
                    TreeTitle:'菜单权限设置',
                    popupTypeName:'menuBtn',
                    menuData:this.menuData,
                     menuProps:this.menuProps,
                    menuTreeConfirm:(data)=>{
                         console.log(4564,data);
                        this.$zlDialog.close()
                    },
                    cancelbox: () => {
                    }
                })
            },
            //操作权限
            operaBtn(){
                this.$zlDialog({
                    TreeTitle:'操作权限设置',
                    popupTypeName:'operaBtn',
                    operaData:this.operaData,
                    operaProps:this.operaProps,
                    operaTreeConfirm:(data)=>{
                        console.log(4564,data);
                        this.$zlDialog.close()
                    },
                    cancelbox: () => {
                    }
                })
            },
            //数据权限
            dataBtn(){

            }
        }
    }
</script>
