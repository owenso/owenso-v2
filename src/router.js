import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Error from "./views/Error.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: function() {
          //ability to have randomized titles, in case I feel like being witty. Later.
          const tagArray = [""];
          const selectedWit =
            tagArray[Math.floor(Math.random() * tagArray.length)];
          return `Owens O'Brien - ${selectedWit}`;
        }
      }
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "About Owens"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      name: "404",
      component: Error,
      meta: {
        title: "Move along folks, nothing to see here."
      }
    }
  ]
});
