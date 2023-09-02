<!--
 * @Description: 翻牌器
-->
<script setup>
import { ref, reactive } from 'vue';
import DrawNumber from '@/components/DrawNumber.vue'
const content = ref('甲')
let index = 0
const dict = ['甲', '乙', '丙','丁','戊','己','庚','辛','壬','癸' ]
function handleClick() {
  index = (index+1) % dict.length
  content.value = dict[index]
}
</script>
<template>
  <div>
    <DrawNumber :content="content" @click="handleClick"/>
  </div>
</template>

<style lang="scss" scoped>

</style>
