export default {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  actions: {
    inc: ({ commit }) => {
      console.log('-----xhjLog-----action inc')
      return commit('inc')
    }
  },
  mutations: {
    inc: state => {
      state.count++
      console.log('-----xhjLog-----mutation inc', state.count)
    }
  }
}