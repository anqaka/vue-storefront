import { MutationTree } from 'vuex'
import * as types from './mutation-types'
import { MagentoCmsState } from '../types/MagentoCmsState'

export const mutations: MutationTree<MagentoCmsState> = {
  [types.SET_BLOCKS] (state, payload) {
    if (state.blocks.length > 0) {
      
      if (state.blocks.filter(
        e => e.id !== payload.id
      )) {
        state.blocks.push(payload)
      }
    }
    else {
      state.blocks.push(payload)
    }
  },
  [types.SET_PAGES] (state, payload) {
    if (state.pages.length > 0) {
      if (state.pages.filter(
        e => e.id !== payload.id
      )) {
        state.pages.push(payload)
      }
    }
    else {
      state.pages.push(payload)
    }
  }
}
