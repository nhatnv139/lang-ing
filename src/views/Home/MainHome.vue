<template>
  <section class="relative wrap_home_main_bg">
    <div class="absolute top-[100vh] h-[100px] w-full" id="pinned-trigger2"></div>
    <div id="pinned-trigger1" class="relative wrap_home_main_section">
      <div class="home_main_section">
        <div class="z-10 home_main_header mobile:px-3 tablet:px-6">
          <h1 v-motion-title-section-enter class="z-10 uppercase text-gradient text-heading-1-1" >
            {{ $t('home.home_main.title') }}
          </h1>
          <h2 v-motion-content-section-enter class="!text-neutral-0 font-semibold z-10 max-w-[680px] w-full text-content-1">
            {{ $t('home.home_main.sub_title') }}
          </h2>
          <p v-motion-content-section-enter class="text-content-4 text-neutral-200 z-10 max-w-[680px] w-full">
            {{ $t('home.home_main.content') }}
          </p>
          <div  class="w-full max-w-[388px]">
            <ButtonCustom v-motion-button-main-home height="65px" @click="clickToDownload" type="click"></ButtonCustom>
          </div>
        </div>
        <img
            class="absolute w-[78%] mobile:hidden tablet:hidden mix-blend-lighten -bottom-[428px] laptop:-bottom-[300px] tablet:-bottom-[178px]"
            src="@/assets/svg/Home/bg-home-main.svg"
        />
        <div
            class="absolute bottom-0 left-0 right-0 flex justify-center w-full mobile:hidden tablet:hidden"
        >
          <div id="blur-tween" class="blur_light_1"></div>
        </div>
      </div>
      <div
          class="absolute hidden min-w-[1400px] h-[2000px] mobile:flex tablet:flex bottom-0 overflow-hidden"
      >
        <div class="absolute -bottom-[500px]">
          <img
              class="min-w-[1400px] mix-blend-lighten"
              src="@/assets/svg/Home/bg-home-main-mobile.svg"
          />
        </div>
      </div>
      <div class="absolute w-full right-0 left-0 -bottom-[180px] flex justify-center">
        <WrapIcon
            id="icon_main_1"
            class="absolute left-[15%] mobile:-top-[30%] mobile:left-[5%]"
            width="115px"
            :image="Icon1"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_2"
            class="absolute left-[25%] -top-[50%]"
            width="66px"
            :image="Icon2"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_3"
            class="absolute left-[18%] tablet:-top-[60%] mobile:-top-[70%] mobile:left-[5%] -top-[100%]"
            width="54px"
            :image="Icon3"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_4"
            class="absolute right-[20%] -top-[70%] tablet:right-[10%] tablet:-top-[60%]"
            width="64px"
            :image="Icon4"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_5"
            class="absolute right-[10%] -top-[100%] mobile:-top-[90%] tablet:right-[20%] tablet:-top-[20%]"
            width="81px"
            :image="Icon5"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_6"
            class="absolute right-[10%] -top-[50%] tablet:-top-[10%]"
            width="84px"
            :image="Icon6"
        ></WrapIcon>
        <WrapIcon
            id="icon_main_7"
            class="absolute right-[20%] top-[10%] mobile:right-[10%] mobile:-top-[30%]"
            width="113px"
            :image="Icon7"
        ></WrapIcon>
        <img
            id="target"
            class="a-test max-w-[230px] mobile:max-w-[202px] scale-5 z-10"
            src="@/assets/images/home/mobile_main.png"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ButtonCustom from '@/components/app/ButtonCustom.vue'
import WrapIcon from '@/views/Home/component/WrapIcon.vue'
import ScrollMagic from 'scrollmagic'
import {onMounted} from 'vue'
import Icon1 from '@/assets/icons/home/icon_1.svg'
import Icon2 from '@/assets/icons/home/icon_2.svg'
import Icon3 from '@/assets/icons/home/icon_3.svg'
import Icon4 from '@/assets/icons/home/icon_4.svg'
import Icon5 from '@/assets/icons/home/icon_5.svg'
import Icon6 from '@/assets/icons/home/icon_6.svg'
import Icon7 from '@/assets/icons/home/icon_8.svg'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {gsap} from 'gsap'
import {scrollToTop} from '@/helper'
import { handleClickDownload } from "@/helper";
import { scrollToId } from '../../helper'

gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'MainHomeSection',
  components: {
    ButtonCustom,
    WrapIcon
  },
  setup() {
    const controller = new ScrollMagic.Controller()
    const setupScrollMagic = () => {
      const scene = new ScrollMagic.Scene({
        triggerElement: '#pinned-trigger2',
        duration: 2000,
        offset: 200
      }).setPin('#pinned-trigger1')
      controller.addScene(scene)
    }

    const setTweenItemIcon = (x, y, element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: '#pinned-trigger2',
          scrub: true,
          start: 'center center',
          end: 'top -2400px'
        },
        x: x,
        y: y,
        scale: 0,
        opacity: 0,
        rotation: 720,
        duration: 3,
        scrub: true
      })
    }

    const setupTweenMobile = () => {
      gsap.to('.a-test', {
        scrollTrigger: {
          trigger: '#pinned-trigger2',
          scrub: true,
          start: 'center center',
          end: 'top -2400px'
        },
        scale: 1.3,
        duration: 3,
        scrub: true
      })
    }

    const setupTweenBlur = () => {
      gsap.to('#blur-tween', {
        scrollTrigger: {
          trigger: '#pinned-trigger2',
          scrub: true,
          start: 'center center',
          end: 'top -2400px'
        },
        height: 1000,
        width: 600,
        duration: 3,
        scrub: true
      })
    }

    const innitTweenIcon = () => {
      setTweenItemIcon(500, 400, '#icon_main_1')
      setTweenItemIcon(400, 600, '#icon_main_2')
      setTweenItemIcon(500, 900, '#icon_main_3')
      setTweenItemIcon(-500, 600, '#icon_main_4')
      setTweenItemIcon(-800, 900, '#icon_main_5')
      setTweenItemIcon(-800, 600, '#icon_main_6')
      setTweenItemIcon(-500, 200, '#icon_main_7')
      setupTweenBlur()
      setupScrollMagic()
      setupTweenMobile()
    }

    const clickToDownload = () => {
      if(window.innerWidth < 768) {
        scrollToId('form-download-mobile')
      } else {
        scrollToId('form-download-footer')
      }
    }
    onMounted(() => {
      if (window.innerWidth > 1025) {
        innitTweenIcon()
      }
      setTimeout(() => {
        scrollToTop()
      }, 500)
    })
    return {
      Icon1,
      Icon2,
      Icon3,
      Icon4,
      Icon5,
      Icon6,
      Icon7,
      handleClickDownload,
      clickToDownload
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_home_main_bg {
  background: #0a1013;
}

.wrap_home_main_section {
  width: 100%;
  justify-content: center;
  display: flex;
  min-height: 1103px;
  background-image: url('@/assets/images/home/bg-grid-home-main.png');
  background-size: 100% 100%;
  @apply tablet:bg-cover;

  @media only screen and (max-width: 767px) {
    background-image: url('@/assets/images/home/bg-grid-home-main-mobile.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .home_main_section {
    width: 100%;
    @apply flex justify-center overflow-y-hidden relative mobile:pb-[620px];

    .home_main_header {
      margin-top: 228px;
      @apply flex flex-col items-center text-center gap-10 desktop:mb-[430px];
      h1 {
        @apply w-full max-w-[816px] text-center;
      }
    }
  }
}
</style>
