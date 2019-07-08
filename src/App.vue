<template>
  <div id="app">
    <!-- AppHeader -->
    <app-header></app-header>

    <div class="container-fluid">
      <div class="row">
        <!-- AppSidebar -->
        <app-sidebar></app-sidebar>

        <!-- 路由对应组件显示的位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 导入AppHeader组件
import AppHeader from './components/AppHeader.vue'
// 导入 AppSidebar 组件
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'app',
  // 注册组件
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>
