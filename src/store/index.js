import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import cart from './cart'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //在非生产环境下，使用严格模式
  modules: {
    user,
    cart
  }
})
