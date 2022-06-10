import Vue from 'vue'
import App from './App'
import ui from '@/ui'
import uView from '@/uview-ui'
import Page from '@/a/components/page.vue'
import {
  router,
  RouterMount
} from './router' //路径换成自己的
Vue.use(router)
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
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
RouterMount(app, router, '#app')
// #endif

// #ifndef H5
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif

import commonUtil from '@/a/utils/commonUtil.js'
import '@/a/index.js'
Vue.use(commonUtil, app)
uni.$u.http.setConfig((config) => {
  /* config 为默认全局配置*/
  // config.baseURL = `http://localhost:9000/jeecg-boot`; /* 根域名 */
  // config.baseURL = `http://api3.taojingling.cn/jeecg-boot`; /* 根域名 */
  config.baseURL = `/jb`; /* 根域名 */
  return config
})
uni.$u.http.interceptors.response.use((response) => {
  if (response.statusCode === 200 && response.data.code === 200) {
    return response.data
  }
}, (error) => {
  return Promise.reject(error)
})
