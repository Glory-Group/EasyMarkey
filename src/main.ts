import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Element from "./components/element/index"//全局挂载组件
import lazyLoad from "vue-lazyload"//图片懒加载
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(lazyLoad,{preLoad:1.3,loading:"https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg"})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
