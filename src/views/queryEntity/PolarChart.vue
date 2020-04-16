<template>
  <div class="container">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
</template>
<script>
import echarts from "echarts";
console.log("echarts: ", echarts);

export default {
  name: "PolarChart",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "polarChart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {};
  },
  created() {},

  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      let max = 6;
      let min = 0;
      this.chart.setOption({
        backgroundColor: "#1D2024",
        // color: ["#199475", "#61a0a8", "#d48265", "#91c7ae", "#749f83"],
        grid: {
          left: "5%",
          right: "5%"
        },
        color: ["#7AC231"],
        tooltip: {},
        radar: {
          name: {
            textStyle: {
              color: "#7AC231"
            },
            fontSize: 14
          },
          shape: "circle",
          center: ["50%", "50%"],
          radius: "70%",
          scale: true,
          indicator: [
            {
              name: "分布",
              max: max,
              min: min
            },
            {
              name: "热量",
              max: max,
              min: min
            },
            {
              name: "价值",
              max: max,
              min: min
            },
            {
              name: "单价",
              max: max,
              min: min
            }
          ],
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        polar: {
          center: ["50%", "50%"],
          radius: "70%"
        },
        angleAxis: {
          min: 0,
          max: 360,
          interval: 4,
          clockwise: true,
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        radiusAxis: {
          min: min,
          max: max,
          interval: 2
        },
        series: [
          {
            name: "预算",
            type: "radar",
            areaStyle: {
              opacity: 0.1
            },
            lineStyle: {
              width: 1
            },
            data: [
              {
                value: [5, 1, 4, 4],
                name: "预算分配"
              }
            ]
          }
        ]
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.container {
  display: flex;
  flex: 1;
}
</style>