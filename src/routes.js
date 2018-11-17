import HomePage   from './pages/home.vue';
import Category from './pages/category.vue';
import AboutPage  from './pages/about.vue';
import FormPage   from './pages/form.vue';
import Product    from  './pages/product.vue';
import Login      from './pages/login.vue';
import Sort      from './pages/sort.vue';
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
    path: '/sort/',
    component: Sort,
  },

  {
    path: '/category/:pathId',
    component: Category,
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
