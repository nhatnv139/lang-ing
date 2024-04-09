<template>
  <div class="header-v2-container !hidden desktop:!flex">
    <div class="header-v2">
      <AppLogo class="!max-w-[150px] !desktop:max-w-[200px]"></AppLogo>
      <MenuV2 class="!hidden desktop:!flex"></MenuV2>
      <ButtonCustom class="w-full max-w-[160px] !rounded-[32px]" type="click" @click="handleDirect"> </ButtonCustom>
    </div>
  </div>
  <div class="header-v2-container-mobile desktop:!hidden !flex">
    <div v-click-outside="closeMenu" :class="['header-v2-mobile w-full', visibleMenuMobile ? 'pb-6 border-radius-open' : '']">
      <div :class="['flex flex-row items-center justify-between w-full px-6 py-4', visibleMenuMobile ? 'border-b border-solid border-b-emerald-700' : '']"><AppLogo class="!max-w-[150px] !desktop:max-w-[200px]"></AppLogo>
      <CloseOutlined v-if="visibleMenuMobile" class="!text-xl !text-white cursor-pointer" @click="openMenuMobile"></CloseOutlined>
      <MenuOutlined v-else class="!text-xl !text-white cursor-pointer" @click="openMenuMobile"></MenuOutlined>
      </div>
      <div v-if="visibleMenuMobile">
        <MenuMobileV2 @closeMenu="closeMenu"></MenuMobileV2>
        <div  class="w-full px-3 pt-6">
          <ButtonCustom class="w-full !rounded-[32px]" type="click" @click="handleDirect"> </ButtonCustom>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {ref, watch} from 'vue'
import AppLogo from "@/components/app/AppLogo.vue";
import ButtonCustom from "@/components/app/ButtonCustom.vue";
import MenuV2 from "@/layout/component/MenuV2.vue";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons-vue";
import MenuMobileV2 from "./component/MenuMobileV2.vue";
import { scrollToId } from '../helper';
import router from "../router";
export default {
  components: {
    AppLogo,
    ButtonCustom,
    MenuV2,
    MenuMobileV2,
    CloseOutlined,
    MenuOutlined
  },
  setup() {
    const visibleMenuMobile = ref(false)

    const scrollFunc = () => {
      if (window.innerWidth < 768) {
        scrollToId('form-download-mobile')
      } else {
        scrollToId('form-download-footer') 
      }
    }
    const handleDirect = () => {
      const routeNotFormDownload = ['foundation']
      if(routeNotFormDownload.includes(router.currentRoute.value.name)) {
          router.push('home')
        setTimeout(() => {
          scrollFunc()
        }, 1100)
      } else {
        scrollFunc()
      }
      visibleMenuMobile.value = false
    }

    const openMenuMobile = () => {
      if(visibleMenuMobile.value) {
        visibleMenuMobile.value = false
      } else visibleMenuMobile.value = true
    }

    const closeMenu = () => {
      visibleMenuMobile.value = false
    }

    watch(() => visibleMenuMobile.value, () => {
      if(visibleMenuMobile.value) {
        document.body.style.overflowY = "hidden";
      } else document.body.style.overflowY = "scroll";
    })
    return {
      handleDirect,
      closeMenu,
      openMenuMobile,
      visibleMenuMobile
    }
  }

}
</script>
<style>
.header-v2-container {
  position: fixed;
  display: flex;
  top: 12px;
  z-index: 10000;
  width: 100%;
  max-width: 1200px;
  padding: 0 12px;
  margin: 0 12px;
  height: 70px;
  .header-v2  {
    width: 100%;
    border-radius: 40px;
    border: 1px solid rgba(0, 255, 212, 0.30);
    background: linear-gradient(180deg, rgba(8, 112, 119, 0.70) 0%, rgba(13, 45, 47, 0.70) 71.97%, rgba(10, 19, 19, 0.70) 215.21%);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    gap: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
  }
}

.header-v2-container-mobile {
  position: fixed;
  display: flex;
  top: 12px;
  z-index: 1000;
  width: 100%;
  padding: 0 12px;
  max-width: 1200px;
  .header-v2-mobile {
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 255, 212, 0.30);
    background: linear-gradient(180deg, rgba(8, 112, 119, 0.70) 0%, rgba(13, 45, 47, 0.70) 71.97%, rgba(10, 19, 19, 0.70) 215.21%);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 50px;
  }
  .border-radius-open {
    border-radius: 24px;
    background: linear-gradient(#0e565b,#112627);
  }
}

@media screen and (max-width: 1024px) {
  .header-v2-container {
    height: 60px;
    .header-v2 {
      padding: 12px 32px;
    }
  }
}
</style>
