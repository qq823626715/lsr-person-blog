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
  <div v-bind="$attrs" class="draw" @click="handleClick">
    <div class="draw-item draw-static" :data-after="activeNum" :data-before="activeNum + 1"></div>
    <div class="draw-item draw-dynamic" :data-after="activeNum" :data-before="activeNum + 1"></div>
  </div>
</template>

<style lang="scss" scoped>
.draw {
  font-size: 100px;
  line-height: 140px;
  font-weight: 600;
  color: #FFFFFF;
  position: relative;
  
}
.draw-static {
  border: 1px solid #000000;
  background-color: #000000;
  display: inline-block;
  width: 80px;
  text-align: center;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: '4';
    display: block;
    height: 70px;
    line-height: 140px;
    overflow: hidden;
  }
  &::after {
    content: '3';
    display: block;
    height: 70px;
    line-height: 0;
    overflow: hidden;
  }
}
.draw-dynamic {
  height: 70px;
  width: 80px;
  text-align: center;
  position: absolute;
  top: 0;
  background-color: #00FF00;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform-origin: bottom;
  &::before {
    content: '3';
    display: block;
    height: 70px;
    line-height: 140px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  &::after {
    content: '4';
    display: block;
    height: 70px;
    line-height: 0;
    transform: rotateX(180deg);
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
}
</style>
