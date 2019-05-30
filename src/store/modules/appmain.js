import { storage } from '@/utils/storage'

const state = {
  rootIdentity: null
}

const mutations = {
  setRootIdentity (state, id) {
    state.rootIdentity = id
  }
}

const getters = {
  rootIdentity (state) {
    if (state.rootIdentity == null) {
      return storage.getValue('rootIdentity')
    } else {
      return state.rootIdentity
    }
  }
}

const actions = {
  setRootIdentity (context, id) {
    storage.storeValue('rootIdentity', id)
    context.commit('setRootIdentity', id)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
