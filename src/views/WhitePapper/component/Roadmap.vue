<template>
  <div class="text-content-4 w-full">
    <h1 class="text-heading-3 text-emphasis !mb-12">Roadmap</h1>
    <div class="wrap_roadmap_mobile flex-row justify-between">
      <div class="grid grid-cols-4 mobile:grid-cols-1 gap-[60px]">
        <div v-for="item in LIST_ROADMAP_MOBILE" :key="item.key + 'roadmap'" class="flex">
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
                <img class="w-2" :src="GemIcon"/>
                <p :class="['text-content-3 !font-normal', item.bold && indexChildren === 0 ? '!text-emphasis' : '!text-neutral-0']">{{ $t(`${children}`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center mt-12">
      <p class="text-heading-3 !text-emphasis">To be announced</p>
      <img class="mobile:hidden" style="rotate: -90deg;margin-left: 100px"
           src="@/assets/images/Roadmap/arrow_down.svg"/>
    </div>
  </div>
</template>
<script>
import GemIcon from '@/assets/images/Roadmap/Gem.png'

export default {
  name: 'RoadmapWhitePaper',
  setup() {
    const LIST_ROADMAP_MOBILE = [
      {
        title: '2021-2022',
        content: ['roadmap.content_main_1', 'roadmap.content_main_2', 'roadmap.content_main_3', 'roadmap.content_main_4'],
        key: 8,
      },
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
    ]
    return {
      LIST_ROADMAP_MOBILE,
      GemIcon
    }
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
}
</style>
