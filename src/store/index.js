import Vue from 'vue'
import Vuex from 'vuex'
import question from './question'
import judge from './judge'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    question,
    judge
  }

})