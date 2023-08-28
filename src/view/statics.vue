<template>
    <div id="statics">
        <info-slider></info-slider>
        <statics-graphs></statics-graphs>
    </div>
</template>

<script>
import infoSlider from '@/component/infoSlider.vue';
import staticsGraphs from '@/component/staticsGraphs.vue'

export default{
    components: {
        'info-slider': infoSlider,
        'statics-graphs': staticsGraphs
    }
}

</script>

<style lang="scss" scoped>
#statics {
  display: grid;
  grid-template-columns: 288px 736px;
  column-gap: 96px;
  margin: 96px auto;
  width: 1120px;
}
</style>