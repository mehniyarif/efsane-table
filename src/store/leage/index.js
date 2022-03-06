import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import * as getters from './getters.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

