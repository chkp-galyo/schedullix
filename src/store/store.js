import Vue from 'vue'
import Vuex from 'vuex'

import userModule from './user-module.js'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {},
  modules: {
    userModule
  },
  mutations: {},
  getters: {}
})