import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Error from "./views/Error.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  // base:'http://owenso.local:8000/',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: (function() {
          //ability to have randomized titles, in case I feel like being witty. Later.
          const tagArray = ["Software Engineer"];
          //the witty will come later, promise.
          const selectedWit =
            tagArray[Math.floor(Math.random() * tagArray.length)];
          return `${selectedWit}`;
        })()
      }
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "Who is this guy, anyway?"
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Yeah, but what has he done?"
      }
    },
    {
      path: "*",
      name: "404",
      component: Error,
      meta: {
        title: "Look at how elegantly he handles 404s!"
      }
    }
  ]
});
