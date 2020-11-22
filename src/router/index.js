import Vue from 'vue';
import Router from "vue-router";

const Home = () => import('components/content/table/home/Home');
const Category = () => import('components/content/table/category/Category');
const Cart = () => import('components/content/table/cart/Cart');
const Profile = () => import('components/content/table/profile/Profile');

Vue.use(Router);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

router.afterEach((to,from) => document.title = to.meta.title);

export default router
