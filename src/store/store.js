import Vue from 'vue'
import Vuex from 'vuex'

import apple from './modules/apple'
import banana from './modules/banana'

Vue.use(Vuex)

const fetchItem = (id) => `something${id}`

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem ({ commit }, id) {
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    },
    modules: {
      apple,
      banana
    }
  })
}