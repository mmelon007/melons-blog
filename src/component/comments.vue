<template>
  <div id="comments">
    <div v-for="(comment, index) in getCommentById(id)" :key="index">
      {{ getUserInfoById(comment.dialog.userId) }}
      <div>
        {{ comment.dialog.content }}
        <div v-for="reply in comment.dialog.replys" :key="reply.replyId">
            {{ reply.content }} <br/>
            {{ reply.time }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters(["getCommentById", "getUserInfoById"])
  },
  data(){
    return {
    }
  }
};
</script>

<style lang="scss" scoped></style>
