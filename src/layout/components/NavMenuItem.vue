<!--
 * @Description: 菜单组件
-->
<script setup>
import { ref, computed, onMounted } from 'vue';
import path from 'path'

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
const showingChildren = ref([])
const actualMenuItem = ref([])
const isMenuItem = computed(() => {
  return (showingChildren.value.length === 1 || showingChildren.value.length === 0) &&
        (!actualMenuItem.value.children || actualMenuItem.value.noShowingChildren) && !props.menuItem.alwaysShow
})
const componentName = computed(() => { return isMenuItem.value? 'el-menu-item': 'el-submenu'})
onMounted(() => {
  if (!props.menuItem.hidden) {
    if (props.menuItem.children) {
      showingChildren.value = props.menuItem.children.filter(item => {
        return !item.hidden
      }) || []
    }
    if (showingChildren.value.length > 0) {
      actualMenuItem.value = showingChildren.value[showingChildren.value.length - 1]
    } else {
      actualMenuItem.value = { ...props.menuItem, path: '', noShowingChildren: true }
    }
  }
})
function resolvePath(routePath) {
  return path.resolve(props.basePath, routePath)
}
</script>

<template>
  <component v-if="!menuItem.hidden" :ref="isMenuItem?'subMenu':'menuItem'" :is="componentName" :index="resolvePath(actualMenuItem.path)">
    <template v-if="isMenuItem">
      <svg-icon v-if="actualMenuItem.meta && actualMenuItem.meta.icon" :icon-class="actualMenuItem.meta.icon" class="menu-icon" />
      <span>{{ actualMenuItem.meta && actualMenuItem.meta.title }}</span>
    </template>
    <template v-if="!isMenuItem" v-slot:title>
      <svg-icon v-if="menuItem.meta && menuItem.meta.icon" :icon-class="menuItem.meta.icon" class="menu-icon" />
      <span>{{ menuItem.meta && menuItem.meta.title }}</span>
    </template>
    <template v-if="!isMenuItem">
      <nav-menu-item
        v-for="child in menuItem.children"
        :key="menuItem.path + child.path"
        :menu-item="child"
        :base-path="resolvePath(child.path)"
      ></nav-menu-item>
    </template>
  </component>
</template>

<style lang="scss" scoped>

</style>
