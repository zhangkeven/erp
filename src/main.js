import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './util/rem'
import './assets/style/base.scss'
import './assets/style/mixin.scss'
import './assets/style/variable.scss'
import zlToast from '@/components/extends/zlToast' // 轻提示
Vue.use(zlToast)
import zlLoading from '@/components/extends/loading'

Vue.use(zlLoading)
import zlDialog from '@/components/extends/zlDialog'

Vue.use(zlDialog)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
