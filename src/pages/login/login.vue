<template>
    <div id="login">
        <div class="logo">
        </div>
        <div class="content-login">
            <div class="top">
                登录系统
            </div>
            <div class="bottom">
                <div class="input">
                    <el-input placeholder="请输入用户名" v-model="loginForm.userName" clearable>
                    </el-input>
                </div>
                <div class="input">
                    <el-input placeholder="请输入密码" v-model="loginForm.password" clearable show-password>
                    </el-input>
                </div>
                <div class="btn-login">
                    <span @click="login" class="btn">登录</span>
                    <!--					<span>注册用户</span>-->
                </div>
                <div class="btn-login member-word">
					<span>
						<el-checkbox v-model="meberword">记住密码</el-checkbox>
					</span>
                    <span>忘记密码 ?</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AxiosUtil from '@/util/axiosutil'
    import Storage from '@/util/setStorage'
    export default {
        data() {
            return {
                meberword: false,
                loginForm: {
                    userName: 'admin',
                    password: '123456'
                },
            }
        },
        methods: {
            //登陆跳转
            login(){
            	let _this = this;
            	if (this.loginForm.username === '' || this.loginForm.password === '') {
            		setTimeout(()=>{
            			this.$zlDialog({
            			  contentText: '账号或密码不能为空！',
            			  cancelText: '确定',
            			  cancel: () => {//关闭弹出框
            			  }
            			})

            		},500)
            	}else {
                    this.$zlLoading('正在登录...')
                    let data = this.loginForm //参数
                    AxiosUtil.post({
                        url: 'login',
                        data: data,
                    }).then(res => {
                        if (res) {
                            let storage = new Storage();
                            storage.setItem({
                                expires: 20000000,//设置过期时间
                                name: "Token",
                                value: 'Bearer ' + res.Token,
                            })
                            this.$router.push({
                                path:'/main'
                            })
                        }
                        this.$zlLoading.close()

                    }).catch(err => {
                        this.$zlLoading.close()
                    })
            	}

            }
        }
    }

</script>
<style lang="scss">
    #login {
        .el-input__inner {
            height: 30px !important;
            padding: 0 15px;
            font-size: 12px;
            color: #333;
        }
    }
</style>
<style lang="scss" scoped>
    @import "../../assets/style/variable";
    @import "../../assets/style/mixin";
    @import "../../assets/style/base";
    @import "../../assets/style/color";

    #login {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .el-input__inner {
            color: $theme-font-color;
        }

        .el-input.is-active .el-input__inner, .el-input__inner:focus {
            border-color: var(--first-color);
        }

        .content-login {
            width: 360px;
            height: 260px;
            border-radius: 8px;
        }

        .top {
            width: 100%;
            height: 40px;
            line-height: 38px;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        .bottom {
            width: 100%;
            height: calc(100% - 40px);
            padding: 30px 0 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;

            .input {
                width: 240px;
                margin-bottom: 15px;

            }

            .btn-login.member-word {
                margin-top: 15px;
            }

            .btn-login {
                width: 240px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .btn {
                    text-align: center;
                    background-color: $theme-color;
                    color: #FFFFFF;
                    width: 70px;
                    border-radius: 4px;
                }

                span {
                    display: inline-block;
                    height: 30px;
                    line-height: 30px;
                    cursor: pointer;
                    font-size: 12px;
                }

            }

        }
    }

    .el-checkbox__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
</style>
