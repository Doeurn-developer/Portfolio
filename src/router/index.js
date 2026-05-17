import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ProjectView from "../views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about-me",
      component: AboutView,
    },

    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },

    {
      path: "/project",
      name: "project",
      component: ProjectView,
    },
  ],
});

export default router;
