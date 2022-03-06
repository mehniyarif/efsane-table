import Vue from 'vue'
import Vuex from 'vuex'

/* globally vuex structures */
import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

/* vuex modules */
import leage from './leage'

export default new Vuex.Store({
    namespaced: true,
    getters,
    mutations,
    state,
    actions,
    modules: {
      leage
    },
    strict: process.env.NODE_ENV !== 'production'
})
