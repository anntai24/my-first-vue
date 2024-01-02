import { createRouter, createWebHistory } from 'vue-router';
// 引入方法 方法一
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 路由(自定義)
      path: '/',
      // 葉面名稱(自定義)
      name: 'home',
      // 會使用到的元件
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 當你真的進入此網址的時候 才會讀入
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/calc',
      name: 'calc',
      component: () => import('../views/CalcView.vue'),
    },
  ],
});

export default router;
