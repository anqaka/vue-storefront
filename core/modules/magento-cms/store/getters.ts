import { GetterTree } from 'vuex'
import { MagentoCmsState } from '../types/MagentoCmsState'

export const getters: GetterTree<MagentoCmsState, any> = {
  getBlock: (state) => (identifier) => {
    return state.blocks.find(item => item.identifier === identifier)
  },
  getPage: (state) => (identifier) => {
    return state.pages.find(item => item.identifier === identifier)
  }
}
