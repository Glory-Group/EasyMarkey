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
    path: '/brandDetail/:id',
    name: 'brandDetail',
    isGuard:true,
    component: () => import("../views/home/brandDetail.vue")
  },
  {
    path: '/goods/:id',
    name: 'goods',
    isGuard:true,
    component: () => import("../views/home/goods.vue")
  },
  {
    path: '/categorys/:id',
    name: 'categorys',
    isGuard:true,
    component: () => import("../views/home/categorys.vue")
  },
  {
    path: '/topic',
    name: 'topic',
    isGuard:true,
    component: () => import("../views/topic/index.vue")
  },
  {
    path: '/topicDetail/:id',
    name: 'topicDetail',
    isGuard:true,
    component: () => import("../views/topic/topicDetail.vue")
  },
  {
    path: '/catelog',
    name: 'catelog',
    isGuard:true,
    component: () => import("../views/catelog/index.vue")
  },
  {
    path: '/goodsSearch',
    name: 'goodsSearch',
    isGuard:true,
    component: () => import("../views/catelog/goodsSearch.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    isGuard:true,
    component: () => import("../views/cart/index.vue")
  },
  {
    path: '/mine',
    name: 'mine',
    isGuard:true,
    component: () => import("../views/mine/index.vue")
  },
  {
    path: '/collect',
    name: 'collect',
    isGuard:true,
    component: () => import("../views/mine/collect.vue")
  },
  {
    path: '/address',
    name: 'address',
    isGuard:true,
    component: () => import("../views/mine/address.vue")
  },
  {
    path: "/",
    redirect: "/home"
  }
]
export default routes;