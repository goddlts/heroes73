import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式文件
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

// 导入 vue-router
import VueRouter from 'vue-router'
// 配置vue的插件vue-router
Vue.use(VueRouter)

// 导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'

// 创建路由对象
const router = new VueRouter({
  // 精确的配置高亮显示的类样式
  // https://router.vuejs.org/zh/api/#exact-active-class
  linkExactActiveClass: 'active',
  // 配置路由规则
  routes: [
    { name: 'home', path: '/', redirect: '/heroes'},
    { name: 'heroes', path: '/heroes', component: HeroList },
    { name: 'weapons', path: '/weapons', component: WeaponList },
    { name: 'equips', path: '/equips', component: EquipList },
  ]
})

new Vue({
  render: h => h(App),
  // 配置路由对象
  router
}).$mount('#app')
