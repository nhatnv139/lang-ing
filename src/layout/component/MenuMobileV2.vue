<template>
  <div class="menu-v2-mobile-container">
    <div class="w-full menu-v2-mobile">
      <div v-for="item in itemsMobile" :key="item.label" class="border-b border-solid border-b-emerald-700">
        <a-dropdown v-if="item.children.length" overlayClassName="main-menu-overlay">
          <div :class="['ant-dropdown-link py-4 px-4 cursor-pointer hover:bg-emerald-950 flex flex-row items-center gap-2',item.name === currentRoute ? '!bg-[#2B937A]' : '' ]" @click.prevent>
            <span class="text-content-3 !text-white"> {{item.label}}</span>
            <DownOutlined class="!text-white text-content-3" v-if="item.children.length" />
          </div>
          <template v-if="item.children.length" #overlay>
            <a-menu>
              <a-menu-item v-for="children in item.children" :key="children.name" @click="handleMenuClick(children)">
                <p class="text-content-4 !text-white !capitalize">{{children.label}}</p>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <a-dropdown v-else>
          <div class="ant-dropdown-link" @click.prevent @click="handleMenuClick(item)">
            <div :class="['py-4 px-4 flex', item.name === currentRoute ? '!bg-[#2B937A]' : '']">
              <span class="text-[16px] uppercase !text-white mx-auto"> {{item.label}}</span>
            </div>
          </div>
        </a-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { DownOutlined } from "@ant-design/icons-vue";
import { useAppStore } from "../../stores/appStore";
import router from "../../router";
import { scrollToId } from '../../helper';
export default {
  name: "MenuV2",
  components: {
    DownOutlined,
  },
  emits: ['closeMenu'],
  setup(_, { emit }) {
    const keyMenuActive = ref('roadmap')
    const currentRoute = computed(() => {
      return router.currentRoute.value.name
    })
    const current = ref(['home']);

    const itemsMobile = ref([
      {
        label: 'Home',
        children: [],
        name: 'home',
        path: '/home',
      },
      {
        label: 'Roadmap',
        children: [],
        name: 'roadmap',
        path: '/roadmap',
      },
      {
        label: 'Ecosystem',
        children: [],
        name: 'ecosystem',
        path: '/ecosystem',
        key: ['ecosystem']
      },
      {
        label: 'Athene foundation',
        children: [],
        name: 'foundation',
        path: '/foundation',
      },
      {
        label: 'White paper',
        name: 'white-paper',
        children: [],
        path: '/white-paper',
      },
      {
        label: 'Pitch Deck',
        name: 'pitch-deck',
        children: [],
        path: '/pitch-deck',
      },
      {
        label: 'About us',
        children: [],
        name: 'about',
        path: '/about',

      },
      {
        label: 'Mobile app',
        name: 'mobile-app',
        children: [],
        path: '/mobile-app',
      },
      {
        label: 'Support',
        name: 'support',
        children: [],
        path: '/support',
      },
    ])
    const handleMenuClick = (items) => {
      keyMenuActive.value = items.name
      console.log(keyMenuActive.value)
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
          router.push({
            name: items.name
          })
        }
        emit('closeMenu')
      }
    }
    return {
      current,
      keyMenuActive,
      handleMenuClick,
      currentRoute,
      itemsMobile
    }
  }
}
</script>
<style lang="scss">
.menu-v2-mobile-container  {
  width: 100%;
  display: flex;
}
.menu-v2-mobile {
  margin: auto;
  display: flex;
  flex-direction: column;
}
</style>
