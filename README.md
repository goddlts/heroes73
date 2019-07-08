# heroes

## 脚手架 vue-cli

- vue-cli 作用

框架创建vue的项目结构，并配置好一些基础设施

- 配置 package.json

"serve": "vue-cli-service serve --open"

加 --open 自动打开浏览器

- style 标签的 scoped

样式只在当前组件中起作用

- 单文件组件使用演示

1. 创建 .vue 文件
2. 导入单文件组件  import xx from './.....'
3. 在使用的组件中注册组件 components
4. 使用组件 <hero-list></hero-list>

- 组件存放位置

components 文件夹

  存放通用/公共组件

views 文件夹-新建

  存放路由组件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
