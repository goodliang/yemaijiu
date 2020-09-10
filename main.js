import Vue from 'vue'
import App from './App'

import axios from './utils/request.js'
import {handlePromise} from './utils/utils.js'


// 挂载全局方法
Vue.prototype.$axios = axios
Vue.prototype.$await = handlePromise

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
