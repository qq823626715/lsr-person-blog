<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const locale = ref('zh')
const size = ref('small')
const zIndex = ref(2000)

</script>

<template>
  <ElConfigProvider :size="size" :z-index="zIndex" :locale="zhCn">
    <div id="app" class="app-wrapper" :class="'page-' + locale">
      <keep-alive>
        <router-view v-if='$route.meta.keepAlive'/>
      </keep-alive>
      <router-view v-if='!$route.meta.keepAlive'/>
    </div>
  </ElConfigProvider>
</template>

<style lang="scss" scoped>
#app {
  min-width: $content_width;
}
</style>
