<template>
  <div
      class="w-full desktop:h-full tablet:h-full  flex flex-row justify-end items-end tablet:grid mobile:grid grid-cols-2"
  >
    <a class="block desktop:hidden"></a>
    <div  v-for="(item, index) in LIST_SOCIAL"
          class="w-full"
          :key="item.label" :class="[0, 1, 2].includes(index) ? 'flex justify-end desktop:justify-center' : ''">
      <a
          :href="item.link"
          target="_blank"
          :class="[
        `w-full aspect-[1/1] border border-gray-1 rounded-full flex` ,
        item.maxWidth,
        item.class
      ]"
      >
        <div
            :class="['flex flex-col m-auto items-center cursor-pointer gap-3']"
        >
          <img class="w-[90%] mobile:w-[40%]" :src="item.icon"/>
          <p class="text-content-2 mobile:!font-normal !text-neutral-0 !font-semibold">
            {{ item.label }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import IconFaceBook from '@/assets/images/Support/icon-facebook.svg'
import IconTelegram from '@/assets/images/Support/icon-telegram.svg'
import IconTwitter from '@/assets/images/Support/icon-twitter.svg'
import IconYoutube from '@/assets/images/Support/icon-youtube.svg'
export default {
  setup() {
    const LIST_SOCIAL = [
      {
        icon: IconYoutube,
        label: 'Youtube',
        maxWidth: 'max-w-[239px] mobile:max-w-[102px]',
        link: import.meta.env.VITE_BASE_LINK_YOUTUBE,
        class: 'hover-button-social'
      },
      {
        icon: IconTwitter,
        label: 'X',
        maxWidth: 'max-w-[290px] mobile:max-w-[134px]',
        link: import.meta.env.VITE_BASE_LINK_TWEETER,
        class: 'hover-button-social'
      },
      {
        icon: IconTelegram,
        label: 'Telegram',
        maxWidth: 'max-w-[354px] mobile:max-w-[200px]',
        link: import.meta.env.VITE_BASE_LINK_TELEGRAM,
        class: 'hover-button-social'
      }
    ]
    return {LIST_SOCIAL}
  }
}
</script>
<style lang="scss">
.hover-button-social {
  transition: all 0.5s;

  img {
    transition: scale 0.5s;
    transition-delay: 0.2s;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      scale: 0.6;
      box-shadow: 0 0 1px 5px #2b937a, 0 0 1px 10px rgb(25, 166, 124, 0.6),
      0 0 1px 20px rgba(148, 255, 223, 0.2);

      img {
        scale: 1.3;
      }
    }
  }
}
</style>
