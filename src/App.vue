<template>
  <div class="content">
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