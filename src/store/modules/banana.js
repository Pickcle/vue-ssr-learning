export default {
  namespaced: true,
  state: () => ({
    count: 100
  }),
  actions: {
    sub: ({ commit }) => commit('sub')
  },
  mutations: {
    sub: state => state.count--
  }
}