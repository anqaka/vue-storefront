import { Module } from 'vuex'
import { MagentoCmsState } from '../types/MagentoCmsState'
import RootState from '@vue-storefront/store/types/RootState'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const module: Module<MagentoCmsState, RootState> = {
  namespaced: true,
  state: {
    blocks: [],
    pages: []
  },
  mutations,
  actions,
  getters
}
