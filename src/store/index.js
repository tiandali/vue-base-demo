import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  login
})

export default store
