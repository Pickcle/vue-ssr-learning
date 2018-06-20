<template>
  <div>
    <div>banana:{{ count }}</div>
    <a @click="increase">+</a>
    <a @click="decrease">-</a>
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
      console.log('count', this.count)
    },

    decrease () {
      this.count--
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>