<template>
  <div class="wrap_about">
    <div class="about_header_main relative">
      <div class="absolute -top-[40%] w-full flex justify-center items-center">
        <div class="blur_light_about_1 w-screen h-screen"></div>
      </div>
      <div class="w-full flex mobile:px-3 tablet:px-6">
        <div
          v-motion-about-title
          class="mx-auto w-full max-w-[810px] ml-[13%] mt-[20%] mobile:mt-0 tablet:mt-0 mobile:!mb-[110px] tablet:ml-0 mobile:ml-0"
        >
          <h1 class="max-w-[672px] title-heading-about title_about mobile:max-w-[50vw]">
            {{ $t('about.title') }}
          </h1>
          <p v-motion-about-sub-title class="text-content-4 !text-neutral-0 mt-[48px] mobile:mt-6">
            {{ $t('about.content') }}
          </p>
        </div>
      </div>
      <div class="w-full mobile:flex flex-col items-end justify-start flex tablet:flex">
        <img
          v-motion-about-right
          class="w-full max-w-[43vw] mobile:max-w-[90vw] tablet:max-w-[60vw]"
          :src="MainRight"
        />
      </div>
    </div>
    <div
      class="about_our_mission tablet:mt-24 padding-layout-global max-w-[1300px] w-full flex flex-col gap-[180px] items-center relative"
    >
      <div
        class="absolute mobile:hidden tablet:hidden blur_light_about_2 h-[600px] w-[600px] -bottom-[30%] -left-[40%]"
      ></div>
      <div class="flex flex-row w-full justify-between gap-12 mobile:flex-col">
        <video
          v-motion-about-item-1
          id="video-1"
          class="mx-auto mr-0 mobile:hidden max-w-[470px] mix-blend-lighten tablet:max-w-[300px] mobile:max-w-[206px] mobile:ml-0 w-full"
          poster="/video-1.mp4"
          autoplay
          loop
          muted
          webkit-playsinline
          playsinline
        >
          <source src="/video-1.mp4" type="video/mp4" preload="auto" />
        </video>
        <img
          v-motion-about-item-1
          class="mx-auto hidden mobile:flex mr-0 max-w-[470px] mix-blend-lighten tablet:max-w-[300px] mobile:max-w-[206px] mobile:ml-0 w-full"
          src="/gif-test.gif"
        />
        <div v-motion-about-item-2>
          <p class="title_our_mission title-item-about !mb-12 mobile:!mb-6">
            {{ $t('about.out_mission') }}
          </p>
          <p class="text-content-4">
            {{ $t('about.item_1_content') }}
          </p>
        </div>
      </div>
      <div
        class="flex flex-row w-full justify-between items-center gap-6 mobile:flex-col-reverse mobile:items-start"
      >
        <p
          v-motion-about-item-2
          class="max-w-[650px] text-content-4"
          v-html="$t('about.item_2_content')"
        ></p>
        <video
          v-motion-about-item-1
          id="video-2"
          class="mx-auto mr-0 mobile:hidden max-w-[470px] mix-blend-lighten tablet:max-w-[300px] mobile:max-w-[206px] mobile:ml-0 w-full"
          poster="/earth.mp4"
          autoplay
          loop
          muted
          webkit-playsinline
          playsinline
        >
          <source src="/earth.mp4" type="video/mp4" preload="auto" />
        </video>
        <img
          v-motion-about-item-1
          class="mx-auto mr-0 hidden mobile:flex max-w-[470px] mix-blend-lighten tablet:max-w-[300px] mobile:max-w-[206px] mobile:ml-0 w-full"
          src="/earth.gif"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MainRight from '@/assets/images/About/main-right.svg'
import Item1 from '@/assets/images/About/item_1.png'
import { onMounted } from 'vue'
import { scrollToTop } from '@/helper'

export default {
  name: 'AboutPage',
  setup() {
    onMounted(() => {
      scrollToTop()
    })

    return {
      MainRight,
      Item1
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_about {
  width: 100%;
  padding-bottom: 404px;
  @apply flex justify-center flex flex-col items-center tablet:pb-[120px] mobile:pb-[325px];
  .about_header_main {
    min-height: 100vh;
    @apply grid grid-cols-2 w-full mobile:flex tablet:flex flex-col-reverse mobile:justify-start;

    .title_about {
      background: linear-gradient(180deg, #e2fff7 0%, #28ffc6 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .title_our_mission {
    background: var(--text-linear, linear-gradient(180deg, #fff 0%, #ccf3ef 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
