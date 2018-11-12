
import { VueStorefrontModule } from '@vue-storefront/module'
import { Wishlist } from './modules/wishlist'
import { Order } from './modules/order'
import { User } from './modules/user'
import { MagentoCms } from './modules/magento-cms'
import { registerModules } from 'src/modules'

export const enabledModules: VueStorefrontModule[] = [
  Wishlist,
  Order,
  User,
  MagentoCms,
  ...registerModules
]
