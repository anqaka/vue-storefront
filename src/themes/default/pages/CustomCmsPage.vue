<template>
  <div class="container">
    <h1>Cms content</h1>
    <magento-cms :identifier="'about_us'" :type="'Page'" :sync="true"/>
    <magento-cms :identifier="'contact_us'" :type="'Block'" :sync="true"/>
    <magento-cms :identifier="'footer_links_block'" :type="'Block'" :sync="true"/>

    <h2>
      Cms page content
    </h2>
    <p>
      (by identifier, it handles current store view if multistore is enable)
    </p>
    <cms-data :identifier="'about-us'" :type="'Page'"/>

    <h2>Cms block content
    </h2>
    <p>
      (by identifier, it handles current store view if multistore is enable)
    </p>
    <cms-data :identifier="'contact-us-info'" :type="'Block'"/>

    <h2>
      Cms page content
    </h2>
    <p>
      (by id only default store view (0))
    </p>
    <cms-data :id="5" :type="'Page'" />

    <h2>
      Cms block content
    </h2>
    <p>
      (by id only default store view (0))
    </p>
    <cms-data :id="2" :type="'Block'" />
  </div>
</template>

<script>
import CmsData from '@vue-storefront/extension-magento2-cms/components/CmsData'
import MagentoCms from 'theme/components/core/blocks/MagentoCms/MagentoCms'

export default {
  components: {
    CmsData,
    MagentoCms
  }
}
</script>

<style lang="scss">
@import '~theme/css/variables/colors';
@import '~theme/css/helpers/functions/color';
$color-secondary: color(secondary);

.cms-content {
  & * {
    font-size: 18px;
  }

  a {
    color: $color-secondary;
    text-decoration: underline;
  }

}
</style>
