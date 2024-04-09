<template>
  <div id="navbar" class="transition-all duration-1000 wrap_header desktop-3:px-12 desktop:px-6">
    <PageHeader>
      <div class="header-left-main">
        <div class="app-logo-header w-[280px] select-none">
          <AppLogo></AppLogo>
        </div>
        <div class="hidden mobile:flex tablet:flex">
          <MenuMobile></MenuMobile>
        </div>
      </div>
      <div
        class="mobile:hidden tablet:hidden flex flex-row items-center justify-center overflow-hidden rounded-[45px] w-fit"
      >
        <MenuDefault></MenuDefault>
      </div>
      <div class="flex gap-5 mobile:hidden max-w-[200px] w-full tablet:hidden">
        <ButtonCustom type="click" @click="handleDirect"> </ButtonCustom>
      </div>
    </PageHeader>
  </div>
</template>
<script>
import MenuMobile from '@/layout/component/MenuMobile.vue'
import { Layout } from 'ant-design-vue'
import MenuDefault from './component/Menu.vue'
import AppLogo from '@/components/app/AppLogo.vue'
import { onMounted, ref, onUnmounted } from 'vue'
import ButtonCustom from '@/components/app/ButtonCustom.vue'
import {handleClickDownload} from "@/helper";
import { scrollToId } from '../helper'
export default {
  name: 'LayoutHeader',
  components: {
    PageHeader: Layout.Header,
    MenuDefault,
    AppLogo,
    MenuMobile,
    ButtonCustom
  },
  setup() {
    const prevScrollpos = ref(window.scrollY)
    const handleScroll = () => {
      if (window.innerWidth > 1024) {
        let currentScrollPos = window.scrollY
        if (prevScrollpos.value > currentScrollPos) {
          document.getElementById('navbar').style.top = '0'
        } else {
          document.getElementById('navbar').style.top = '-88px'
        }
        prevScrollpos.value = currentScrollPos
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    const handleDirect = () => {
      if (window.innerWidth < 768) {
        scrollToId('form-download-mobile')
      } else {
        scrollToId('form-download-footer')
      }
    }

    return {
      handleDirect,
      handleClickDownload
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.wrap_header {
  display: flex;
  z-index: 100;
  width: 100%;
  position: fixed;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  @media only screen and (min-width: 1025px) {
    background: $color-header;
    backdrop-filter: blur(5.8px);
    -webkit-backdrop-filter: blur(5.8px);
  }
  @media only screen and (max-width: 1024px) {
    background: linear-gradient(180deg, black, transparent);
  }
  .ant-layout-header {
    width: 100%;
    max-width: $max-wrap-container !important;
    height: $height-header;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    background: transparent;
    justify-content: space-between;
    @apply mobile:px-0 px-3;
    .box-locale-header {
      height: $height-menu;
      display: flex;
      align-items: center;
    }

    .header-left-main {
      @apply w-full max-w-[168px];
      @media only screen and (max-width: 1024px) {
        background: rgba(255, 255, 255, 0);
        backdrop-filter: blur(5.8px);
        -webkit-backdrop-filter: blur(5.8px);
        .app-logo-header {
          @apply max-w-[200px] w-full;
        }
        @apply max-w-[100%] w-full h-full mobile:px-4 border-b border-gray-1 tablet:px-6 flex flex-row items-center justify-between overflow-hidden gap-6;
      }
    }
  }
}
</style>
