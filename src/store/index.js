import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actios.js'
import modules from './modules.js'

import getters from './getters.js'

Vue.use(Vuex)

const state = {
    buycar : [] //购物车中数据
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
