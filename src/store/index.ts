import { createStore, Module } from 'vuex'

// interface StateInterface {
//   list: string[]
// }
interface StateInterface {
  list: {
    id: number
    label: string
    type: string
  }[]
}

const list: Module<StateInterface, { list: StateInterface }> = {
  namespaced: true,
  state: () => ({
    list: [
      { id: 1, label: 'Haircut', type: 'personal' },
      { id: 2, label: 'WalkofShame', type: 'work' },
      { id: 3, label: 'Drinks', type: 'personal' }
    ]
  }),
  getters: {
    getlist: (state: StateInterface) => {
      return state.list
    }
  },
  mutations: {
    add_item: (state, payload) => {
      state.list.push(payload)
    },
    remove_item: (state, index) => {
      console.log('mutation', index)
      state.list.splice(index, 1)
      console.log(state.list)
    }
  },
  actions: {
    addTodo: ({ commit }, item: string) => {
      commit('add_item', item)
    },
    deleteTodo: ({ commit }, index: number) => {
      commit('remove_item', index)
    }
  }
}

const store = createStore({
  modules: { list }
})

export default store
