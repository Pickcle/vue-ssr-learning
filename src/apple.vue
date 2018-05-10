<!--
  
  Author: xiaohuajun@bilibili.com
  Date: 2018.
-->
<template lang="jade">
  div {{ count }}
</template>

<script>
import appleStore from './store/modules/apple.js'

export default {
  asyncData ({ store }) {
    store.registerModule('apple', appleStore)
    return store.dispatch('apple/inc')
  },
  destroyed () {
    this.$store.unregisterModule('apple')
  },
  computed: {
    count () {
      return this.$store.state.apple.count
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>