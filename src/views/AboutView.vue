<script setup>
import { computed, reactive, ref } from 'vue';
const testArr = reactive([])
const testData = computed(() => {
  return 1
})
console.log(testData.value)
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>

  </div>
</template>

<style>

</style>
