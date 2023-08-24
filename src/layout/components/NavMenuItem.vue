<!--
 * @Description: 菜单组件
-->
<script setup>
import { ref, computed, onBeforeMount } from 'vue';
import { resolve } from 'path'
import { ElMenuItem, ElSubMenu } from 'element-plus'
const props = defineProps({
  menuItem: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    required: true
  }
})
const isHeaf = computed(() => {
  return !(props.menuItem?.children?.length > 0)
})
const subMenuItems = ref([])
onBeforeMount(() => {
  if(!isHeaf.value) {
    subMenuItems.value = props.menuItem.children.filter(item => !item.hidden)
  }
})
function resolvePath(routePath) {
  return resolve(props.basePath, routePath)
}
</script>

<template>
  <el-menu-item v-if="isHeaf || subMenuItems.length === 0" ref="menuItem" :index="resolvePath(menuItem.path || '')">
    <template #default>
      <!-- <svg-icon v-if="menuItem.meta && menuItem.meta.icon" :icon-class="menuItem.meta.icon" class="menu-icon" /> -->
      <span>{{ menuItem.meta && menuItem.meta.title }}</span>
    </template>
  </el-menu-item>
  <el-sub-menu v-else :index="resolvePath(menuItem.path || '')">
    <template #title>
      <span>{{ menuItem.meta && menuItem.meta.title }}</span>
    </template>
    <nav-menu-item
      v-for="subMenu in subMenuItems"
      :key="menuItem.path + subMenu.path"
      :menu-item="subMenu"
      :base-path="resolvePath(menuItem.path)"
    />
  </el-sub-menu>
</template>

<style lang="scss" scoped>

</style>
