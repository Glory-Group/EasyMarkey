const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/index.vue")
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home/index.vue")
  },
  {
    path: '/brandDetail',
    name: 'brandDetail',
    component: () => import("../views/home/brandDetail.vue")
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import("../views/home/goods.vue")
  },
  {
    path: '/categorys',
    name: 'categorys',
    component: () => import("../views/home/categorys.vue")
  },
  {
    path: '/topic',
    name: 'topic',
    component: () => import("../views/topic/index.vue")
  },
  {
    path: '/topicDetail',
    name: 'topicDetail',
    component: () => import("../views/topic/topicDetail.vue")
  },
  {
    path: '/catelog',
    name: 'catelog',
    component: () => import("../views/catelog/index.vue")
  },
  {
    path: '/goodsSearch',
    name: 'goodsSearch',
    component: () => import("../views/catelog/goodsSearch.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import("../views/cart/index.vue")
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import("../views/mine/index.vue")
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import("../views/mine/collect.vue")
  },
  {
    path: '/address',
    name: 'address',
    component: () => import("../views/mine/address.vue")
  },
  {
    path: "/",
    redirect: "/login"
  }
]
export default routes;