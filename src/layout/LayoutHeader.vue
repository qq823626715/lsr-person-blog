<!--
 * @Description: 页眉组件
-->
<script setup>
import { ref } from 'vue';
const activeIndex = ref('/home')
</script>
<template>
  <div class="header-wrapper">
    <div class="header-container">
      <div class="border logo-wrapper">我是logo</div>
      <div class="menu-wrapper">
        <el-menu
          :default-active="activeIndex"
          :router="true"
          class="el-menu-demo menu-wrapper"
          mode="horizontal"
        >
          <el-menu-item index="/home">home</el-menu-item>
          <el-menu-item index="/about">about</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menu-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
.el-menu-demo {
  --el-menu-active-color: #FFFFFF;
  --el-menu-bg-color: $main_bg;
  --el-menu-border-color: $main_bg;
  --el-menu-hover-text-color: #FFFFFF;
  --el-menu-hover-bg-color: #00000010
}
</style>
