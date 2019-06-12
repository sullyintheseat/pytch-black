import { storage } from '@/utils/storage'

const state = {
  notifyState : false
}

const mutations = {
  setNotifyState (state, bool) {
    state.notifyState = bool
  }
}

const getters = {
  notifyState (state) {
    return state.notifyState
  }
}

const actions = { 
}

export default {
  state,
  actions,
  mutations,
  getters
}
