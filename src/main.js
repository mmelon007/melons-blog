import Vue from "vue";
import App from "./App.vue";

import "./style/theme.scss";
import "./style/common.css";
import "./style/theme.scss";

import ElementUI from "element-ui";
import "./style/theme/index.css";

import VueRouter from "vue-router";
import Routes from "./routes";

import { store } from "./store/store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
