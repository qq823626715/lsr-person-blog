<!--
 * @Description: 主体内容组件
-->
<script setup>
// import { ref, reactive } from 'vue';
import { RouterView } from 'vue-router'

</script>
<template>
  <div class="main-wrapper">
    <transition name="fade-transform" mode="out-in">
      <RouterView :key="key" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.main-wrapper {
  height: calc(100vh - #{$header_height} - #{$footer_height});
  overflow: auto;
}
</style>
