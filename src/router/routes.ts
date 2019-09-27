const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/index.vue")
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/home/index.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/brandDetail/:id',
    name: 'brandDetail',
    isGuard: true,
    component: () => import("../views/home/brandDetail.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/goods/:id',
    name: 'goods',
    isGuard: true,
    component: () => import("../views/home/goods.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/topic',
    name: 'topic',
    isGuard: true,
    component: () => import("../views/topic/index.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/topicDetail/:id',
    name: 'topicDetail',
    isGuard: true,
    component: () => import("../views/topic/topicDetail.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/catelog',
    name: 'catelog',
    isGuard: true,
    component: () => import("../views/catelog/index.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/goodsSearch',
    name: 'goodsSearch',
    isGuard: true,
    component: () => import("../views/catelog/goodsSearch.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/categorys/:id',
    name: 'categorys',
    isGuard: true,
    component: () => import("../views/catelog/categorys.vue"), meta: {
      requireAuth: true,
  }
  },
  {
    path: '/cart',
    name: 'cart',
    isGuard: true,
    component: () => import("../views/cart/index.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/mine',
    name: 'mine',
    isGuard: true,
    component: () => import("../views/mine/index.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/collect',
    name: 'collect',
    isGuard: true,
    component: () => import("../views/mine/collect.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/address',
    name: 'address',
    isGuard: true,
    component: () => import("../views/mine/address.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: '/topicCommentWrite/:id',
    name: 'addComment',
    isGuard: true,
    component: () => import("../views/comment/addComment.vue"),
    meta: {
      requireAuth: true,
  }
  },
  {
    path: "/",
    redirect: "/home"
  }
]
export default routes;