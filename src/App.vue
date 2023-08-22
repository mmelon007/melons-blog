<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './component/header.vue'

export default {
  components: {
    'blog-header': header,
  }
};
</script>

<style></style>
