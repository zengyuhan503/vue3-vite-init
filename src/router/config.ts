/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// 路由配置
import login from '@/pages/login/index.vue'
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      meta: {
        keepAlive: false
      },
      component: login
    },
  ]
}

export default options
