<template>
  <section class="home_network_section overflow-y-hidden">
    <div class="home_network_section_body">
      <div class="text-center flex flex-col items-center">
        <h2 v-motion-title-section-visible class="text-gradient w-full text-heading-2 !mb-6">{{ $t('home.network.title') }}</h2>
        <p v-motion-title-section-visible class="text-content-4 w-full text-center max-w-[1004px] !mb-4" v-html="$t('home.network.content')">
        </p>
        <p v-motion-title-section-visible class="text-content-4 w-full text-center max-w-[1004px]" v-html="$t('home.network.content_1')"></p>
      </div>
    </div>
    <div class="home_network_section_img mobile:hidden relative">
      <img v-motion-title-section-visible class="bg_network bottom-0 left-0 min-h-[600px] right-0" src="@/assets/images/home/bg_network.png" />
      <div  class="absolute right-0 left-0 w-full flex justify-center items-center top-[55%]">
        <div class="relative mr-[4%]">
          <img v-motion-title-section-visible class="w-full leading-mobile-1 max-w-[294px] z-10 relative" :src="Item1" />
          <div class="absolute -bottom-0 -left-[70%]">
            <img v-motion-title-section-visible class="w-full relative leading-mobile-1 z-1 max-w-[264px]" :src="Item3" />
          </div>
          <div class="absolute -top-[10%] -right-[82%]">
            <img v-motion-title-section-visible class="leading-mobile-1 w-full max-w-[325px] z-[11] relative" :src="Item2" />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden mobile:flex w-full overflow-x-scroll">
      <div class="grid grid-cols-3 min-w-[748px] gap-5 py-6 pt-[112px]">
        <img v-motion-title-section-visible v-for="(item, index) in LIST_MOBILE" :key="index + 'network'" :src="item.image" />
      </div>
    </div>
  </section>
</template>
<script>
import Item1 from '@/assets/images/home/item_network_1.png'
import Item2 from '@/assets/images/home/item_network_2.png'
import Item3 from '@/assets/images/home/item_network_3.png'

export default {
  name: 'NetworkHomePage',
  setup() {
    const LIST_MOBILE = [
      {
        image: Item3
      },
      {
        image: Item2
      },
      {
        image: Item1
      }
    ]
    return { LIST_MOBILE, Item1, Item2, Item3 }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.home_network_section {
  background: radial-gradient(59.79% 100.88% at 53.8% 102.08%, #09282a 0%, #0a1013 96.68%);
  width: 100%;
  max-width: $max-wrap-container;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 451px;
  @apply mobile:pb-12;
  .home_network_section_body {
    width: 100%;
    max-width: $max-wrap-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply mx-auto;
  }
  .bg_network {
    mix-blend-mode: lighten;
  }

  .leading-mobile-1 {
    transition: all 1s;
    cursor: pointer;
    border-radius: 45px;
    &:hover {
      transform: translateY(-330px) !important;
      scale: 0.9;
      z-index: 100 !important;
      box-shadow: 0px 0px 40px 0px $primary-color, 0px 0px 8px 2px $primary-color inset !important;

    }
  }
}
</style>
