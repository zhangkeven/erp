import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './util/rem'
import './assets/style/mixin.scss'
import './assets/style/variable.scss'
import './assets/style/base.scss'

Vue.use(NavMenu)
import NavMenu from '@/components/NavMenu'//侧边栏

Vue.use(Header)
import Header from '@/components/Header'//头部

import zlToast from '@/components/extends/zlToast' // 轻提示
Vue.use(zlToast)

import zlLoading from '@/components/extends/loading'
Vue.use(zlLoading)

import zlDialog from '@/components/extends/zlDialog'//弹出框
Vue.use(zlDialog)

import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
