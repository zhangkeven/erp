<template>
  <div class="about">
    <h1>{{name}}</h1>
	  <div class="demo">
            <p>ceshi 测试</p>

	  </div>
	  <div class="color-page">
		  <input v-model="firstColor"/>
		  <!-- <input v-model="secondColor"/> -->
		  <div class="btn" @click="saveColor">保存</div>
	  </div>
  </div>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import AxiosUtil from '@/util/axiosutil'
	import commonUtil from '@/util/commonUtil'
	export default {
		data() {
			return {
				firstColor: '#1D96FF',
				secondColor: '#1D96FF',
				first: localStorage.getItem('firstColor'),
				second: localStorage.getItem('secondColor'),
			}
		},

		computed: {
			...mapState({
				name: state => state.main.name
			})
		},
		methods: {
			saveColor() {
				if (this.first == this.firstColor && this.second == this.secondColor) {
					this.$zlToast({
						message: '您未修改，返回就行'
					})
					return
				} else {
					commonUtil.setThemeColor(this.firstColor) //修改主题色
					this.$zlToast({
						message: '设置成功'
					})
				}
			},
			getData() {
				
			}
		},
		created() {
			this.getData()
		},
		mounted() {

		}
	}
</script>
<style lang="scss" scoped>
	@import "../assets/style/variable";
	@import "../assets/style/mixin";
	.color-page {
		.demo {
			width: 200px;
			height: 20rem;
			background: red;
		}

		.btn {
			width: 100px;
			height: 48px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $theme-color3;
			color: #ffffff;
		}
	}
</style>
