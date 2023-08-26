<template>
  <div id="news">
    <label>{{ listName }}</label>
    <ul>
      <li
        v-for="(news, index) in newsList"
        :key="index"
        @click="handleNewsClicked(news.newsID)"
      >
        {{ news.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["newsList", "listName"],
  methods: {
    ...mapMutations(["checkNews"]),
    handleNewsClicked: function (id) {
      let data = { listName: this.listName, newsId: id };
      this.checkNews(data);
      alert(this.listName + " " + id + "is checked!");
    },
  },
};
</script>

<style scoped>
label {
  font-size: 20px;
}
</style>
