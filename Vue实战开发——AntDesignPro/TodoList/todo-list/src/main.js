import Vue from 'vue'
import App from './App.vue'
import TodoList from "./components/TodoList.vue"

Vue.config.productionTip = false

Vue.component("todo-list", TodoList) // 全局注册组件
new Vue({
  render: h => h(App),
}).$mount('#app')
