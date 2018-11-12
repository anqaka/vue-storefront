import { ActionTree } from 'vuex'
import { quickSearchByQuery } from '@vue-storefront/store/lib/search'
import SearchQuery from '@vue-storefront/store/lib/search/searchQuery'
import { MagentoCmsState } from '../types/MagentoCmsState'
import * as types from './mutation-types'
import { currentStoreView } from '@vue-storefront/store/lib/multistore'

export const actions: ActionTree<MagentoCmsState, any> = {
  /**
     * Retrieve magentocms
     *
     * @param context
     * @param {any} query
     * @param {any} start
     * @param {any} size
     * @param {any} entityType
     * @param {any} sort
     * @param {any} excludeFields
     * @param {any} includeFields
     * @returns {Promise<T> & Promise<any>}
     */
    getBlock (context, { dataIdentifier, start = 0, size = 50, entityType = 'm2block', sort = '', excludeFields = null, includeFields = null}) {
      let query = new SearchQuery()
      let storeView = currentStoreView()
      query = query.applyFilter({
        key: 'identifier',
        value: {'eq': dataIdentifier}
      })
      .applyFilter({
        key: 'store_id',
        value: {'in': storeView.storeId}
      })

      quickSearchByQuery({ query, start, size, entityType, sort, excludeFields, includeFields }).then((resp) => {
        context.commit(types.SET_BLOCKS, resp.items[0])
      }).catch(err => {
        console.error(err)
      })
    },
    getPage (context, { dataIdentifier, start = 0, size = 50, entityType = 'm2page', sort = '', excludeFields = null, includeFields = null}) {
      let query = new SearchQuery()
      let storeView = currentStoreView()
      query = query.applyFilter({
        key: 'identifier',
        value: {'eq': dataIdentifier}
      })
      .applyFilter({
        key: 'store_id',
        value: {'in': storeView.storeId}
      })

      quickSearchByQuery({ query, start, size, entityType, sort, excludeFields, includeFields }).then((resp) => {
        context.commit(types.SET_PAGES, resp.items[0])
      }).catch(err => {
        console.error(err)
      })
    }
}
