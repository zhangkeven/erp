import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './util/rem'
import './assets/style/mixin.scss'
import './assets/style/variable.scss'
import './assets/style/base.scss'
import './assets/style/class.scss'
import './assets/style/color.scss'

Vue.use(Header)
import Header from '@/components/Header'//头部
Vue.use(Footer)
import Footer from '@/components/Footer'//底部

Vue.use(NavMenu)
import NavMenu from '@/components/NavMenu'//侧边栏菜单

Vue.use(NavSubMenu)
import NavSubMenu from '@/components/NavSubMenu'//内页子菜单

Vue.use(Breadcrumb)
import Breadcrumb from '@/components/Breadcrumb'//面包屑

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
