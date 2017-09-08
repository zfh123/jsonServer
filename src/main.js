// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'

require('./static/js/jquery-2.2.3.min.js')
require('./static/js/rem.js')
require('./static/js/swiper-3.3.1.min.js')
Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
require('./appConfig.js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
