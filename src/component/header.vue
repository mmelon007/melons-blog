<template>
  <div id="blog-header">
    <div class="logo">Melon</div>
    <nav>
      <ul class="header-links">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/blogs" exact>Blogs</router-link></li>
        <li><router-link to="/contact" exact>Contact Us</router-link></li>
        <li><router-link to="/" exact>More</router-link></li>
      </ul>
    </nav>
    <el-input placeholder="请输入内容" v-model="searchInput">
      <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
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
  methods: {
    handleSearch: function() {
      this.$router.push({ path: `/blogs/${this.searchInput}` });
    }
  }
};
</script>

<style></style>
