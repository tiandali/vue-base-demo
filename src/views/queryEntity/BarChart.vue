<template>
  <div class="container">
    <div :id="id" :class="className" :style="{height:height,width:width}" />
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "BarChart",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    id: {
      type: String,
      default: "BarChart"
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
      this.chart.setOption({
        backgroundColor: "#1D2024",
        color: ["#199475", "#61a0a8", "#d48265", "#91c7ae", "#749f83"],
        grid: {
          left: "10%",
          bottom: "20%"
        },
        title: {
          show: true,
          text: "同类项分布对比",
          right: "30px",
          top: "10px",
          textStyle: {
            color: "#fff",
            fontSize: 12,
            fontWeight: 400
          }
        },
        xAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#5D5D5F"
            }
          },

          data: ["Mon", "Tue", "Wed", "Thu", "Fri"]
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#5D5D5F"
            }
          }
        },
        series: [
          {
            data: [9, 3, 6, 9, 5],
            type: "bar",
            barWidth: 8
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