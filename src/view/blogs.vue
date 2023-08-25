<template>
  <div id="blogs">
    <div id="search-result">
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
        :total="total"
        :page-size="pageSize"
        :currentPage="currentPage"
        @prev-click="previousPage"
        @next-click="nextPage"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 4,
      startIndex: 0,
    };
  },
  computed: {
    ...mapGetters(["getBlogBySearchInput", "getAllBlogs"]),
    searchInput: function() {
      return this.$route.params.searchInput;
    },
    showBlogs: function() {
      if (this.searchInput) {
        return this.getBlogBySearchInput(this.searchInput).slice(
          this.startIndex,
          this.startIndex + this.pageSize
        );
      }
      return this.getAllBlogs.slice(
        this.startIndex,
        this.startIndex + this.pageSize
      );
    },
    total: function() {
      if (this.searchInput) {
        return this.getBlogBySearchInput(this.searchInput).length;
      }
      return this.getAllBlogs.length;
    },
  },
  created() {
    if (this.searchInput) {
      this.showBlogs = this.getBlogBySearchInput(this.searchInput).slice(
        this.startIndex,
        this.startIndex + this.pageSize
      );
      this.total = this.getBlogBySearchInput(this.searchInput).length;
    } else {
      this.showBlogs = this.getAllBlogs.slice(
        this.startIndex,
        this.startIndex + this.pageSize
      );
      this.total = this.getAllBlogs.length;
    }
  },
  watch: {
    currentPage: function () {
      this.startIndex = (this.currentPage - 1) * this.pageSize;
    }
  },
  methods: {
    previousPage: function () {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage: function () {
      if (this.currentPage < this.total) {
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
#blogs {
  margin: auto;
  width: 735px;
}
#search-input {
  ul {
    padding-top: 40px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    row-gap: 96px;
    margin-bottom: 92px;
  }
  hr {
    margin-top: 48px;
    background-color: #dfdfdf;
    color: #dfdfdf;
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
}
</style>
