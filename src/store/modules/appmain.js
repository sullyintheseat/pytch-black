import { storage } from '@/utils/storage'

const state = {
  rootIdentity: null,
  navItems: [
    {image: 'option1_btn@2x.gif', title: 'Offers', target: '/option1'},
    {image: 'option2_btn@2x.gif', title: 'Schedule', target: '/option2'},
    {image: 'option3_btn@2x.gif', title: 'Roster', target: '/option3'},
    {image: 'option4_btn@2x.gif', title: 'Shop', target: '/option4'}
  ]
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
  },
  navItems (state) {
    return state.navItems
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
