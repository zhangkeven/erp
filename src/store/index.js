import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import state from './state'
import mutations from './mutations'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  getters,
  actions,
  state,
  mutations,
  modules:{

  }
});

// const store = new Vuex.Store({
//   state: {
//     // 存储token
//     Authorization: localStorage.getItem('Authorization') ?localStorage.getItem('Authorization') : ''
//   },
//
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin (state, user) {
//       state.Authorization = user.Authorization;
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   }
// });
//
// export default store;