<script setup>

</script>

<template>
  <div class="home-page">
    <el-timeline>
      <el-timeline-item timestamp="2023/08/06" placement="top" type="success">
        <el-card>
          <h4 class="log-title">引入element-plus、菜单、scss引入方式</h4>
          <p class="log-text">1.按需引入element-plus，同时引入自定义主题颜色；</p>
          <p class="log-text">2.增加了navbar 菜单组件；</p>
          <p class="log-text">3.scss由@import改为@use。<span class="warning"> "@use"需要放在第一行</span></p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2023/07/31" placement="top" type="success">
        <el-card>
          <h4 class="log-title">vue3 + vite + pinia + vuerouter项目搭建</h4>
          <p class="log-text">1.项目基础框架搭建，vuecli自动生成，引入scss；</p>
          <p class="log-text">2.页面layout布局，初步生成，header、main、footer上下三段式，内容最大限宽。</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<style lang="scss" scoped>
.log {
  &-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  &-text {
    font-size: 14px;
    line-height: 24px;
  }
}
.warning {
  color: #FF0000;
}
</style>