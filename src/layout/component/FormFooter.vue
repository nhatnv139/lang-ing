<template>
  <div
    class="w-full mobile:mb-[120px] flex flex-col gap-[60px] items-center relative mb-[203px] max-w-[824px] mobile:px-3"
  >
    <img :v-motion-title-section-visible="!checkRouteDownload"
      class="absolute max-w-[400%] mobile:max-w-[200%] mobile:bottom-[52%] -bottom-[50%]"
      :src="BgFooter"
    />
    <div :v-motion-title-section-visible="!checkRouteDownload" class="box-icon-hammer flex w-[162px] h-[162px] mobile:w-[120px] mobile:h-[120px] z-10">
      <img  class="w-[60%] m-auto" :src="HammerIcon" />
    </div>
    <h2 :v-motion-title-section-visible="!checkRouteDownload"
            id="form-download-mobile"
      class="text-neutral-0 text-heading-2 !font-medium text-center"
      v-html="$t('footer.title')"
    ></h2>
    <p :v-motion-title-section-visible="!checkRouteDownload"
      class="text-content-4 !text-neutral-400 !font-light max-w-[731px] w-full text-center"
      v-html="$t('footer.content')"
    ></p>
    <div class="flex flex-col items-center gap-10 mobile:gap-4">
      <div
        id="form-download-footer"
        class="flex w-full flex-row max-w-[538px] gap-10 mobile:gap-4 justify-between items-center z-10"
      >
        <img
          @click="handleDirect(item.link)"
          v-for="item in LIST_PLAT_FORM"
          :key="item.title"
          class="cursor-pointer desktop:hover:scale-110 transition-all duration-700 w-full max-w-[246px] mobile:max-w-[47%] flex"
          :src="item.logo"
          alt=""
        />
      </div>
      <div class="w-full z-10 max-w-[538px]">
        <ButtonCustom
          class="mobile:!h-[52px] !hidden"
          height="65px"
          color="rgba(148, 255, 223, 1)"
          label="Buy ATH Token"
        ></ButtonCustom>
      </div>
    </div>
  </div>
</template>
<script>
import {computed} from 'vue'
import HammerIcon from '@/assets/icons/hammer_icon.png'
import ButtonCustom from '@/components/app/ButtonCustom.vue'
import BgFooter from '@/assets/images/bg-footer.png'
import ButtonAppstore from '@/assets/images/app-store-button.png'
import ButtonGooglePlay from '@/assets/images/google-play-button.png'
import { useAppStore } from '@/stores/appStore'
import router from '../../router'

export default {
  components: {
    ButtonCustom
  },
  setup() {
    const checkRouteDownload = computed(() => {
      return router.currentRoute.value.name === 'download'
    })
    const LIST_PLAT_FORM = [
      {
        logo: ButtonAppstore,
        title: 'Download on the',
        sub_title: 'App Store',
        maxWidth: '39px',
        link: 'https://apps.apple.com/us/app/athene-network/id6473136372'
      },
      {
        logo: ButtonGooglePlay,
        title: 'GET IT ON',
        sub_title: 'Google Play',
        maxWidth: '45px',
        link: 'https://play.google.com/store/apps/details?id=network.athene.app'
      }
    ]

    const handleDirect = (link) => {
      if (link) {
        window.open(link, '_blank')
      } else {
        useAppStore().setModalComingSoon(true)
      }
    }
    return {
      HammerIcon,
      LIST_PLAT_FORM,
      BgFooter,
      checkRouteDownload,
      handleDirect
    }
  }
}
</script>
<style lang="scss">
.box-icon-hammer {
  border-radius: 28.729px;
  background: var(--neutral-900, #0d100f);
  box-shadow: 0px 0px 39.9014778137207px 0px #00ffc2 inset;
}
</style>
