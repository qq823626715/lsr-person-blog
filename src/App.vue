<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const locale = ref('zh')
</script>

<template>
  <div id="app" class="app-wrapper" :class="'page-' + locale">
    <keep-alive>
      <router-view v-if='$route.meta.keepAlive'/>
    </keep-alive>
    <router-view v-if='!$route.meta.keepAlive'/>
  </div>
</template>

<style scoped>

</style>
