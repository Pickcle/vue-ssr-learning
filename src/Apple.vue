<template>
  <div>
    <div>apple:{{ count }}</div>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 10
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  margin 10px
</style>