import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import FirstPage from "../components/Landingpage/FirstPage";
import LoginRegister from "../components/LoginRegister";
import Who from "../components/Who";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "firstPage",
    component: FirstPage
  },
  {
    path: "/login",
    name: "login",
    component: LoginRegister
  },
  {
    path: "/who",
    name: "who",
    component: Who
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
