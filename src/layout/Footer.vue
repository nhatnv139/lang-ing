<template>
  <PageFooter :class="currentRoute === 'download' ? 'un-border-radius' : ''" v-if="!listRouteDisplayFormGetTour.includes(currentRoute)">
    <FormFooter></FormFooter>
  </PageFooter>
  <div class="w-full flex flex-col relative items-center justify-center mobile:pt-24 pt-[197px] overflow-hidden">
    <InterestedFooter v-if="listRouteDisplayFormGetTour.includes(currentRoute)"></InterestedFooter>
    <FormGetTour v-if="!listRouteDisplayFormGetTour.includes(currentRoute)" class="pb-[247px] mobile:pb-12"></FormGetTour>
    <div class="layout-footer w-full max-w-[1288px] gap-12 flex flex-row mobile:flex-col gap-y-6 py-12 justify-between padding-layout-global z-[10] ">
      <div
          class="flex flex-col tablet:!items-center gap-6 mobile:items-start z-10 w-full max-w-[288px]"
      >
        <div class="w-full max-w-[288px]">
          <AppLogo max-width="230px"></AppLogo>
        </div>
        <ListSocial></ListSocial>
      </div>
      <div class="z-10 flex justify-end w-full tablet:justify-center mobile:justify-center">
        <div
            class="flex flex-col gap-8 laptop:col-span-2 tablet:col-span-2 mobile:gap-4 text-gray-4 mobile:w-full"
        >
          <div class="grid grid-cols-5 gap-8 gap-x-1 mobile:grid-cols-2 max-w-[784px] w-full">
            <div
                v-for="(item, index) in LIST_MENU?.list_item"
                :key="index + 'footer-menu'"
            >
              <a
                  @click="handleChangeMenu(item)"
                  :class="[
                  'text-content-4 text-neutral-0 mobile:!text-base uppercase hover:!text-emphasis',
                  router.currentRoute.value.name === item.name ? '!text-emphasis' : ''
                ]"
              >
                {{ item.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg
        class="z-[10]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="2"
        viewBox="0 0 1920 2"
        fill="none"
    >
      <path d="M0 1H1920" stroke="white" stroke-opacity="0.1" stroke-dasharray="16 16" />
    </svg>
    <div class="h-[66px] footer-bottom flex items-center justify-center w-full z-[10]">
      <p class="text-xs text-center text-neutral-400">
        © 2024 Athene Group LTD. | All rights reserved.
      </p>
    </div>
    <div class="bubble-footer">

    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { Layout } from 'ant-design-vue'
import ListSocial from '@/components/app/ListSocial.vue'
import AppLogo from '@/components/app/AppLogo.vue'
import router, { LIST_ROUTES } from '@/router'
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/appStore'
import FormFooter from '@/layout/component/FormFooter.vue'
import FormGetTour from "@/layout/component/FormGetTour.vue";
import InterestedFooter from "@/layout/component/InterestedFooter.vue";
import { scrollToId } from '../helper'
export default {
  name: 'LayoutFooter',
  components: {
    PageFooter: Layout.Footer,
    ListSocial,
    FormGetTour,
    AppLogo,
    FormFooter,
    InterestedFooter
  },
  setup() {
    const { t } = useI18n()
    const currentRoute = computed(() => {
      return router.currentRoute.value.name
    })
    const listRouteDisplayFormGetTour = ['foundation']
    const listMenu = computed(() => {
      return LIST_ROUTES.map((item) => {
        return {
          label: item.title,
          name: item.name,
          path: item.path,
          hideMenu: item.hideMenu,
          children: item.children
        }
      })
    })
    const totalMenuChildren = computed(() => {
      let menuArray = []
      listMenu.value.forEach((item) => {
        menuArray = menuArray.concat(item.children)
      })
      return menuArray
    })

    const LIST_MENU = {
      title: 'footer.menu.menu',
      list_item: totalMenuChildren.value
    }

    const LIST_MENU_INFO = {
      title: 'footer.menu.info',
      list_item: listMenu.value.filter((item) => item.hideMenu)
    }

    const LIST_MENU_GUIDES = {
      title: 'footer.menu.guides',
      list_item: [
        {
          label: 'footer.guides.how_to',
          link: ''
        }
      ]
    }

    const handleChangeMenu = (item) => {
      const LIST_ROUTE_COMING = ['product']
      if (LIST_ROUTE_COMING.includes(item.name)) {
        useAppStore().setModalComingSoon(true)
      } else {
        if (item.name === 'mobile-app') {
          if(window.innerWidth < 768) {
            scrollToId('form-download-mobile')
          } else {
            scrollToId('form-download-footer')
          }
        } else {
          router.push({
            name: item.name
          })
        }
      }
    }

    const handleClickGuide = (item) => {
      if (item.link) {
        window.open(item.link, '_blank')
      } else {
        useAppStore().setModalComingSoon(true)
      }
    }
    return {
      LIST_MENU,
      t,
      handleChangeMenu,
      handleClickGuide,
      currentRoute,
      listRouteDisplayFormGetTour,
      router,
      LIST_MENU_INFO,
      LIST_MENU_GUIDES
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.ant-layout-footer {
  border-radius: 60px 60px 0px 0px;
  overflow: hidden;
  background: linear-gradient(180deg, #0e3b3e 0%, #0d2d2f 33.44%, #0a1313 100%);
  width: 100%;
  padding-top: 230px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply mobile:rounded-t-2xl mobile:pt-[155px];
  .layout-footer {
    max-width: 1534px;
    margin-bottom: 40px;
    max-width: 1200px;
    width: 100%;
    @apply flex flex-row mobile:justify-center mobile:flex-wrap tablet:justify-center tablet:flex-wrap mx-auto tablet:gap-12 mobile:gap-12 mobile:pb-[60px];
  }
}
.un-border-radius {
  border-radius: 0 !important;
}
.bubble-footer {
  width: 100vw;
  position: absolute;
  aspect-ratio: 1/1;
  transform: translateY(50%);
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #0A1013 0%, #214B2F 0.01%, #124E47 54.63%, #0A1013 100%);
  filter: blur(250px);
}
</style>
