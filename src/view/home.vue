<template>
  <div id="home">
    <div>TotalUnchecked : {{ getTotalUnchecked }}</div>
    <div class="list-box">
      <news :newsList="getNews1" class="list" :listName="'news01'"></news>
      <news :newsList="getNews2" class="list" :listName="'news02'"></news>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import news from "../component/news.vue";

export default {
  components: {
    news: news,
  },
  computed: {
    ...mapGetters(["getNews1", "getNews2"]),
    getTotalUnchecked(){
      let total = 0;
        for(let i = 0; i < this.getNews1.length; ++ i){
            if(!this.getNews1[i].checked){
                ++total;
            }
        }
        for(let i = 0; i < this.getNews2.length; ++ i){
            if(!this.getNews2[i].checked){
                ++total;
            }
        }
        return total;
    }
  },
};
</script>

<style  scoped>
.list-box {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
}
</style>
