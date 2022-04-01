/* eslint-disable @typescript-eslint/no-var-requires */
import { createRouter, createWebHashHistory } from 'vue-router'
// import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import options from './config'
NProgress.configure({ showSpinner: false })

const routes = options.routes
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// router.beforeEach((_to, _form, _next) => {
//   NProgress.start()
//   if (_to.path === '/login') {
//     NProgress.done()
//     _next()
//   } else if (getToken()) {
//     /* has token */
//     if (_to.path === '/login') {
//       _next({ path: '/Home' })
//       NProgress.done()
//     } else {
//       // _next({ ..._to, replace: true }) // hack方法 确保addRoutes已完
//     }
//   } else {
//     _next()
//     // _next({ path: '/login' }) // 否则全部重定向到登录页
//     NProgress.done()
//   }
// })

export default router
