<template>
  <div id="comments">
    <div
      class="comment-box"
      v-for="(comment, index) in getCommentById(id)"
      :key="index"
    >
      <img
        class="user-avarta"
        :src="getUserInfoById(comment.dialog.userId).userAvarta"
      />
      <p class="user-name">
        {{ getUserInfoById(comment.dialog.userId).userName }}
      </p>
      <p class="comment-time">{{ comment.dialog.time }}</p>
      <p class="comment-content">{{ comment.dialog.content }}</p>
      <div
        class="reply-box"
        v-for="(reply, index) in comment.dialog.replys"
        :key="index"
      >
        <img
          class="user-avarta"
          :src="getUserInfoById(reply.userId).userAvarta"
        />
        <p class="user-name">{{ getUserInfoById(reply.userId).userName }}</p>
        <p class="reply-time">{{ reply.time }}</p>
        <p class="reply-content">{{ reply.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["getCommentById", "getUserInfoById"]),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
