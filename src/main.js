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
Vue.use(commonUtil, app)
