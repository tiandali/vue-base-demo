<template>
  <div>
    {{title}}
    <el-row>
      <el-button @click="submitLoginData" type="success">成功按钮</el-button>
    </el-row>
  </div>
</template>
<script>
import { getLoginData } from "../../api/login";
export default {
  data() {
    return { title: "这是登录页面" };
  },
  created() {},
  methods: {
    submitLoginData() {
      getLoginData().then(res => {
        console.log("res: ", res);
        this.title = res.data;
      });

      // this.$axios
      //   .post("mock/login", { user: "dali", password: "123456" })
      //   .then(data => {
      //     //登录失败,先不讨论
      //     if (data.data.status != 200) {
      //       //iViewUi的友好提示
      //       this.$Message.error(data.data.message);
      //       //登录成功
      //     } else {
      //       //设置Vuex登录标志为true，默认userLogin为false
      //       this.$store.dispatch("userLogin", true);
      //       //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
      //       //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
      //       localStorage.setItem("Flag", "isLogin");
      //       //iViewUi的友好提示
      //       this.$Message.success(data.data.message);
      //       //登录成功后跳转到指定页面
      //       this.$router.push("/home");
      //     }
      //   });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>