<template>
  <div>
    <span>count: {{count}}</span>
    <button @click="count++">count++</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  components: {

  }
}
</script>

<style>

</style>