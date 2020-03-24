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
					<el-input placeholder="请输入用户名" v-model="name" clearable>
					</el-input>
				</div>
				<div class="input">
					<el-input placeholder="请输入密码" v-model="password" clearable show-password>
					</el-input>
				</div>
				<div class="btn-login">
					<span @click="login" class="btn">登录</span>
					<span>注册用户</span>
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
	export default {
		data() {
			return {
				name: '', //用户名
				password: '', //密码
				meberword: false,
			}
		},
		methods:{
			login(){
				this.$zlToast('登录成功！')
				setTimeout(()=>{
					this.$zlDialog({
					  contentText: '是否跳转主页？',
					  confirmText: '是',
					  cancelText: '否',
					  loadingText: '跳转中...',
					  confirm: () => {
					    this.$router.push({
					    	path:'/main'
					    }),
						this.$zlDialog.close()
					  },
					  cancel: () => {
					  }
					})
					
				},500)
			}
		}
	}
</script>
<style lang="scss">
	#login{
		.el-input__inner{
			height: 30px !important;
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

		.content-login {
			width: 360px;
			height: 260px;
		}

		.top {
			width: 100%;
			height: 40px;
			line-height: 38px;
			font-size: 14px;
			font-weight: bold;
			text-align: center;
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
			.btn-login.member-word{
				margin-top: 15px;
			}
			.btn-login{
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
				}
			}




		}
	}
</style>
