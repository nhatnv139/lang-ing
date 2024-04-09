<template>
  <menu-outlined class="text-2xl !text-[#29947b]" @click="showDrawer"/>
  <a-drawer
      class="drawer-menu-mobile"
      :class="!openDrawer ? 'seperate-top' : ''"
      :placement="'top'"
      :closable="false"
      :visible="openDrawer"
  >
    <template #title>
      <div class="flex flex-row items-center justify-between">
        <div class="w-[200px]">
          <AppLogo></AppLogo>
        </div>
        <close-outlined @click="onClose" class="text-lg text-white" style="color: white"/>
      </div>
    </template>
    <div class="flex flex-col justify-between gap-12 pb-10 ">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-10 menu-mobile-routes">
          <div v-for="item in listMenu" :key="item.path">
            <a v-if="item.name === 'pitch-deck'" href="/PitchDeck.pdf" target="_blank" class='!font-semibold text-xl !text-neutral-0'>
              {{ item.label }}
            </a>
            <div v-else>
              <div v-if="item.children.length < 2" @click="handleSelectMenu(item)">
              <span
                  :class="[
                  '!font-semibold text-xl !text-neutral-0',
                  currentRoutes.name === item.name ? 'border-b border-neutral-0 pb-1' : ''
                ]"
              >{{ item.label }}</span
              >
              </div>
              <div v-else :class="['py-1 border-b border-gray-1']">
              <span
                  :class="[
                  'font-bold text-2xl',
                  currentRoutes.meta?.parent === item.name ? 'text-white' : 'text-gray-4'
                ]"
              >{{ item.label }}</span
              >
                <div class="flex flex-col mt-4 overflow-hidden">
                  <div
                      class="cursor-pointer group"
                      v-for="children in item.children"
                      :key="children.name"
                      @click="handleSelectMenu(children)"
                  >
                    <div
                        v-if="!children.hideMenu"
                        class="h-[40px] w-full transition-all duration-500 px-6 flex items-center"
                    >
                      <p
                          :class="[
                        currentRoutes.name === children.name ? 'text-white' : 'text-gray-4',
                        'group-hover:!text-white transition-all duration-500 text-lg font-bold cursor-pointer'
                      ]"
                          @click.prevent
                      >
                        {{ children.title }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ButtonCustom @click="handleDirectDownload" type="click"></ButtonCustom>
        </div>
      </div>
      <div
          class="w-full flex justify-center items-center pt-[35px] border-t border-gray-1 pb-[10px]"
      >
        <ListSocial width="48px"></ListSocial>
      </div>
    </div>
  </a-drawer>
</template>
<script>
import {computed, ref} from 'vue'
import AppLogo from '@/components/app/AppLogo.vue'
import {MenuOutlined, CloseOutlined} from '@ant-design/icons-vue'
import router, {LIST_ROUTES} from '@/router'
import {useAppStore} from '@/stores/appStore'
import ButtonCustom from '@/components/app/ButtonCustom.vue'
import ListSocial from '@/components/app/ListSocial.vue'
import { handleClickDownload } from "@/helper";
import { scrollToId } from '../../helper'
export default {
  components: {MenuOutlined, ListSocial, AppLogo, ButtonCustom, CloseOutlined},
  setup() {
    const openDrawer = ref(false)
    const showDrawer = () => {
      openDrawer.value = true
    }
    const listRouteLink = ['pitch-deck']

    const currentRoutes = computed(() => {
      return router.currentRoute.value
    })

    const listMenu = computed(() => {
      return LIST_ROUTES.map((item) => {
        return {
          label: item.title,
          name: item.name,
          path: item.path,
          hideMenu: item.hideMenu,
          children: item.children
        }
      }).filter((item) => !item.hideMenu)
    })

    const onClose = () => {
      openDrawer.value = false
    }

    const handleSelectMenu = (menu) => {
      const LIST_ROUTE_COMING = ['product']
      if (LIST_ROUTE_COMING.includes(menu.name)) {
        useAppStore().setModalComingSoon(true)
      } else {
        if (menu.name === 'mobile-app') {
          onClose()
          setTimeout(() => {
            if (window.innerWidth < 768) {
              scrollToId('form-download-mobile')
            } else {
              scrollToId('form-download-footer')
            }
          }, 300)
        } else {
          document.body.scrollTo({top: 0, behavior: 'smooth'})
          router.push({
            name: menu.name
          })
          onClose()
        }
      }
    }

    const handleDirectDownload = () => {
      onClose()
      if (window.innerWidth < 768) {
        scrollToId('form-download-mobile')
      } else {
        scrollToId('form-download-foote')
      }

    }
    return {
      showDrawer,
      onClose,
      handleSelectMenu,
      listRouteLink,
      listMenu,
      currentRoutes,
      openDrawer,
      handleDirectDownload,
      handleClickDownload
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.drawer-menu-mobile {
  width: 100vw !important;
  z-index: 10000000000;

  .ant-drawer-content-wrapper {
    box-shadow: unset !important;
    height: 100vh !important;
    transition-duration: 1s !important;
  }

  .ant-drawer-header,
  .ant-drawer-body {
    border-bottom: unset;
    border-top: unset;
  }

  .ant-drawer-body,
  .ant-drawer-header {
    background: #0c0f11;
  }

  .ant-drawer-content {
    background-color: transparent !important;
    overflow: hidden;
  }

  .ant-select-selection-item {
    padding-right: 0 !important;
  }
}

.seperate-top {
  .ant-drawer-content {
    margin-top: 0px;
  }
}
</style>
