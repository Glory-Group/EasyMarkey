import Vue from 'vue'
import Vuex from 'vuex'
import login from "./modules/login"
import topic from "./modules/topic"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    topic
  }
})
