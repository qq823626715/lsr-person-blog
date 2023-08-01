<!--
 * @Description: 主体内容组件
-->
<script setup>
// import { ref, reactive } from 'vue';
import { RouterView } from 'vue-router'

</script>
<template>
  <div class="main-wrapper">
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>
