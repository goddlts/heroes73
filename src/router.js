// 路由模块

import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
// 配置vue的插件vue-router
Vue.use(VueRouter)

// 导入英雄列表的组件
import HeroList from './views/heroes/HeroList.vue'
import WeaponList from './views/weapons/WeaponList.vue'
import EquipList from './views/equips/EquipList.vue'
// 导入添加英雄的组件
import HeroAdd from './views/heroes/HeroAdd.vue'
import HeroEdit from './views/heroes/HeroEdit.vue'

// 创建路由对象
const router = new VueRouter({
  // 当url中的路由地址，跟a标签的href中的路由地址精确匹配的时候，添加类样式
  // 精确的配置高亮显示的类样式
  // https://router.vuejs.org/zh/api/#exact-active-class
  // linkExactActiveClass: 'active',

  // 当url中的路由地址，包含a标签的href的路由地址的时候，添加类样式
  linkActiveClass: 'active',
  // 配置路由规则
  routes: [
    { name: 'home', path: '/', redirect: '/heroes'},
    { name: 'heroes', path: '/heroes', component: HeroList },
    { name: 'weapons', path: '/weapons', component: WeaponList },
    { name: 'equips', path: '/equips', component: EquipList },
    { name: 'heroesadd', path: '/heroes/add', component: HeroAdd },
    // 动态路由地址 :id
    { name: 'heroesedit', path: '/heroes/edit/:id', component: HeroEdit, props: true },
  ]
})

// 导出路由对象
export default router