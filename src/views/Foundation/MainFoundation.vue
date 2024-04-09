<template>
  <div class="foundation-main pt-[124px] desktop:pt-0">
    <div class="blur-light w-full aspect-square desktop:w-[1500px] desktop:h-[1500px] absolute top-0 z-[10] desktop:translate-y-[-50%]">
    </div>
    <div class="foundation-main-body max-w-[1920px] desktop:absolute w-full flex flex-col desktop:grid desktop:px-12 grid-cols-2 z-[11]">
      <div class="foundation-main-body__left flex desktop-2:pl-[100px] flex-col gap-[24px] px-3 z-[10]">
        <h1  class="title-main text-heading-2-1 my-auto">Athene Foundation <br>Empowering Startup<br>Innovation</h1>
        <p class="text-content-3 !text-white !font-normal desktop:w-[70%]">Discovering, supporting, investing in, and nurturing startups toward blockchain integration to operate on the Athene Network mainnet</p>
      </div>
      <div class="foundation-main-body__right relative h-[300px]">
        <img class="w-full flex desktop:hidden translate-y-[-40px] tablet:translate-y-[-400px]" :src="BannerMobile" alt="">
      </div>
    </div>
    <img class="w-full hidden desktop:flex" :src="MainBanner" alt="">
  </div>
</template>
<script>
import MainBanner from '@/assets/images/Foundation/banner-main-foundation.png'
import BannerMobile from '@/assets/images/Foundation/banner-main-mobile.png'

export default {
    setup() {
        return {
          MainBanner,
          BannerMobile
        }
    }
}
</script>
<style lang="scss">
.foundation-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  .foundation-main-body {
  }
}
</style>
