<template>
  <div class="sideMenu2">
    <div class="sideMenu">
      <el-menu
        router="true"
        default-active="实体识别"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#1D2024"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">二级菜单1</template>
            <el-menu-item index="1-1-1">三级菜单1</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">选项2</template>
            <el-menu-item index="1-2-1">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">选项3</template>
            <el-menu-item index="1-3-1">选项3</el-menu-item>
          </el-submenu>

          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>

        <!-- <el-submenu v-for="menu in menus" v-bind:key="menu.name" :index="menu.name">
          <template slot="title">
             <i class="el-icon-location"></i>
            <i :class="menu.iconStyle"></i>
            <span>{{menu.name}}</span>
          </template>
          <el-submenu
            v-for="menuson in menu.children"
            v-bind:key="menuson.name"
            :index="menuson.name"
          >
            <template slot="title">{{menuson.name}}</template>
            <el-menu-item
              v-for="menu3 in menuson.children"
              v-bind:key="menu3.name"
              :index="menu3.name"
            >{{menu3.name}}</el-menu-item>
          </el-submenu>
        </el-submenu> 
        -->

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
.sideMenu {
  width: 220px;
  min-height: 100%;
  background: pink;
  .el-menu-vertical-demo {
    height: 100vh;
  }
}
</style>