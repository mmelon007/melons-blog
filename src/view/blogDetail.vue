<template>
  <div id="blog-detail">
    <div class="info">
      {{ getBlogInfoById(id) }}
    </div>
    <div class="article">
      {{ getBlogArticleById(id) }}
    </div>
    <div class="comment">
      {{ getCommentById(id) }}
    </div>
    <div class="user">
      {{ getUserInfoById(id) }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters([
      "getBlogArticleById",
      "getCommentById",
      "getUserInfoById",
      "getBlogInfoById",
    ]),
  },
};
</script>

<style></style>
