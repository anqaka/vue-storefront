<template>
  <div
    :class="['cms-content', { 'container': sync }]"
    v-if="data"
    v-html="data.content"
  />
</template>
<script>
import { CmsData } from '@vue-storefront/core/modules/magento-cms/components/CmsData'

export default {
  name: 'MagentoCms',
  mixins: [CmsData],
  created () {
    this.setData()
  }
}
</script>
