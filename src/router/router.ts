import { ROUTES_NAMES } from "@/const/routesNames";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: ROUTES_NAMES.STARTING_SCREEN,
      component: () => import("@/pages/PageLoading.vue"),
    },
    {
      path: "/base-earth",
      name: ROUTES_NAMES.BASE_EARTH,
      component: () => import("@/pages/PageBaseEarth.vue"),
    },
    {
      path: "/registration",
      name: ROUTES_NAMES.REGISTRATION,
      component: () => import("@/pages/PageRegistration.vue"),
    },
  ],
});

export default router;
