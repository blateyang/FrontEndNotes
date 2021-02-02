// import Vue from 'vue'
// import App from './App.vue'
// import TodoList from "./components/TodoList.vue"

// Vue.config.productionTip = false

// Vue.component("todo-list", TodoList) // 全局注册组件
// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import App from "./App.vue"
import Vue from "vue"
import Vuex from "./min-vuex.js"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  // actions: {
  //   increment({commit}) {
  //     setTimeout(()=>{
  //       commit("increment")
  //     },1000)
  //   }
  // },
  getters: {
    doubleCount(state) {
      return state.count*2
    }
  }
})

Vue.prototype.$store = store
new Vue({
  // store, 
  render: h=>h(App)
}).$mount("#app")

