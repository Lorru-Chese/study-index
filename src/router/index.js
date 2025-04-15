import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/Home.vue';
import AboutView from '../components/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 的歷史模式
  routes,
});

export default router;