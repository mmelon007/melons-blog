<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import header from "./component/header.vue";
import footer from "./component/footer.vue";
import { mapActions } from "vuex";

export default {
  components: {
    "blog-header": header,
    "blog-footer": footer,
  },
  methods: {
    ...mapActions(["initialBlogsData"]),
  },
  created() {
    this.initialBlogsData();
  },
};
</script>

<style>
#app {
  width: 1440px;
}
</style>
