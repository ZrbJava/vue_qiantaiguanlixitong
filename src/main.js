// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'normalize.css'

import axios from 'axios'  // 不是vue插件, 导入之后只能在当前模块使用
import api, { domain } from './js/api.js' 

import './less/index.less'
import './assets/css/style.css'

Vue.use(ElementUI)

// 配置默认域名, 这样请求的时候就不用在url里每次手动加域名了
axios.defaults.baseURL = domain;
// 因为我们调用的接口跨域了, 默认情况下接口给我们设置cookie无效, 为了让它有效, 我们必须添加此配置
axios.defaults.withCredentials = true;
// 为了使用方便, 把axios和api添加到Vue原型, 将来vue组件就可以直接使用
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
