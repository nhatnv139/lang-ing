<template>
  <div class="wrap_white_paper">
    <div v-if="!rendWidthScreen">
      <div
        class="fixed right-0 bottom-[290px] z-[1000] bg-primary-color w-[80px] h-[48px] flex justify-center items-center rounded-l-[48px]"
      >
        <menu-fold-outlined style="font-size: 24px" class="!text-neutral-0" @click="showDrawer" />
      </div>
      <div
        :class="[
          'drawer-menu-white-paper !z-[10000] fixed h-screen top-0 right-0',
          open ? 'w-screen' : 'w-0'
        ]"
      >
        <div :class="[open ? '!w-screen' : 'w-0', 'white_paper_menu relative']">
            <close-outlined class="!text-neutral-0 text-3xl absolute top-6 left-6" @click="handleCloseMenu" />
          <div
            @click="handleSelectMenu(item.key)"
            v-for="item in LIST_MENU_WHITE_PAPER"
            :key="item.key"
            :class="[
              'h-12 px-6 py-2 font-semibold cursor-pointer relative hover:text-emphasis flex items-center',
              keyTabActive === item.key ? 'text-emphasis' : ' text-neutral-0'
            ]"
          >
            <span class="line-clamp-1 z-10">{{ item.label }}</span>
            <div
              class="absolute top-0 left-0 bottom-0 w-0 bg-[#131D20] duration-500 transition-all"
              :class="keyTabActive === item.key ? 'w-[100%]' : ''"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div v-if="rendWidthScreen" class="white_paper_menu mobile:!hidden">
        <a-tooltip
          @click="handleSelectMenu(item.key)"
          v-for="item in LIST_MENU_WHITE_PAPER"
          :key="item.key"
          placement="rightBottom"
          :color="'#192a31'"
        >
          <template #title>
            <span>{{ item.label }}</span>
          </template>
          <div
            :class="[
              'h-12 px-6 py-2 font-semibold cursor-pointer relative hover:text-emphasis flex items-center',
              keyTabActive === item.key ? 'text-emphasis' : ' text-neutral-0'
            ]"
          >
            <span class="line-clamp-1 z-10">{{ item.label }}</span>
            <div
              class="absolute top-0 left-0 bottom-0 w-0 bg-[#131D20] duration-500 transition-all"
              :class="keyTabActive === item.key ? 'w-[100%]' : ''"
            ></div>
          </div>
        </a-tooltip>
      </div>
      <div class="white_paper_content">
        <component v-bind:is="keyTabActive"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted, ref, watch } from 'vue'
import Introduction from '@/views/WhitePapper/component/Introduction.vue'
import Accelerators from '@/views/WhitePapper/component/Accelerators.vue'
import Applications from '@/views/WhitePapper/component/Applications.vue'
import Incentives from '@/views/WhitePapper/component/Incentives.vue'
import Processing from '@/views/WhitePapper/component/Processing.vue'
import Roadmap from '@/views/WhitePapper/component/Roadmap.vue'
import Token from '@/views/WhitePapper/component/Token.vue'
import { scrollToTop } from '@/helper'
import { MenuFoldOutlined, CloseOutlined } from '@ant-design/icons-vue'

export default {
  name: 'WhitePaperPage',
  components: {
    Introduction,
    Accelerators,
    Applications,
    Incentives,
    Processing,
    Roadmap,
    Token,
    MenuFoldOutlined,
    CloseOutlined
  },
  setup() {
    const open = ref(false)
    const keyTabActive = ref('Introduction')
    const LIST_MENU_WHITE_PAPER = [
      {
        label: 'Introduction',
        key: 'Introduction'
      },
      {
        label: 'Data Collection and Processing',
        key: 'Processing'
      },
      {
        label: 'Token Model',
        key: 'Token'
      },
      {
        label: 'Mining Mechanisms and Incentives',
        key: 'Incentives'
      },
      {
        label: 'Boosters and Accelerators',
        key: 'Accelerators'
      },
      {
        label: 'Use Cases and Applications',
        key: 'Applications'
      },
      {
        label: 'Roadmap',
        key: 'Roadmap'
      }
    ]

    const rendWidthScreen = computed(() => {
      return window.innerWidth > 1024
    })
    const handleSelectMenu = (key) => {
      open.value = false
      keyTabActive.value = key
      scrollToTop()
    }
    const showDrawer = () => {
      open.value = true
    }
    const handleCloseMenu = () => {
      open.value = false
    }

    watch(
      () => open.value,
      () => {
        if (open.value) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'unset'
        }
      }
    )

    onMounted(() => {
      scrollToTop()
    })
    return {
      LIST_MENU_WHITE_PAPER,
      open,
      keyTabActive,
      rendWidthScreen,
      showDrawer,
      handleSelectMenu,
      handleCloseMenu
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.wrap_white_paper {
  width: 100%;
  max-width: $max-wrap-container;
  min-height: 100vh;
  @apply border-gray-1;
  .drawer-menu-white-paper {
    background: rgba(12, 15, 17, 0.9);
    transition: all 1s;
    @apply flex justify-end;
  }
  .white_paper_menu {
    transition: all 1s;
    background: linear-gradient(180deg, #0e3b3e 0%, #0d2d2f 33.44%, #0a1313 100%);
    @apply  min-h-screen flex flex-col border-r border-gray-1 py-12 pt-24;
  }
  .white_paper_content {
    padding: 48px;
    padding-top: 112px;
    width: 100%;
    @apply mobile:p-3 tablet:p-6 mobile:pb-12 mobile:pt-[100px] tablet:pb-12;
  }
}
</style>
