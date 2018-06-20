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
      count: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>