import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import login from "./modules/login"
import topic from "./modules/topic"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    topic,
    home
  }
})
