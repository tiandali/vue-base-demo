<template>
  <div class="sideBar">
    <div class="iconStyle">
      <i class="el-icon-platform-eleme"></i>
    </div>
    <div class="sideMenu">
      <el-menu
        router="true"
        default-active="search"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#1D2024"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div v-for="menu in menus" v-bind:key="menu.name">
          <el-submenu v-if="menu.children" :index="menu.path">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <i :class="menu.iconStyle"></i>
              <span>{{menu.name}}</span>
            </template>
            <div v-for="menuson in menu.children" v-bind:key="menuson.name">
              <el-submenu v-if="menuson.children" :index="menuson.path">
                <!-- 此处是菜单级到第三层，暂时不写 -->
              </el-submenu>
              <el-menu-item v-else :index="menuson.path">
                <span slot="title">{{menuson.name}}</span>
              </el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item v-else :index="menu.path">
            <template slot="title">
              <!-- <i class="el-icon-location"></i> -->
              <i :class="menu.iconStyle"></i>
              <span>{{menu.name}}</span>
            </template>
          </el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script>
import { menus } from "../../router/menus";
console.log("menus: ", menus);
export default {
  name: "SideMenu",
  data() {
    return {
      menus
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {}
};
</script>

<style lang="scss">
.iconStyle {
  width: 180px;
  height: 150px;
  background: #1d2024;
  text-align: center;
  line-height: 150px;
  i {
    width: 26px;
    height: 30px;
    font-size: 26px;
    color: #7ac231;
  }
}
.sideMenu {
  width: 180px;
  min-height: calc(100vh -150px);
  background: pink;
  .el-menu-item {
    font-size: 16px;
  }
  .el-menu {
    border-right: 0;
  }
  .el-menu-vertical-demo {
    min-height: calc(100vh - 150px);
  }
}
</style>