// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

//国际化使用规则
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

Vue.config.productionTip = false

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import echarts from 'echarts' 

// 点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

// 请求数据用
import axios from 'axios'
Vue.prototype.$ajax = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
