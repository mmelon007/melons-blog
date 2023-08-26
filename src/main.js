import Vue from "vue";
import App from "./App.vue";
import "./style/theme.scss";
import "./style/common.css";

import { store } from "./store/store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import VueRouter from "vue-router";
import Routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
