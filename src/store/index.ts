import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import login from "./modules/login"
import topic from "./modules/topic"
import goods from "./modules/goods"
import catelog from "./modules/catelog"
import shopCar from "./modules/shopCar"
import collect from "./modules/collect"
import address from "./modules/address"
import category from "./modules/caregory"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    topic,
    home,
    goods,
    catelog,
    shopCar,
    collect,
    address,
    category
  }
})
