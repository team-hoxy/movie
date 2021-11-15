import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";
import MovieDetail from "../views/MovieDetail.vue";
import Review from "../views/Review.vue";
import Community from "../views/Community.vue";
import Signup from "../views/accounts/Signup.vue";
import Login from "../views/accounts/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/movie",
      name: "Movie",
      component: Movie,
    },
    {
      path: "/movie/:id",
      name: "MovieDetail",
      component: MovieDetail,
    },
    {
      path: "/review",
      name: "Review",
      component: Review,
    },
    {
      path: "/community",
      name: "Community",
      component: Community,
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});
