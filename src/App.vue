<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import header from './component/header.vue'
import footer from './component/footer.vue'

export default {
  components: {
    'blog-header': header,
    'blog-footer': footer
  }
};
</script>

<style></style>
