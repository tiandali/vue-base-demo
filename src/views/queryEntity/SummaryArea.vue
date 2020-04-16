<template>
  <div class="areaMain">
    <div class="pic">
      <el-image style="width: 100%; height: 218px" :src="url" :fit="fit"></el-image>
    </div>
    <div class="sub">
      <p>{{sub}}</p>
    </div>
    <div class="same">
      <div class="textStyle" v-for="same in sames" :key="same">{{same}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SummaryArea",
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      sub:
        "马铃薯（学名：Solanum tuberosum L.），属茄科，一年生草本植物，块茎可供食用，是全球第四大重要的粮食作物，仅次于小麦、稻谷和玉米。马铃薯又名山药蛋、洋芋、洋山芋、洋芋头、香山芋、洋番芋、山洋芋、阳芋、地蛋、土豆等。马铃薯在不同国度，名称称谓也不一样，如美国称爱尔兰豆薯、俄罗斯称荷兰薯、法国称地苹果、德国称地梨、意大利称地豆、秘鲁称巴巴等。与小麦、稻谷、玉米、高粱并称为世界五大作物。马铃薯块茎含有大量的淀粉，能为人体提供丰富的热量，且富含蛋白质、氨基酸及多种维生素、矿物质，尤其是其维生素含量是所有粮食作物中最全的，在欧美国家特别是北美，马铃薯早就成为第二主食。马铃薯原产于南美洲安第斯山区，人工栽培历史最早可追溯到大约公元前8000年到5000年的秘鲁南部地区。马铃薯主要生产国有中国、俄罗斯、印度、乌克兰、美国等。中国是世界马铃薯总产最多的国家。 ",
      sames: ["粮食作物", "淀粉产物", "茄属", "双子叶植物纲", "管状花目"]
    };
  },
  created() {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.areaMain {
  display: flex;
  flex: 1;
  flex-direction: column;
  // background: pink;
  .same {
    display: flex;
    flex-wrap: wrap;

    .textStyle {
      color: #fff;
      padding: 8px;
      margin-right: 20px;
      margin-bottom: 10px;
      background: #3a3c43;
      font-size: 12px;
      font-family: Source Han Sans CN;
      border-radius: 2px;
    }
  }
  .sub,
  p {
    height: 320px;
    // width: 325px;
    margin-bottom: 20px;
    color: #999;
    font-size: 14px;
    display: box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .pic {
    margin-bottom: 20px;
  }
}
</style>