<template>
  <div class="about">
    <h1>{{name}}</h1>
	  <div class="demo">
            <p>ceshi 测试</p>

	  </div>
	  <div class="color-page">
		  <input v-model="firstColor"/>
		  <input v-model="secondColor"/>
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
					localStorage.setItem('firstColor', this.firstColor)
					localStorage.setItem('secondColor', this.secondColor)
					document.getElementsByTagName('body')[0].style.setProperty('--first-color', this.firstColor);
					document.getElementsByTagName('body')[0].style.setProperty('--second-color', this.secondColor);
					this.$zlToast({
						message: '设置成功'
					})
				}
			},
			getData() {
				AxiosUtil.post({
					data: {
						access_code: '5027ec80-1eb8-47a9-9933-0985a8ba78bb'
					},
					url: 'querySaleRecordForReturn'
				}).then(res => {

				}).catch(err => {

				})
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
