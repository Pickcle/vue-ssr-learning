<template>
  <div id="app">
    <div>count: {{ count }}</div>
    <button @click="count++">+</button>
    <button @click="count--">-</button>
    <div class="content">
      <apple></apple>
      <banana></banana>
    </div>
  </div>
</template>

<script>
import Apple from './apple.vue'
import Banana from './banana.vue'

export default {
  data () {
    return {
      count: 0
    }
  },

  components: {
    Apple,
    Banana
  }
}
</script>

<style lang="stylus" scoped>
.content
  width 500px
  height 500px
  background-color gray
</style>