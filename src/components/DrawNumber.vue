<!--
 * @Description: 数字翻牌器
-->
<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  number: {
    type: Number,
    default: 0
  }
})
const activeNum = ref(props.number)
function handleClick() {
  activeNum.value = (activeNum.value + 1) % 10
}
</script>
<template>
  <div v-bind="$attrs" class="draw" :data-after="activeNum+1" :data-before="activeNum" @click="handleClick">
    <div class="draw-item draw-before" :data-after="activeNum" :data-before="activeNum + 1"></div>
    <div class="draw-item draw-after" :data-after="activeNum" :data-before="activeNum + 1"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>
