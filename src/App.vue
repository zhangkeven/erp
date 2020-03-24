<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created() {
  	this.setColor()
  },
  data(){
	  return{
		  checked:false
	  }
  },
  methods:{
	  setColor() {
	    let storge = window.localStorage
	    let firstColor = storge.getItem('firstColor') || '#1d7c2a'
	    let secondColor = storge.getItem('secondColor') || '#00a248'
	    document.getElementsByTagName('body')[0].style.setProperty('--first-color', firstColor)
	    document.getElementsByTagName('body')[0].style.setProperty('--second-color', secondColor)
	  },
  }
}
</script>

<style scoped lang="scss">
    #app {
      width: 100%;
      height: 100%;
    }

</style>
