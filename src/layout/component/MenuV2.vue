<template>
  <div class="menu-v2-container">
    <div class="menu-v2">
      <template v-for="item in items" :key="item.label">
        <a-dropdown v-if="item.children.length" overlayClassName="main-menu-overlay">
          <div
            :class="[
              'ant-dropdown-link rounded-2xl py-2 px-4 cursor-pointer hover:bg-[#2B937A] flex flex-row items-center gap-2',
              item.key.includes(currentRoute) ? '!bg-[#2B937A]' : ''
            ]"
            @click.prevent
          >
            <span class="text-content-3 !text-white"> {{ item.label }}</span>
            <DownOutlined class="!text-white text-content-3" v-if="item.children.length" />
          </div>
          <template v-if="item.children.length" #overlay>
            <a-menu>
              <a-menu-item
                v-for="children in item.children"
                :key="children.name"
                @click="handleMenuClick(children)"
              >
                <p class="text-content-4 !text-white !capitalize">{{ children.label }}</p>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <a-dropdown v-else>
          <router-link :to="item?.path" class="ant-dropdown-link" @click.prevent>
            <div
              :class="[
                'rounded-2xl hover:bg-[#2B937A] py-2 px-4',
                item.key.includes(currentRoute) ? '!bg-[#2B937A]' : ''
              ]"
            >
              <span class="text-content-3 !text-white !capitalize"> {{ item.label }}</span>
            </div>
          </router-link>
        </a-dropdown>
      </template>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '../../stores/appStore'
import router from '../../router'
import { scrollToId } from '../../helper'
export default {
  name: 'MenuV2',
  components: {
    DownOutlined
  },
  setup() {
    const currentRoute = computed(() => {
      return router.currentRoute.value.name
    })
    const current = ref(['mail'])
    const items = ref([
      {
        label: 'Home',
        children: [],
        name: 'home',
        path: '/home',
        key: ['home']
      },
      {
        label: 'Roadmap',
        children: [],
        name: 'roadmap',
        path: '/roadmap',
        key: ['roadmap']
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
        key: ['foundation']
      },
      {
        label: 'White paper',
        name: 'white-paper',
        children: [],
        path: '/white-paper',
        key: ['white-paper']
      },
      // {
      //   label: 'Pitch Deck',
      //   name: 'pitch-deck',
      //   children: [],
      //   path: '/pitch-deck',
      //   key: ['pitch-deck']
      // },
      {
        label: 'More',
        key: ['mobile-app', 'about', 'support', 'pitch-deck'],
        children: [
          {
            label: 'Pitch Deck',
            name: 'pitch-deck',
            path: '/pitch-deck'
          },
          {
            label: 'About us',
            name: 'about',
            path: '/about'
          },
          {
            label: 'Mobile app',
            name: 'mobile-app',
            path: '/mobile-app'
          },
          {
            label: 'Support',
            name: 'support',
            path: '/support'
          }
        ]
      }
    ])
    const handleMenuClick = (items) => {
      const LIST_COMING_SOON = ['product']
      if (LIST_COMING_SOON.includes(items.name)) {
        useAppStore().setModalComingSoon(true)
      } else {
        if (items.name === 'mobile-app') {
          if (router.currentRoute.value.name === 'foundation') {
            router.push({
              name: 'home'
            })

            setTimeout(() => {
              if (window.innerWidth < 768) {
                scrollToId('form-download-mobile')
              } else {
                scrollToId('form-download-footer')
              }
            }, 1000)
          }
          if (window.innerWidth < 768) {
            scrollToId('form-download-mobile')
          } else {
            scrollToId('form-download-footer')
          }
        } else {
          router.push({
            name: items.name
          })
        }
      }
    }
    return {
      current,
      items,
      currentRoute,
      handleMenuClick
    }
  }
}
</script>
<style lang="scss">
.menu-v2-container {
  width: 100%;
  display: flex;
}
.menu-v2 {
  margin: auto;
  display: flex;
  flex-direction: row;
  gap: 12px;
}
.main-menu-overlay {
  .ant-dropdown-menu {
    background: #0d2d2f;
    border-radius: 12px;
    overflow: hidden;
    padding: 0;
    .ant-dropdown-menu-item {
      &:hover {
        background: rgba(18, 29, 26, 0.3);
      }
    }
  }
}
</style>
