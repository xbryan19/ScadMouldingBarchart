import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
      
    
  },
  //save to web storage
  plugins : [createPersistedState()]
})