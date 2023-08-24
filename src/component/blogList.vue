<template>
  <div id="blog-list">
    <ul>
      <li v-for="(blog, index) in showBlogs" :key="blog.id" class="blog-item">
        <div class="blog-date small-text">{{ blog.date }}</div>
        <br />
        <router-link v-bind:to="'/blog/' + blog.id">
          <div class="blog-title header1">{{ blog.title }}</div>
        </router-link>
        <div class="blog-tags">
          <template v-for="(tag, index) in blog.tags">
            <div v-if="index < 3" :key="index" class="tags">
              {{ tag }}
            </div>
            <div v-else-if="index == 3" :key="index" class="tags">
              +{{ blog.tags.length - 3 }}
            </div>
          </template>
        </div>
        <hr v-if="index % 3 != 0 || index === 0" />
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

<style lang="scss" scoped>
ul {
  padding-top: 40px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 96px;
  margin-bottom: 92px;
}
hr {
  margin-top: 48px;
  background-color: #DFDFDF;
  color: #DFDFDF;
  height: 1px;
  border: 0;
}
.blog-item {
  height: 94px;
  width: 734px;

  div {
    display: inline-block;
  }
  .blog-title {
    width: 544px;
    height: 60px;
    text-align: left;
    vertical-align: top;
  }
  .blog-tags {
    width: 190px;
    text-align: right;
    div {
      margin-left: 4px;
      margin-top: 4px;
    }
  }
}
</style>
