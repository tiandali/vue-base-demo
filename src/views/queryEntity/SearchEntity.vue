<template>
  <div class="searchMain">
    <div class="inputContent">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        @change="queryEntity"
        v-model="inputdata"
        @input="getInputValue"
      ></el-input>
      <div class="caseBar">
        <span class="fontStyle">例如:</span>
        <span class="caseStyle" v-for="item in cases" v-bind:key="item">{{item}}</span>
        <i class="el-icon-warning-outline"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchEntity",
  data() {
    return {
      inputdata: "",
      cases: ["土豆", "玉米", "猪肉", "水稻"]
    };
  },
  created() {},
  methods: {
    getInputValue(value) {
      console.log("输入框当前的value: ", value);
      this.inputdata = value;
    },
    queryEntity(value) {
      console.log("搜索的value: ", value);
      this.$router.push("/info");
    }
  },
  computed: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.searchMain {
  min-height: calc(100vh - 100px);
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #18191d;
  .inputContent {
    padding-top: 200px;
    margin: 0 auto;
    width: 615px;
  }
  .caseBar {
    margin-top: 20px;
    height: 30px;
    display: flex;
    align-content: center;

    .fontStyle,
    i {
      color: #999;
    }
    .caseStyle {
      margin-right: 20px;
      color: #fff;
    }
    i {
      font-size: 24px;
    }
  }

  .el-input {
  }
}
</style>