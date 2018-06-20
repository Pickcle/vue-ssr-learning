<template>
  <div id="app" class="content">
    <apple></apple>
    <banana></banana>
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
  width 100%
  height 500px
  background-color gray
</style>