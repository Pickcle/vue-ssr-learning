<template>
  <div>
    <div>apple:{{ count }}</div>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },

  methods: {
    increase () {
      this.count++
    },

    decrease () {
      this.count--
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>