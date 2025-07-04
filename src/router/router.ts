import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import("@/pages/PageLoading.vue"),
    },
    {
      path: '/pregame',
      component: () => import("@/pages/PagePreGame.vue"),
    },
    {
      path: '/faction-select',
      component: () => import("@/pages/PageFactionSelect.vue"),
    },
  ]
});

export default router;
