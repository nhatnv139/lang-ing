<template>
  <div class="wrap_support">
    <div class="support_header relative">
      <div class="absolute mobile:relative mobile:-top-[70px] right-0 left-0 flex -top-[160px]">
        <div class="w-full max-w-[1200px] mx-auto flex tablet:px-6 mobile:px-3">
          <h1
              class="text-heading-1 w-full max-w-[1065px] justify-start !font-medium !text-neutral-0"
          >
            {{ $t('support.title') }}
          </h1>
        </div>
      </div>
      <img class="mobile:h-[257px]" :src="BgHeader"/>
    </div>
    <div class="support_content">
      <div
          class="flex flex-row justify-between w-full py-[269px] mobile:py-[132px] tablet:py-[180px] tablet:flex-col mobile:flex-col gap-6"
      >
        <p class="text-emphasis text-heading-2 font-medium">FAQs</p>
        <FAQ class="w-full"></FAQ>
      </div>
      <div
          class="w-full bg-linear-custom-1 rounded-[36px] h-[753px] tablet:h-[960px] mobile:h-[545px] pt-[81px] tablet::pt-[48px] mobile:pt-[43px] overflow-hidden bg-neutral-400 relative"
      >
        <div class="absolute blur-light -left-[20%] w-[600px] h-[600px]"></div>
        <div class="w-full flex flex-col h-full justify-between !z-10 mobile:relative">
          <p
              class="text-heading-2 mobile:!text-2xl mobile:max-w-[70%] px-[77px] tablet:px-[44px] mobile:px-[34px] !font-medium !text-neutral-0"
          >
            {{ $t('support.look_for') }}
          </p>
          <DraggerBall></DraggerBall>
        </div>
      </div>
      <div class="flex h-[1200px] w-full relative tablet:h-[800px] mobile:h-[800px]">
        <div class="absolute top-0 left-0 right-0 bottom-0 flex">
          <div class="w-[300px] blur-light !rounded-full h-[300px] m-auto bg-amber-300"></div>
        </div>
        <div class="w-full m-auto grid grid-cols-2 z-10 mobile:grid-cols-1 tablet:grid-cols-1">
          <div class="w-full">
            <p class="text-heading-2 !text-neutral-0 tablet:!mb-12 mobile:!mb-12">
              {{ $t('support.access') }}
            </p>
          </div>
          <div class="flex mobile:w-full tablet:w-full">
            <div class="flex my-auto flex-col gap-12 w-full">
              <p class="text-content-4 !text-neutral-0" v-html="$t('support.content_access')"></p>
              <div
                  class="flex rounded-lg w-full max-w-[588px] bg-gray-3 mobile:bg-transparent flex-row justify-between items-center gap-5 mobile:flex-col p-1.5">
                <div
                    class="flex items-center justify-center h-[60px] mobile:rounded px-12 mobile:w-full mobile:bg-gray-3">
                  <span class="text-content-2 !font-semibold !text-neutral-0">{{ linkMailSupport }}</span>
                </div>
                <a :href="`mailto:${linkMailSupport}`"
                   class="w-full max-w-[235px] group mobile:max-w-[100%] h-[60px] flex px-[30px] cursor-pointer rounded bg-[#2B937A]"
                >
                  <span
                      class="text-content-2 group-hover:!text-emphasis transition-all duration-700 !text-neutral-0 !m-auto !font-semibold">{{
                      $t('common.contact_now')
                    }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BgHeader from '@/assets//images/Support/bg_support.png'
import FAQ from '@/views/Support/component/FAQ.vue'
import DraggerBall from '@/views/Support/component/DraggerBall.vue'
import {scrollToTop} from '@/helper'
import {onMounted} from 'vue'

export default {
  name: 'SupportPage',
  components: {FAQ, DraggerBall},
  setup() {
    const linkMailSupport = import.meta.env.VITE_BASE_MAIL_SUPPORT
    onMounted(() => {
      scrollToTop()
    })
    return {
      BgHeader,
      linkMailSupport
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_support {
  @apply w-full pt-[324px] mobile:pt-[220px] bg-[#0A1013] flex flex-col items-center;
  .support_content {
    @apply w-full max-w-[1200px] flex flex-col items-center tablet:px-6 mobile:px-3;
  }
}
</style>
