<template>
  <div class="app-wrapper">
    <SideMenu class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container">
      <div class="fixed-header">
        <HeaderBar />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script>
import SideMenu from "./layout/SideMenu";
import HeaderBar from "./layout/HeaderBar";
import AppMain from "./layout/AppMain";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    SideMenu,
    HeaderBar,
    AppMain
  },

  methods: {},
  created() {}
};
</script>

<style lang="scss">
.app-wrapper {
  // position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex: 1;
}
.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;

  .fixed-header {
    height: 100px;
    display: flex;
  }
}
// .drawer-bg {
// background: #000;
// opacity: 0.3;
// width: 100%;
// top: 0;
// height: 100%;
// position: absolute;
// z-index: 999;
// }
.fixed-header {
  // position: fixed;
  // top: 0;
  // right: 0;
  // z-index: 9;

  // transition: width 0.28s;
}
.hideSidebar .fixed-header {
  // width: calc(100% - 54px);
}
</style>