import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () =>
          import(/* webpackChunkName: "About" */ "./views/about"),
    },
    {
      path: "/about1",
      name: "About1",
      component: () =>
          import(/* webpackChunkName: "About1" */ "./views/about1"),
    },
    {
      path: "/farEast",
      name: "FarEast",
      component: () =>
          import(/* webpackChunkName: "FarEast" */ "./views/farEast"),
    },
    {
      path: "/mediterranean",
      name: "Mediterranean",
      component: () =>
          import(/* webpackChunkName: "Mediterranean" */ "./views/mediterranean"),
    },
    {
      path: "/veganMeat",
      name: "VeganMeat",
      component: () =>
          import(/* webpackChunkName: "VeganMeat" */ "./views/veganMeat"),
    },
    {
      path: "/grain",
      name: "Grain",
      component: () =>
          import(/* webpackChunkName: "Grain" */ "./views/grain"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
          import(/* webpackChunkName: "Contact" */ "./views/contact"),
    },
    {
      path: "/success",
      name: "Success",
      component: () =>
          import(/* webpackChunkName: "Success" */ "./views/Success"),
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
          import(/* webpackChunkName: "NotFound" */ "./views/NotFound"),
    }
  ]
});

export default router;
