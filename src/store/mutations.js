const mutations = {
	SAVE(state, obj){
	  let data = obj.value
	  for (let key in data) {
	    state[obj.item][key] = data[key]
	  }
	},
}
export default mutations