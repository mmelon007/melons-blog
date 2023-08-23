<template>
  <div id="blog-list">
    <ul>
      <li v-for="blog in showBlogs" :key="blog.id">
        <div class="blog-date">{{ blog.date }}</div>
        <router-link v-bind:to="'blog/' + blog.id">
          <div class="blog-title">{{ blog.title }}</div>
        </router-link>
        <div class="blog-tags">
          <template v-for="(tag, index) in blog.tags">
            <div v-if="index < 3" :key="index">
              {{ tag }}
            </div>
            <div v-else-if="index == 3" :key="index">
              +{{ blog.tags.length - 3 }}
            </div>
          </template>
        </div>
      </li>
    </ul>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="blogs.length"
      :page-size="pageSize"
      :currentPage="currentPage"
      @prev-click="previousPage"
      @next-click="nextPage"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
  data() {
    return {
      showBlogs: [],
      currentPage: 1,
      pageSize: 4,
    };
  },
  watch: {
    currentPage: function () {
      let startIndex = (this.currentPage - 1) * this.pageSize;
      this.showBlogs = this.blogs.slice(startIndex, startIndex + this.pageSize);
    },
  },
  created() {
    this.showBlogs = this.blogs.slice(0, this.pageSize);
  },
  methods: {
    previousPage: function () {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage: function () {
      if (this.currentPage < this.blogs.length) {
        this.currentPage++;
      }
    },
    handleCurrentChange: function (val) {
      this.currentPage = val;
    },
  },
};
</script>

<style lang="scss" scoped></style>
