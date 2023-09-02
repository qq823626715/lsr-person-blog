<!--
 * @Description: 数字翻牌器
-->
<script setup>
import { ref, defineProps, watch, onMounted  } from 'vue'
const props = defineProps({
  content: {
    type: String,
    default: '',
    require: true
  }
})
const activeContent = ref('')
const nextContent = ref('乙')
const underway = ref(false)
onMounted(() => {
  activeContent.value = props.content
})

watch(() => props.content, (newQuestion, oldQuestion) => {
  nextContent.value = newQuestion
  underway.value = true
  const timer = setTimeout(() => {
    activeContent.value = newQuestion
    nextContent.value = oldQuestion
    underway.value = false
    clearTimeout(timer)
  }, 190)
})
</script>
<template>
  <div v-bind="$attrs" class="draw">
    <div class="draw-item draw-static" :data-active="activeContent" :data-next="nextContent"></div>
    <div class="draw-item draw-dynamic" :class="{ 'active': underway }" :data-active="nextContent" :data-next="activeContent"></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes draw {
  from {
    transform: rotateX(0)
  }

  to {
    transform: rotateX(180deg);
  }
}
.draw {
  font-size: 60px;
  line-height: 140px;
  font-weight: 600;
  color: #FFFFFF;
  position: relative;
  
}
.draw-static {
  display: inline-block;
  width: 80px;
  text-align: center;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::before {
    content: attr(data-next);
    display: block;
    width: 80px;
    height: 70px;
    line-height: 140px;
    overflow: hidden;
    background-color: #000000;  
    border-radius: 0  0 10px 10px;
  }
  &::after {
    content: attr(data-active);
    display: block;
    width: 80px;
    height: 70px;
    line-height: 0;
    overflow: hidden;
    background-color: #000000;
    border-radius: 10px 10px 0  0;
  }
}
.draw-dynamic {
  position: absolute;
  top: 0;
  width: 80px;
  height: 70px;
  line-height: 140px;
  background: #000000;
  color: #FFFFFF;
  text-align: center;
  transform-style: preserve-3d;
  transform-origin: bottom;
  // transition: all .5S;
  // transform: rotateX(180deg);
  border-radius: 0  0 10px 10px;
  &::before {
    content: attr(data-active);
    width: 80px;
    height: 70px;
    top: 0;
    line-height: 0;
    display: block;
    position: absolute;
    transform: rotateX(180deg);
    backface-visibility: hidden;
    overflow: hidden;
  }
  &::after {
    content: attr(data-next);
    width: 80px;
    height: 70px;
    line-height: 140px;
    display: block;
    backface-visibility: hidden;
    overflow: hidden;
  }
  &.active {
    animation: draw 0.2s linear;
  }
}

</style>
