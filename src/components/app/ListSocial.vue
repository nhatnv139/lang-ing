<template>
  <div :class="`list-social tablet:justify-center rounded-full flex flex-row items-center gap-5`">
    <a
        :href="item.link"
        target="_blank"
        v-for="item in LIST_SOCIAL"
        :key="item.link"
        class="button-icon-social"
    >
      <img :style="`width:${width}`" :src="item.icon"/>
    </a>
  </div>
</template>
<script>
import IconFacebook from '@/assets/icons/social/icon-facebook.svg'
import IconTelegram from '@/assets/icons/social/icon-telegram.svg'
import IconTweeter from '@/assets/icons/social/icon-tweeter.svg'
import IconYoutube from '@/assets/icons/social/icon-youtube.svg'

export default {
  props: {
    width: {
      type: String,
      default: '36px'
    }
  },
  setup() {
    const LIST_SOCIAL = [
      // {
      //   icon: IconFacebook,
      //   link: import.meta.env.VITE_BASE_LINK_FACEBOOK
      // },
      {
        icon: IconTweeter,
        link: import.meta.env.VITE_BASE_LINK_TWEETER
      },
      {
        icon: IconTelegram,
        link: import.meta.env.VITE_BASE_LINK_TELEGRAM
      },
      {
        icon: IconYoutube,
        link: import.meta.env.VITE_BASE_LINK_YOUTUBE
      },
    ]
    return {LIST_SOCIAL}
  }
}
</script>
<style lang="scss">
.list-social {
  .button-icon-social {
    transition: all 0.8s;
    cursor: pointer;

    &:hover {
      scale: 1.1;
    }
  }
}
</style>
