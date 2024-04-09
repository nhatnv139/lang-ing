<template>
  <Layout id="app-wrap">
    <Layout id="app-content">
      <NeedHelp></NeedHelp>
      <HeaderV2></HeaderV2>
      <ModalComingSoon></ModalComingSoon>
      <ButtonToTop></ButtonToTop>
      <LayoutContent></LayoutContent>
      <LayoutFooter v-if="!listRouteNotDisplayFooter.includes(currentRoute)"></LayoutFooter>
    </Layout>
  </Layout>
</template>
<script>
import { Layout } from 'ant-design-vue'
import LayoutContent from './Content.vue'
import LayoutFooter from './Footer.vue'
import ModalComingSoon from '@/components/app/ModalComingSoon.vue'
import ButtonToTop from '@/components/app/ButtonToTop.vue'
import NeedHelp from '@/components/app/NeedHelp.vue'
import {computed} from "vue";
import router from "@/router";
import HeaderV2 from "@/layout/HeaderV2.vue";
export default {
  name: 'DefaultLayout',
  components: {
    Layout,
    HeaderV2,
    LayoutContent,
    LayoutFooter,
    ModalComingSoon,
    ButtonToTop,
      NeedHelp,
  },
  setup() {
    const currentRoute = computed(() => {
      return router.currentRoute.value.name
    })
    const listRouteNotDisplayFooter = ['pitch-deck', 'download']
    return {
      listRouteNotDisplayFooter,
      currentRoute
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
#app-content {
  background: $background-color-content;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
