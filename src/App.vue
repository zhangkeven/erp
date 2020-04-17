<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import commonUtil from '@/util/commonUtil'
export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created() {
  	commonUtil.initColor()  //初始化主题色
  },
  data(){
	  return{
		  checked:false
	  }
  },
  methods:{
	  // setColor() {
	  //
	  // },
  }
}
</script>

<style scoped lang="scss">
    #app {
      width: 100%;
      height: 100%;
    }
</style>
