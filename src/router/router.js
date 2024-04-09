import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: () => import("../mainPages/LandingPage.vue"),
    },
    {
      path: "/Display",
      name: "Display",
      component: () => import("../mainPages/Display.vue"),
    },
    {
      path: "/AddUser",
      name: "Add",
      component: () => import("../mainPages/AddUser.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("../mainPages/Video.vue"),
    },
    {
      path: "/update",
      name: "update",
      component: () => import("../mainPages/Updater.vue"),
    },


  ],
});

export default router;
