<!--
 * @Description: 页眉组件
-->
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavMenuItem from './components/NavMenuItem.vue';
import { constantRoutes } from '@/router'

const activeIndex = computed(() => {
  const route = useRoute()
  const { meta, path } = route
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path
})
const menuRouters = computed(() => {
  return constantRoutes
})
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
          <nav-menu-item
            v-for="route in menuRouters.filter(item => !item.hidden)"
            :key="route.path"
            :menu-item="route"
            :base-path="route.path"
          />
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
  --el-menu-active-color: #{$main_color};
  --el-menu-bg-color:  #{$main_bg};
  --el-menu-border-color:  #{$main_bg};
  --el-menu-hover-text-color:  #{$main_color};
  --el-menu-hover-bg-color: #00000010
}
</style>
