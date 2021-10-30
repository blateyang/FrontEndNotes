<template>
  <div id="app">
      {{message}}<!--{{}}中只能使用变量或表达式这样的简单代码-->
      <todo-list>
        <todo-item v-for="(item, index) in list" :key=index :title="item.title" :del="item.del" @delete="handleDelete">
          <span slot="pre-icon">前缀图标</span><!--v2.6以前的语法-->
          <template v-slot:post-icon="{value}">
            <span>后缀图标 {{value}}</span>
          </template><!--v2.6及以后的语法,插槽名采用-连接符命名法-->
        </todo-item>
      </todo-list>
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment')">count++</button><!--对应mutations-->


  </div>
</template>

<script>
// import TodoItem from "./components/TodoItem.vue"
// // import TodoList from './components/TodoList.vue'

// export default {
//   name: 'App',
//   components: {
//     // TodoList,
//     TodoItem
//   },
//   data: function() {
//     return {
//           message: "hello world",
//           list: [
//             {
//               title: "课程1",
//               del: false
//             },
//             {
//               title: "课程2",
//               del: true
//             }
//           ]
//         }
//   },
//   methods: {
//     handleDelete(val) {
//       console.log("删除"+val)
//       let deleteId = -1
//       for(let i=0; i<this.list.length; i++) {
//         if(this.list[i].title === val) {
//           deleteId = i
//           break
//         }
//       }
//       if(deleteId > -1) {
//         this.list.splice(deleteId, 1)
//       }
//     }
//   }
// }


  export default {
    name: "app",
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>

<style>

</style>
