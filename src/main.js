import Vue from "vue";
import App from "./App.vue";
import SuiVue from "semantic-ui-vue";

import "semantic-ui-css/semantic.min.css";
import router from "./router";

Vue.config.productionTip = process.env.NODE_ENV !== "production";
Vue.use(SuiVue);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

