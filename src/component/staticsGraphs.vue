<template>
  <div id="statics-graphs">
    <div class="graph" id="stacked-line-graph"></div>

    <div class="graph" id="dynamic-mixed-line-and-bar"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        title: {
          text: "多重折线图",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
  mounted(){
    this.drawGraph("stacked-line-graph");
  },
  methods: {
    drawGraph(domId){
        let chartDom = document.getElementById(domId);
        let chart = this.$echarts.init(chartDom);
        this.option && chart.setOption(this.option);
    }
  }
};
</script>

<style lang="scss" scoped>
#statics-graphs {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
  .graph {
    height: 400px;
  }
}
</style>
