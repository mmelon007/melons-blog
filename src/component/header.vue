<template>
  <div id="blog-header">
    <div class="header1 header-item logo">Melon</div>
    <nav class="header-item">
      <ul class="header-links">
        <li><router-link to="/" class="tabs" exact>Home</router-link></li>
        <li><router-link to="/blogs" class="tabs" exact>Blogs</router-link></li>
        <li>
          <router-link to="/contact" class="tabs" exact>Contact Us</router-link>
        </li>
        <li><router-link to="/" class="tabs" exact>More</router-link></li>
      </ul>
    </nav>
    <div class="header-item">
      <input class="search-input" placeholder="Search" v-model="searchInput" />
      <button @click="handleSearch" class="search-btn"><img /></button>
    </div>
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
    handleSearch: function () {
      if (this.searchInput)
        this.$router.push({ path: `/blogs/${this.searchInput}` });
      else this.$router.push({ path: `/blogs` });
    },
  },
};
</script>

<style lang="scss" scoped>
#blog-header {
  margin: 96px auto;
  width: 1120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .header-item {
    display: inline-block;
  }
  .logo {
    width: 288px;
  }
  ul {
    display: grid;
    column-gap: 48px;
    grid-template-columns: repeat(4, auto);
  }
  li {
    list-style-type: none;
    display: inline-block;
    text-align: center;
  }
}
</style>
