<template>
  <div id="app-header">
    <div class="logo">Melon</div>
    <ul class="header-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/blogs">Blogs</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
      <li><router-link to="/">More</router-link></li>
    </ul>
    <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-search"
      v-model="searchInput"
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
};
</script>

<style></style>
