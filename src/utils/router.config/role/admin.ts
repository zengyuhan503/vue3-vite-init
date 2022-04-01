
const options = {
  routes: [
    {
      router: 'exp404',
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404.vue')
    },

  ]
}

export default options
