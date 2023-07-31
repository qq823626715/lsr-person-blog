<!--
 * @Description: 主框架
-->
<script setup>
// import { ref, reactive } from 'vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
import LayoutFooter from './LayoutFooter.vue';


</script>
<template>
  <div class="layout-warpper">
    <LayoutHeader />
    <LayoutMain />
    <LayoutFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout-warpper {
  padding-top: $header_height;
}
</style>
