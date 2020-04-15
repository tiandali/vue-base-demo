<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: "AppMain",
  data() {
    return {
      data: "内容区域"
    };
  },
  computed: {
    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews;
    // },
    key() {
      return this.$route.fullPath;
    }
  },
  created() {},
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.app-main {
  /*84 = navbar + tags-view = 50 +34 */
  min-height: calc(100vh - 100px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f5f7f9;
}
</style>