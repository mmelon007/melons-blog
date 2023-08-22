<template>
  <div id="home">
    <info-slider></info-slider>
    <div class="blog-tabs">
      <div class="tabs-title">Recent</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="All" name="All">
          <blog-list 
          :blogs="getAllBlogs"
          ></blog-list>
        </el-tab-pane>
        <el-tab-pane label="Design Theory" name="Design Theory">
          <blog-list
            :blogs="getBlogsByCategoryName('Design Theory')"
          ></blog-list>
        </el-tab-pane>
        <el-tab-pane label="Tech" name="Tech">
          <blog-list :blogs="getBlogsByCategoryName('Tech')"></blog-list>
        </el-tab-pane>
        <el-tab-pane label="user Interface" name="User Interface">
          <blog-list
            :blogs="getBlogsByCategoryName('User Interface')"
          ></blog-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import infoSlider from "../component/infoSlider.vue";
import blogList from "../component/blogList.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    "info-slider": infoSlider,
    "blog-list": blogList,
  },
  created () {
    this.activeName = "All";
  },
  data() {
    return {
      activeName: "",
    };
  },
  computed: {
    ...mapGetters(["getAllBlogs", "getBlogsByCategoryName"]),
  },
  methods: {
    handleClick: function (tab) {
      this.activeName = tab.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
