<template>
  <div id="blog-detail">
    <div class="info">
      {{ getBlogInfoById(id) }}
    </div>
    <div class="article">
      {{ getBlogArticleById(id) }}
    </div>
    <comments :id="id"></comments>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import comments from "../component/comments.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    comments: comments,
  },
  computed: {
    ...mapGetters(["getBlogArticleById", "getBlogInfoById"]),
  },
};
</script>

<style></style>
