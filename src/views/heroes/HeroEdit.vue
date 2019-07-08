<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="txtName" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button @click.prevent="update" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 在组件中获取路由参数  $route.params.id

export default {
  // 接收外部传递的参数
  props: ['id'],
  data() {
    return {
      // 双向绑定的数据
      formData: {
        name: '',
        gender: '男'
      }
    }
  },
  // “组件加载完毕”
  mounted() {
    this.loadDataById()
  },
  methods: {
    // 根据id加载英雄数据
    loadDataById() {
      // 组件中有id的属性
      // 发送请求
      this.axios
        .get(`heroes/${this.id}`)
        .then((response) => {
          const { data, status } = response
          if (status === 200) {
            // 存储数据  { name: '', gender: '', id: 6 }
            this.formData = data
          }
        })
    },
    // 修改数据的方法
    update() {
      // 发送请求
      this.axios
        .put(`heroes/${this.id}`, this.formData)
        .then((response) => {
          const status = response.status
          if (status === 200) {
            // 修改成功
            // 跳转回列表组件
            this.$router.push({ name: 'heroes' })
          } else {
            // 修改失败
            alert('修改失败')
          }
        })
    }
  }
}
</script>

<style>

</style>
