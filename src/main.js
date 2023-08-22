import Vue from "vue";
import App from "./App.vue";

import "./style/theme.scss";
import "./style/common.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import VueRouter from "vue-router";
import Route from "./route";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueRouter);
const router = new VueRouter({
  route: Route,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
