<!--
  
  Author: xiaohuajun@bilibili.com
  Date: 2018.
-->
<template lang="jade">
  div
    button(@click="decrease") decrease
    div {{ count }}
</template>

<script>
// import bananaStore from './store/modules/banana'
import TitleMixin from './title-mixin'

export default {
  mixins: [TitleMixin],
  title: 'banana',
  // asyncData ({ store }) {
  //   store.registerModule('banana', bananaStore)
  //   return store.dispatch('banana/sub')
  // },
  // destroyed () {
  //   this.$store.unregisterModule('banana')
  // },
  computed: {
    count () {
      return this.$store.state.banana.count
    }
  },
  methods: {
    increase () {
      this.$store.dispatch('banana/sub')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>