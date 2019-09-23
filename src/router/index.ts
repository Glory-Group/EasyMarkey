import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes"
Vue.use(Router)

let Routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// Routes.beforeEach((to,from,next)=>{
// console.log(to,"to")
// })
export default Routes;