<template>
  <div>
    <button @click="show=!show">销毁</button>
    <button v-if="show" v-append-text="`hello ${number}`" @click="number++">按钮</button>
  </div>
</template>

<script>
export default {
  directives: {
    appendText: {
      bind() {
        console.log("bind")
      },
      inserted(el, binding) {
        el.appendChild(document.createTextNode(binding.value))
      },
      update() {
        console.log("update")
      },
      componentUpdated(el, binding) {
        el.removeChild(el.childNodes[el.childNodes.length-1])
        el.appendChild(document.createTextNode(binding.value))
      },
      unbind() {
        console.log("unbind")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
