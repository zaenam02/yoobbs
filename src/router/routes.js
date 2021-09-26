import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'NoAuthLogin',
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Login.vue')
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "about" */ '../views/member/Join.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../views/Error.vue')
  }
]

export default routes;