<template>
  <PageContent class="wrap-layout-content">
    <RouterView>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath"/>
      </template>
    </RouterView>
  </PageContent>
</template>
<script>
import {Layout} from 'ant-design-vue'

export default {
  name: 'LayoutContent',
  components: {
    PageContent: Layout.Content
  },
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap-layout-content {
  min-height: calc(100vh - $height-header - $height-footer);
  max-width: $max-wrap-container;
  width: 100%;
  overflow-x: hidden;
}
</style>
