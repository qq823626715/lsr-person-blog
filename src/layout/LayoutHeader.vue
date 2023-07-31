<!--
 * @Description: 页眉组件
-->
<script setup>
// import { ref, reactive } from 'vue';

</script>
<template>
  <div class="header-wrapper">
    我是页眉
  </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
  height: $header_height;
  width: 100%;
  // border-bottom: 1px solid $main_border_color;
  z-index: 1;
  box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
}
</style>
