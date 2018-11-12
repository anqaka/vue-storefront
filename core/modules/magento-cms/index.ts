import { module } from './store'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/module'

export const KEY = 'magentocms'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  store: { modules: [{ key: KEY, module }] }
}

export const MagentoCms = new VueStorefrontModule(moduleConfig)
