import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Admin from '../views/Admin.vue'
import Admin from '../views/admin/Admin.vue'
import ProductList from '../views/admin/ProductList.vue'
import ProductInsert from '../views/admin/ProductInsert.vue'
import ProductEdit from '../views/admin/ProductEdit.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

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
    //nested route
    children: [
      {path: 'list', name: 'productlist', component: ProductList},
      {path: 'insert', name: 'productinsert', component: ProductInsert},
      {path: 'edit/:id', name: 'productedit', component: ProductEdit}
      //edit/:id에서 :id는 동적으로 적용
        // dynamic routing의 제품리스트에서 다루는 코드
    ],
    beforeEnter(to, from, next) {
      console.log('beforeEnter : '+'to : ', to, 'from : ', from);
      next('/login');
    }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
