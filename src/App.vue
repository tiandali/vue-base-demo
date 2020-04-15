<template>
  <div id="app">
    <!-- <h1>{{ msg }}</h1> -->
    <router-view></router-view>
  </div>
</template>
<script>
import { getData } from "./utils/index";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to dali Vue.js"
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await getData().then(res => {
        console.log("res: ", res);
        this.msg = res.data.message;
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  // background: pink;

  h1 {
    color: green;
  }
}
</style>

