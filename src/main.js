import Vue from 'vue'
import App from './App'
import ui from '@/ui'
import uView from '@/uview-ui'
import Page from '@/a/components/page.vue'

Vue.use(commonUtil, app)
Vue.component('page', Page)
Vue.use(uView);
Vue.config.productionTip = false
// #ifdef MP
// 引入uView对小程序分享的mixin封装
Vue.mixin(require('uview-ui/libs/mixin/mpShare.js'))
// #endif
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

import commonUtil from '@/a/utils/commonUtil.js'
import '@/a/index.js'
Vue.use(commonUtil, app)
uni.$u.http.setConfig((config) => {
  /* config 为默认全局配置*/
  config.baseURL = `http://localhost:9000/jeecg-boot`; /* 根域名 */
  // config.baseURL = `http://api3.taojingling.cn/jeecg-boot`; /* 根域名 */
  return config
})
uni.$u.http.interceptors.response.use((response) => {
  if (response.statusCode === 200 && response.data.code === 200) {
    return response.data
  }
  uni.$u.removePage()
}, (error) => {
  uni.$u.removePage()
  return Promise.reject(error)
})
