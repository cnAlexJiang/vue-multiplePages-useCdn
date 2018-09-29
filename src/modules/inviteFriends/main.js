import Vue from 'vue'

import App from './App'

// 移动端适配
import 'amfe-flexible'
// 解决移动端300ms点击延迟
import vueTap from 'v-tap' // 引入插件
Vue.use(vueTap) // 全局注册
Vue.use({
  install(Vue) {
    Vue.component('customBtn', () => import('../../components/customBtn.vue'))
    Vue.component('eventDescription', () => import('../../components/eventDescription.vue'))
    Vue.component('countDown', () => import('../../components/countDown.vue'))
    Vue.component('asistMember', () => import('../../components/asistMember.vue'))
  }
})

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import '../../common/styles/common.less'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
