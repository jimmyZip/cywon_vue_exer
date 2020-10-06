import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/admin/Admin.vue'
import ProductList from '../views/admin/ProductList.vue'
import ProductInsert from '../views/admin/ProductInsert.vue'
import ProductEdit from '../views/admin/ProductEdit.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
  //Vue가 Router를 사용할 수 있도록 설정
  //Router Instance를 정의

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    /*
      beforeEnter(to, from , next) {
        console.log('beforeEnter : '+'to: ', to, 'from : ', from);
        next('/login');
      }
    */
    children: [
      {
        path: 'list',
        name: 'productlist',
        component: ProductList
      },
      {
        path: 'insert',
        name: 'productinsert',
        component: ProductInsert
      },
      {
        path: 'edit',
        name: 'productedit',
        component: ProductEdit
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
    //404 notfound 대응
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
