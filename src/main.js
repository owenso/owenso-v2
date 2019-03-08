import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";
import VueCarousel from "vue-carousel";
import "semantic-ui-css/semantic.min.css";
import router from "./router";

Vue.config.productionTip = process.env.NODE_ENV !== "production";
Vue.use(SuiVue);
Vue.use(VueCarousel);

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = `Owens O'Brien - ${to.meta.title}`;
  else document.title = `Owens O'Brien`;
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
