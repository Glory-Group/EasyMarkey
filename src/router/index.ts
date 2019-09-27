import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes"
Vue.use(Router)

let Routes = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Routes.beforeEach((to:any, from:any, next:any) => {
  if (to.meta.requireAuth) {
      if (window.localStorage.getItem("token")) {
          next()
      } else {
          next({
              path: "/login"
          })
      }
  } else {
      next()
  }
})

export default Routes;