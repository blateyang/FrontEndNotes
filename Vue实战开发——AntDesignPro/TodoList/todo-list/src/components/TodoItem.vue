<template>
  <li>
    <slot name="pre-icon"></slot>
    <span class="red" v-if="!del">{{title}}</span>
    <span v-else style="text-decoration:line-through">{{title}}</span>
    <slot name="post-icon" :value="value"></slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>

<script>
export default {
        name: "todo-item",
        props: {
          title: String,
          del: {
            type: Boolean,
            default: false
          }
        },
        data: function() {
          return {
            value: Math.random()
          }
        }, 
        methods: {
          handleClick() {
            console.log("点击按钮")
            // 注意这里this代表当前todo-item组件（非定义组件时的{}配置对象），访问其title属性不是用this.props.title而是直接用this.title
            this.$emit("delete", this.title) 
          }
        }
}
</script>

<style scoped>
  .red {
    color: red;
  }
</style>