<template>
  <div id="home">
    <info-slider class="info-slider"></info-slider>
    <div class="blog-tabs">
      <div class="tabs-title header1">Recent</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="All" name="All">
          <blog-list :categoryName="'All'"></blog-list>
        </el-tab-pane>
        <el-tab-pane label="Design Theory" name="Design Theory">
          <blog-list :categoryName="'Design Theory'"></blog-list>
        </el-tab-pane>
        <el-tab-pane label="Tech" name="Tech">
          <blog-list :categoryName="'Tech'"></blog-list>
        </el-tab-pane>
        <el-tab-pane label="user Interface" name="User Interface">
          <blog-list :categoryName="'User Interface'"></blog-list>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import infoSlider from "../component/infoSlider.vue";
import blogList from "../component/blogList.vue";


export default {
  components: {
    "info-slider": infoSlider,
    "blog-list": blogList,
  },
  created() {
    this.activeName = "All";
  },
  data() {
    return {
      activeName: "",
    };
  },
  methods: {
    handleClick: function (tab) {
      this.activeName = tab.name;
    },
  },
};
</script>

<style lang="scss" scoped>
#home {
  display: grid;
  grid-template-columns: 288px 736px;
  column-gap: 96px;
  margin: 96px auto;
  width: 1120px;
  .tabs-title {
    margin-bottom: 24px;
  }
  .blog-tabs {
    height: 900px;
  }
  /deep/ .el-tabs__item.is-active {
    color: #474747;
  }
  /deep/ .el-tabs__item {
    color: #8a8a8a;
  }
  /deep/ .el-tabs__item:hover {
    color: #474747;
  }
  /deep/ .el-tabs__active-bar {
    background-color: #777777;
  }
}
</style>
