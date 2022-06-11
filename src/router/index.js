// router.js
import {
  RouterMount,
  createRouter
} from 'uni-simple-router';
const scrollInfo = {};

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [...ROUTES,
    // {
    //   path: '*',
    //   redirect: (to) => {
    //     return {
    //       name: 'index'
    //     }
    //   }
    // },
  ],
  h5: {
    scrollBehavior: (to, from, savedPosition) => {
      const XY = scrollInfo[to.path];
      if (XY) {
        return XY;
      }
      return savedPosition;
    }
  }
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  if (from.meta.keepScroll === true) {
    scrollInfo[from.path] = {
      x: window.scrollX,
      y: window.scrollY
    }
  }
  next();
});
// 全局路由后置守卫
router.afterEach((to, from) => {})

export {
  router,
  RouterMount
}
