import HomePage   from './pages/home.vue';
import Categories from './pages/category.vue';
import AboutPage  from './pages/about.vue';
import FormPage   from './pages/form.vue';
import Product    from  './pages/product.vue';
import Cart    from  './pages/cart.vue';
import Btn    from  './pages/Btn.vue';
import Login      from './pages/login.vue';
import Sort      from './pages/sort.vue';
import Filter      from './pages/filter.vue';
import DynamicRoutePage from './pages/dynamic-route.vue';
import NotFoundPage from './pages/not-found.vue';
import PanelLeftPage from './pages/panel-left.vue';
import PanelRightPage from './pages/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },

  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/Btn/',
    component: Btn,
  },
  {
    path: '/sort/',
    component: Sort,
  },
  {
    path: '/filter/',
    component: Filter,
  },
  {
    path: '/category/:pathId',
    component: Categories,
  },
  {
    path: '/cart/',
    component:Cart,
  },
  {
    path:'/product/:pathId',
    component:Product,
  },
  {
    path: '/login/',
    component:Login,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
