<template>
  <div class="infoMain">
    <div class="searchArea">
      <el-input v-model="sample" suffix-icon="el-icon-search" size="mini" @change="queryEntity"></el-input>
    </div>
    <div class="infoContent">
      <div class="summaryArea">
        <SummaryArea />
      </div>
      <div class="relationArea">
        <RelationArea />
      </div>
      <div class="chartArea">
        <div class="polarChart">
          <PolarChart />
        </div>
        <div class="lineChart">
          <lineCharts />
        </div>
        <div class="barChart">
          <BarChart />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SummaryArea from "./SummaryArea";
import RelationArea from "./RelationArea";
import PolarChart from "./PolarChart";
import BarChart from "./BarChart";
import lineCharts from "./lineCharts";

export default {
  name: "EntityInfo",
  components: {
    SummaryArea,
    RelationArea,
    PolarChart,
    BarChart,
    lineCharts
  },
  data() {
    return {
      sample: "土豆"
    };
  },
  created() {},
  methods: {
    queryEntity(value) {
      console.log("value: ", value);
      this.sample = value;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.infoMain {
  min-height: calc(100vh - 100px);
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #18191d;
  padding: 0 30px;
  .searchArea {
    position: relative;
    .el-input {
      width: 200px;
      // position: fixed;
      position: absolute;
      top: -60px;
      left: 200px;
      .el-input__inner {
        background: #2a2b31;
        color: #fff;
        border: 0;
      }
    }
  }
  .infoContent {
    display: flex;
    flex: 1;
    .cahrtArea,
    .relationArea,
    .summaryArea {
      display: flex;
      flex-direction: column;
    }
    .summaryArea {
      flex: 1 0 325px;
      margin-right: 30px;
    }
    .relationArea {
      flex: 1 0 515px;
      margin-right: 30px;
      background: gray;
    }
    .chartArea {
      flex: 1 0 265px;
      display: flex;
      flex-direction: column;
      .polarChart {
        display: flex;
        flex: 0 0 254px;
        margin-bottom: 30px;
      }
      .lineChart {
        display: flex;
        flex: 0 0 176px;
        margin-bottom: 30px;
      }
      .barChart {
        display: flex;
        flex: 0 0 160px;
        background: blue;
      }
    }
  }
}
</style>