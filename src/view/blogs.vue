<template>
    <div id="blogs">
        <search-result :searchInput="searchInput"></search-result>
    </div>
</template>

<script>
import searchResult from '@/component/searchResult.vue';

export default{
    data(){
        return {
            searchInput: this.$route.params.searchInput
        }
    },
    components: {
        "search-result": searchResult
    },
    watch: {
        searchInput : function(){
            
        }
    }
}

</script>

<style lang="scss" scoped>
#blogs{
    margin: auto;
    width: 735px;
}
</style>