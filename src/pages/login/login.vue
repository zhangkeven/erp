<template>
	<div id="login">
		<div class="logo">
		</div>
		<div class="content">
			<div class="top">
				登录
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
				<div class="btn">
					<span @click="login">登录</span>
					<span>注册用户</span>
				</div>
				<div class="member-word">
					<span>
						<el-checkbox v-model="meberword">记住密码</el-checkbox>
					</span>
					<span>忘记密码？</span>
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
					    })
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
	#login {
		.el-input .el-input--suffix {
			height: 30px !important;
		}
	}
</style>
<style lang="scss" scoped>
	@import "../../assets/style/variable";
	@import "../../assets/style/mixin";

	#login {
		width: 100%;
		height: 100%;
		background: #fafdec;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		.content {
			width: 360px;
			height: 260px;
			background: #FFFFFF;
		}

		.top {
			width: 100%;
			height: 40px;
			line-height: 30px;
			font-size: 16px;
			font-weight: bold;
			color: #FFFFFF;
			text-align: center;
			background-color: $theme-color;
		}

		.bottom {
			width: 100%;
			height: calc(100% - 40px);
			padding: 20px 0;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			align-items: center;

			.input {
				width: 240px;
				margin-bottom: 10px;
			}

			.btn {
				width: 240px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				span {
					display: inline-block;
					width: 70px;
					height: 30px;
					line-height: 30px;
				}

				span:first-child {
					text-align: center;
					background-color: $theme-color;
					font-size: 14px;
					color: #FFFFFF;
				}
			}

			.member-word {
				margin-top: 10px;
				width: 240px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}
	}
</style>
