<template>
  <div class="flex flex-row items-center gap-4 select-none main-menu-custom desktop-2:px-8 desktop-3:gap-10">
    <div v-for="item in getMenuRoute" :key="item.name + 'menu'" class="cursor-pointer group">
      <div @click="handleMenuClick(item)" v-if="item.children.length < 2">
        <span
          :class="[
            route.currentRoute.value.name === item.name
              ? 'border-b-2 border-neutral-200 text-neutral-200'
              : 'border-b-2 text-neutral-200 border-transparent',
            'group-hover:text-white transition-all duration-500 text-base pb-2 laptop:!text-[13px]'
          ]"
          >{{ item.title }}</span
        >
      </div>
      <a-dropdown
        :trigger="['click']"
        placement="bottom"
        overlayClassName="wrap_drop_down_sub_menu"
        v-else
      >
        <div
          class="flex flex-row items-center gap-1"
          :class="[
            item.name === parentActive
              ? 'border-b-2 border-white text-white'
              : 'border-b-2 text-gray-4 border-transparent',
            'group-hover:text-white transition-all duration-1000 text-base'
          ]"
        >
          <span @click.prevent>
            {{ item.title }}
          </span>
          <DownOutlined style="font-size: 14px; margin-top: 2px" />
        </div>
        <template #overlay>
          <div
            class="flex flex-col overflow-hidden rounded-2xl px-4 py-2 mt-4 border border-[#3D342F] bg-[#1D1A17]"
          >
            <div
              class="cursor-pointer group"
              v-for="children in item.children"
              :key="children.name"
              @click="handleMenuClick(children)"
            >
              <div
                v-if="!children.hideMenu"
                class="h-[32px] w-full transition-all duration-500 flex items-center"
              >
                <p
                  :class="[
                    route.currentRoute.value.name === children.name ? 'text-white' : 'text-gray-4',
                    'group-hover:!text-white transition-all duration-500 text-base !text-center cursor-pointer'
                  ]"
                  @click.prevent
                >
                  {{ children.title }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import router, { LIST_ROUTES } from '@/router/index.js'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/appStore'
import { DownOutlined } from '@ant-design/icons-vue'
import { scrollToId } from '../../helper'
export default defineComponent({
  name: 'DefaultMenu',
  components: { DownOutlined },
  setup() {
    const currentMenuItem = ref(['home'])
    const parentActive = computed(() => {
      if (route.currentRoute.value.meta.parent) return route.currentRoute.value.meta.parent
      else return ''
    })
    const route = useRouter()
    const getActiveMenuByCurrentRoute = () => {
      currentMenuItem.value[0] = route.currentRoute?.value?.name
    }

    const getMenuRoute = computed(() => {
      return LIST_ROUTES.filter((item) => !item.hideMenu)
    })
    onMounted(() => {
      getActiveMenuByCurrentRoute()
    })

    const handleCheckMenu = (data) => {
      currentMenuItem.value = ['home']
      const LIST_ROUTE = ['product', 'support']
      if (LIST_ROUTE.includes(data)) {
        currentMenuItem.value = ['home']
      }
    }
    const handleMenuClick = (items) => {
      const LIST_COMING_SOON = ['product']
      if (LIST_COMING_SOON.includes(items.name)) {
        useAppStore().setModalComingSoon(true)
      } else {
        if (items.name === 'mobile-app') {
            if(router.currentRoute.value.name === 'foundation') {
                router.push({
                  name: 'home'
                })

              setTimeout(() => {
                if(window.innerWidth < 768) {
                  scrollToId('form-download-mobile')
                } else {
                  scrollToId('form-download-footer')
                }
              }, 1000)
            }
          if(window.innerWidth < 768) {
            scrollToId('form-download-mobile')
          } else {
            scrollToId('form-download-footer')
          }
        } else {
          route.push({
            name: items.name
          })
        }
      }
    }
    return {
      currentMenuItem,
      LIST_ROUTES,
      handleCheckMenu,
      getMenuRoute,
      route,
      parentActive,
      handleMenuClick
    }
  }
})
</script>
<style lang="scss">
@import '@/design/variable.scss';
.main-menu-custom {
  height: $height-menu;
}

.wrap_drop_down_sub_menu {
  .ant-dropdown-menu {
    background: #6a5c54;
    .ant-dropdown-menu-item:hover {
      background: #6a5c54;
    }
  }
}
.anticon-down {
  transition: all 1s !important;
}
.ant-dropdown-open {
  .anticon {
    rotate: 180deg !important;
  }
}
</style>
