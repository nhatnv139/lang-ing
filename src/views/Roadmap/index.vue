<template>
  <div class="wrap_roadmap padding-layout-global">
    <div class="wrapper-heading relative">
      <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full">
        <p
          v-motion
          :initial="{ opacity: 0, y: 200 }"
          :enter="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1000,
              delay: 1000
            }
          }"
          class="z-10 uppercase title-roadmap text-heading-roadmap"
        >
          ROADMAP
        </p>
      </div>
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{
          opacity: 1,
          transition: {
            duration: 1000
          }
        }"
        class="marquee"
      >
        <p v-for="item in 20" class="text-roadmap-fill" :key="item + 'roadmap'">ROADMAP</p>
      </div>
    </div>
    <div
      class="wrap_map_roadmap mobile:hidden tablet:hidden grid grid-rows-11 grid-flow-col gap-y-[300px] tablet:gap-y-[250px] tablet:gap-x-[200px] relative gap-x-[349px] w-full max-w-[1200px]"
    >
      <div
        id="diamond-element"
        class="absolute w-full max-w-[1200px] laptop:max-w-[1167px] top-0 flex gap-24 flex-col items-center justify-center"
      >
        <div
          id="video-diamond"
          class="transition-all duration-700"
          :style="`background: ${bgVideo}`"
        >
          <video
            class="mx-auto max-w-[100px] w-full mix-blend-lighten"
            :autoplay="true"
            :loop="true"
            muted
            playsinline
            webkit-playsinline
          >
            <source src="/gem.mp4" type="video/mp4" />
          </video>
        </div>
        <img
          id="arrow-diamond"
          class="h-0 transition-all duration-700"
          src="@/assets/images/Roadmap/arrow_down.svg"
        />
      </div>
      <div
        :id="'roadmap' + item.key"
        v-for="item in LIST_ROADMAP"
        :key="item.key + 'roadmap'"
        :class="[
          'flex row-span-2 transition-all duration-700',
          item.key === 1 ? 'row-start-2' : ''
        ]"
        v-motion
        :initial="{
          opacity: 0,
          y: 50,
          transition: {
            duration: 500
          }
        }"
        :visible="{
          opacity: 0.2,
          y: 0,
          scaleX: 1,
          transition: {
            duration: 500
          }
        }"
      >
        <div :class="['mx-auto', item.key < 6 ? 'mr-0' : 'ml-0']">
          <p
            class="!text-emphasis font-medium !mb-5"
            :class="['', item.key === 5 ? 'text-[44px] tablet:text-[32px]' : 'text-heading-2']"
          >
            {{ item.title }}
          </p>
          <div>
            <div
              v-for="(children, indexChildren) in item.content"
              :key="children"
              class="flex flex-row items-center gap-3"
            >
              <img class="w-2" :src="GemIcon" />
              <p :class="['text-content-4 min-w-[320px]', item.bold && indexChildren === 0 ? '!text-emphasis  !font-bold' : '!font-normal !text-neutral-0']">
                {{ $t(`${children}`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-row justify-between tablet:w-full hidden wrap_roadmap_mobile mobile:flex tablet:flex gap-4">
      <div id="arrowDiamond" class="w-[20%] flex-col items-center" style="margin: unset !important;">
        <div class="bg-[#0c0f11] flex flex-col items-center">
            <img class="max-w-[70px] w-full mix-blend-lighten" src="/gem.gif" />
            <img class="h-[100px]" src="@/assets/images/Roadmap/arrow_down.svg" />
        </div>
      </div>
      <div class="w-[80%] grid grid-cols-1 gap-[60px]">
        <div
          :id="'roadmapMobile' + item.key"
          v-for="item in LIST_ROADMAP_MOBILE"
          :key="item.key + 'roadmap'"
          class="flex opacity-20"
        >
          <div>
            <p class="!text-emphasis font-medium text-2xl !mb-5">
              {{ item.title }}
            </p>
            <div>
              <div
                v-for="(children, indexChildren) in item.content"
                :key="children"
                class="flex flex-row items-baseline justify-start gap-3"
              >
                <img class="w-2" :src="GemIcon" />
                <p :class="['text-content-3 !font-normal', item.bold && indexChildren === 0 ? '!text-emphasis  !font-bold' : '!font-normal !text-neutral-0']">{{ $t(`${children}`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GemIcon from '@/assets/images/Roadmap/Gem.png'
import DiamonIcon from '@/assets/images/Roadmap/diamon.png'
import { onMounted, ref } from 'vue'
import { scrollToTop } from '@/helper'
import ScrollMagic from 'scrollmagic'
export default {
  name: 'RoadmapPage',
  components: {},
  setup() {
    const bgVideo = ref('#0C0F11')
    const LIST_ROADMAP = [
      {
        title: 'Q1 2023',
        content: ['roadmap.content_1_2023_1', 'roadmap.content_1_2023_2'],
        key: 1,
        transformX: -300
      },
      {
        title: 'Q3 2023',
        content: ['roadmap.content_3_2023_3','roadmap.content_3_2023_1', 'roadmap.content_3_2023_2', 'roadmap.content_3_2023_4'],
        key: 2,
        transformX: -300,
        bold: true
      },
      {
        title: 'Q1 2024',
        content: ['roadmap.content_1_2024_3','roadmap.content_1_2024_1', 'roadmap.content_1_2024_2','roadmap.content_1_2024_4', 'roadmap.content_1_2024_5', 'roadmap.content_1_2024_6', 'roadmap.content_1_2024_7'],
        key: 3,
        transformX: -300,
        bold: true
      },
      {
        title: 'Q3 2024',
        content: ['roadmap.content_3_2024_3','roadmap.content_3_2024_1', 'roadmap.content_3_2024_2', 'roadmap.content_3_2024_4', 'roadmap.content_3_2024_5'],
        key: 4,
        transformX: -300,
        bold: true
      },
      {
        title: 'To be announced',
        key: 5,
        transformX: -300
      },
      {
        title: '2021-2022',
        content: ['roadmap.content_main_1', 'roadmap.content_main_2', 'roadmap.content_main_3', 'roadmap.content_main_4'],
        key: 6,
        transformX: 300
      },
      {
        title: 'Q2 2023',
        content: [
          'roadmap.content_2_2023_4',
          'roadmap.content_2_2023_1',
          'roadmap.content_2_2023_2',
          'roadmap.content_2_2023_3'

        ],
        key: 7,
        transformX: 300,
        bold: true
      },
      {
        title: 'Q4 2023',
        content: ['roadmap.content_4_2023_3','roadmap.content_4_2023_1', 'roadmap.content_4_2023_2', 'roadmap.content_4_2023_4'],
        key: 8,
        transformX: 300,
        bold: true
      },
      {
        title: 'Q2 2024',
        content: ['roadmap.content_2_2024_3','roadmap.content_2_2024_1', 'roadmap.content_2_2024_2', 'roadmap.content_2_2024_4'],
        key: 9,
        transformX: 300,
        bold: true
      },
      {
        title: 'Q4 2024',
        content: ['roadmap.content_4_2024_1', 'roadmap.content_4_2024_2'],
        key: 10,
        transformX: 300
      }
    ]

    const LIST_ROADMAP_MOBILE = [
      {
        title: 'Q1 2023',
        content: ['roadmap.content_1_2023_1', 'roadmap.content_1_2023_2'],
        key: 1
      },
      {
        title: 'Q2 2023',
        content: [
          'roadmap.content_2_2023_4',
          'roadmap.content_2_2023_1',
          'roadmap.content_2_2023_2',
          'roadmap.content_2_2023_3'
        ],
        key: 2,
        bold: true
      },
      {
        title: 'Q3 2023',
        content: ['roadmap.content_3_2023_3','roadmap.content_3_2023_1', 'roadmap.content_3_2023_2', 'roadmap.content_3_2023_4'],
        key: 3,
        bold: true
      },
      {
        title: 'Q4 2023',
        content: ['roadmap.content_4_2023_3','roadmap.content_4_2023_1', 'roadmap.content_4_2023_2', 'roadmap.content_4_2023_4'],
        key: 4,
        bold: true
      },
      {
        title: 'Q1 2024',
        content: ['roadmap.content_1_2024_3','roadmap.content_1_2024_1', 'roadmap.content_1_2024_2','roadmap.content_1_2024_4', 'roadmap.content_1_2024_5', 'roadmap.content_1_2024_6', 'roadmap.content_1_2024_7'],
        key: 5,
        bold: true
      },
      {
        title: 'Q2 2024',
        content: ['roadmap.content_2_2024_3','roadmap.content_2_2024_1', 'roadmap.content_2_2024_2', 'roadmap.content_2_2024_4'],
        key: 6,
        bold: true
      },
      {
        title: 'Q3 2024',
        content: ['roadmap.content_3_2024_3','roadmap.content_3_2024_1', 'roadmap.content_3_2024_2', 'roadmap.content_3_2024_4', 'roadmap.content_3_2024_5'],
        key: 7,
        bold: true
      },
      {
        title: 'Q4 2024',
        content: ['roadmap.content_4_2024_1', 'roadmap.content_4_2024_2'],
        key: 10
      },
      {
        title: 'To be announced',
        key: 11
      }
    ]
    const innitScrollRoadmap = () => {
      const controller = new ScrollMagic.Controller()
      new ScrollMagic.Scene({
        triggerElement: '#roadmap1',
        duration: 2400,
        offset: -200
      })
        .setPin('#diamond-element', {
          pushFollowers: false
        })
        .addTo(controller)

      new ScrollMagic.Scene({
        triggerElement: '#roadmap6',
        offset: 50
      })
        .setClassToggle('#video-diamond', '!opacity-100')
        .addTo(controller)

      new ScrollMagic.Scene({
        triggerElement: '#roadmap6',
        offset: 50
      })
        .setClassToggle('#arrow-diamond', 'h-[100px]')
        .addTo(controller)
    }

    const innitScrollRoadmapItem = () => {
      const LIST_ROADMAP = [
        '#roadmap1',
        '#roadmap2',
        '#roadmap3',
        '#roadmap4',
        '#roadmap5',
        '#roadmap6',
        '#roadmap7',
        '#roadmap8',
        '#roadmap9',
        '#roadmap10'
      ]
      const controller = new ScrollMagic.Controller()

      LIST_ROADMAP.forEach((item) => {
        new ScrollMagic.Scene({
          triggerElement: item,
          offset: 50
        })
          .setClassToggle(item, 'active')
          .addTo(controller)
      })
    }

      const innitScrollRoadmapItemMobile = () => {
          const LIST_ROADMAP = [
              '#roadmapMobile1',
              '#roadmapMobile2',
              '#roadmapMobile3',
              '#roadmapMobile4',
              '#roadmapMobile5',
              '#roadmapMobile6',
              '#roadmapMobile7',
              '#roadmapMobile8',
              '#roadmapMobile9',
              '#roadmapMobile10',
              '#roadmapMobile11'
          ]
          const controller = new ScrollMagic.Controller()

          LIST_ROADMAP.forEach((item) => {
              new ScrollMagic.Scene({
                  triggerElement: item,
                  offset: 150
              })
                  .setClassToggle(item, 'active')
                  .addTo(controller)
          })
      }

    const setPinDiamond = () => {
      if (window.innerWidth < 1025) {
        const controller = new ScrollMagic.Controller()
        new ScrollMagic.Scene({
          triggerElement: '#roadmapMobile1',
          duration: 1300,
          offset: 200
        })
          .setPin('#arrowDiamond', {
              pushFollowers: false
          })
          .addTo(controller)
      }
    }
    onMounted(() => {
      setTimeout(() => {
        scrollToTop()
      }, 100)
      innitScrollRoadmap()
      innitScrollRoadmapItem()
      setPinDiamond()
        innitScrollRoadmapItemMobile()
    })
    return { LIST_ROADMAP, LIST_ROADMAP_MOBILE, bgVideo, GemIcon, DiamonIcon }
  }
}
</script>
<style lang="scss">
.wrap_roadmap {
  padding-top: 100px;
  padding-bottom: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0c0f11 !important;
  @apply bg-[#0A1013] tablet:pb-[200px] mobile:pb-[200px];
  .title-roadmap {
    background: linear-gradient(180deg, #afffe7 0%, #00d293 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    user-select: none;
  }

  .text-roadmap-fill {
    font-size: 400px;
    margin-left: 100px;
    opacity: 0.2;
    color: #0c0f11;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    user-select: none;
    -webkit-text-stroke: 3px #2b937a;
    @media only screen and (max-width: 1024px) and (min-width: 768px) {
      font-size: 200px;
      margin-left: 60px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 100px;
      -webkit-text-stroke: 1px #2b937a;
      margin-left: 48px;
    }
  }

  .wrapper-heading {
    max-width: 100%;
    @apply mb-[100px];
  }

  .marquee {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    animation: marquee 200s linear infinite;
  }

  .marquee p {
    display: inline-block;
  }

  @keyframes marquee {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .active {
    opacity: 100 !important;
  }
}
</style>
