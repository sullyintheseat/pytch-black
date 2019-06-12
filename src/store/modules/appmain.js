import { storage } from '@/utils/storage'

const state = {
  rootIdentity: null,
  navItems: [
    {image: 'PB_btn_green_platform.png', title: 'Sponsors', target: '/option1'},
    {image: 'PB_btn_green_data.png', title: 'Sched', target: '/option2'},
    {image: 'PB_btn_green_connected.png', title: 'Team', target: '/option3'},
    {image: 'PB_btn_green_loyalty.png', title: 'Shop', target: '/option4'}
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
