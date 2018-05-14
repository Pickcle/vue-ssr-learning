<!--
  
  Author: xiaohuajun@bilibili.com
  Date: 2018.
-->
<template lang="jade">
  div
    div(@click="increase") increase
    div {{ count }}
</template>

<script>
// import appleStore from './store/modules/apple'
import TitleMixin from './title-mixin'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapActions } = createNamespacedHelpers('apple')

export default {
  mixins: [TitleMixin],
  title: 'apple',
  // asyncData ({ store }) {
  //   store.registerModule('apple', appleStore)
  //   return store.dispatch('apple/inc')
  // },
  // destroyed () {
  //   this.$store.unregisterModule('apple')
  // },
  computed: {
    ...mapState({
      count: state => {
        console.log('-----xhjLog-----computed count', state.count)
        return state.count
      }
    })
  },
  methods: {
    ...mapActions([
      'inc'
    ]),
    increase () {
      console.log('-----xhjLog-----click inc')
      this.inc()
    }
  },
  mounted () {
    console.log('-----xhjLog-----apple mounted')
  }
}
</script>

<style lang="stylus" scoped>
</style>