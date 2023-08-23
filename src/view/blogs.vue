<template>
    <div>
        <blog-list v-if="!searchInput" :blogs="getAllBlogs"></blog-list>
        <blog-list v-else :blogs="getBlogBySearchInput(searchInput)"></blog-list>
    </div>
</template>

<script>
import blogList from '@/component/blogList.vue';
import { mapGetters } from 'vuex';

export default{
    data(){
        return {
            searchInput: this.$route.params.searchInput
        }
    },
    components: {
        "blog-list": blogList
    },
    computed: {
        ...mapGetters(["getBlogBySearchInput", "getAllBlogs"])
    }
}

</script>

<style lang="scss" scoped></style>