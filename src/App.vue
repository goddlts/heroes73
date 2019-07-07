<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 使用组件 -->
    <hero-list></hero-list>
  </div>
</template>

<script>
// 导入组件
import HeroList from './views/HeroList.vue'

export default {
  name: 'app',
  // 注册组件
  components: {
    HeroList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
