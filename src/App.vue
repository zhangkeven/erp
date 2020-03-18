<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
	import {switchEnvironment} from './config/sysconfig'
	export default{
		methods:{
			appInt(){
			switchEnvironment('uat')
                this.setColor();
			},
            setColor() {
                let storge = window.localStorage
                let firstColor = storge.getItem('firstColor') || '#1E77CB'
                let secondColor = storge.getItem('secondColor') || '#1E77CB'
                document.getElementsByTagName('body')[0].style.setProperty('--first-color', firstColor)
                document.getElementsByTagName('body')[0].style.setProperty('--second-color', secondColor)
            },
		},
		created() {
			this.appInt()
		}
	}
</script>
<style lang="scss">
    @import "./assets/style/mixin";

    #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $theme-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
