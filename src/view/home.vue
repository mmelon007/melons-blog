<template>
  <div id="home">
    <info-slider></info-slider>
    <div class="blog-tabs">
      <div class="tabs-title">Recent</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="All" name="All">{{ getAllBlogs }}</el-tab-pane>
        <el-tab-pane label="Design Theory" name="Design Theory">{{  getBlogsByCategoryName("Design Theory") }}</el-tab-pane>
        <el-tab-pane label="Tech" name="Tech">{{  getBlogsByCategoryName("Tech") }}</el-tab-pane>
        <el-tab-pane label="user Interface" name="User Interface">{{  getBlogsByCategoryName("User Interface") }}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import infoSlider from "../component/infoSlider.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    "info-slider": infoSlider,

  },
  data() {
    return {
      activeName: "",
      
    };
  },
  computed: {
    ...mapGetters(["getAllBlogs", "getBlogsByCategoryName"])
  },
  methods: {
    handleClick: function (tab) {
      this.activeName = tab.name;      
    }
  },
};
</script>

<style lang="scss" scoped></style>
