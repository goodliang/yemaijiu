import Vue from 'vue'

import App from './App'

import store from './store/index.js'
import axios from './utils/request.js'
import {
	api
} from '@/common/http.api.js'
import {
	handlePromise
} from './utils/utils.js'

// 挂载全局方法
Vue.prototype.$axios = axios // request 请求拦截
Vue.prototype.$api = api //接口 URL
Vue.prototype.$await = handlePromise // 处理 await

// jsonp 跨域
import vueJsonp from 'vue-jsonp'
Vue.use(vueJsonp)

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/store/$u.mixin.js')
Vue.mixin(vuexStore)

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
	store,
	...App
})

app.$mount()
