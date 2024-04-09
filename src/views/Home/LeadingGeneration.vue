<template>
  <div class="wrap_leading_generation">
    <div class="leading_generation_content">
      <img v-motion-title-section-visible class="w-full max-w-[696px] mix-blend-lighten" :src="Image1" />
      <div class="leading_generation_content_body padding-layout-global">
        <div class="leading_generation_content_body_main">
          <div class="leading_generation_content_body_header">
            <h2 v-motion-title-section-visible class="text-heading-2 text-gradient text-center">
              {{ $t('home.leading.title') }}
            </h2>
          </div>
          <div class="leading_generation_content_body_grid">
            <div
              class="grid-rows-6 mobile:grid-cols-1 grid-flow-col mobile:!grid-flow-row grid gap-6"
            >
              <div
                v-motion-title-section-visible
                v-for="item in LIST_ITEM_GRID"
                :key="item.title"
                :class="[
                  item.rowSpan ? 'row-span-3' : 'row-span-2',
                  'cursor-pointer group relative rounded-lg'
                ]"
              >
                <div
                  class="bg-gradient-to-t from-[#94FFDF] mobile:w-full mobile:h-full tablet:w-full tablet:h-full transition-all duration-1000 h-0 w-0 group-hover:w-full group-hover:h-full via-[#131D20] to-[#94FFDF] absolute top-0 left-0 rounded-lg right-0 bottom-0"
                ></div>
                <div
                  :class="[
                    'bg-gray-2 z-10 relative rounded-lg border overflow-hidden bg-clip-padding flex flex-col justify-between h-full border-transparent'
                  ]"
                >
                  <div class="w-full px-8 pt-[56px]">
                    <p class="!text-emphasis text-content-1 font-semibold !mb-3">
                      {{ $t(`${item.title}`) }}
                    </p>
                    <p
                      class="text-content-4 transition-all duration-600 group-hover:!text-neutral-0 tablet:!text-neutral-0 mobile:!text-neutral-0"
                    >
                      {{ $t(`${item.content}`) }}
                    </p>
                  </div>
                  <img
                    class="w-full group-hover:opacity-100 transition-all duration-600 max-w-[588px] opacity-60 tablet:!opacity-100 mobile:!opacity-100"
                    :src="item.image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Image1 from '@/assets/images/home/image_leading_generation_1.png'
import Item1 from '@/assets/images/home/item_leading_1.png'
import Item2 from '@/assets/images/home/item_leading_2.png'
import Item3 from '@/assets/images/home/item_leading_3.png'
import Item4 from '@/assets/images/home/item_leading_4.png'
import Item5 from '@/assets/images/home/item_leading_5.png'

export default {
  setup() {
    const LIST_ITEM_GRID = [
      {
        image: Item3,
        title: 'home.leading.title_1',
        content: 'home.leading.content_1'
      },
      {
        image: Item1,
        title: 'home.leading.title_3',
        content: 'home.leading.content_3'
      },
      {
        image: Item4,
        title: 'home.leading.title_5',
        content: 'home.leading.content_5'
      },
      {
        image: Item2,
        title: 'home.leading.title_2',
        content: 'home.leading.content_2',
        rowSpan: true
      },
      {
        image: Item5,
        title: 'home.leading.title_4',
        content: 'home.leading.content_4',
        rowSpan: true
      }
    ]
    return { Image1, LIST_ITEM_GRID }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_leading_generation {
  position: relative;
  display: flex;
  padding-top: 146px;
  width: 100%;

  .leading_generation_content {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    @apply mx-auto;

    .leading_generation_content_body {
      width: 100%;
      display: flex;
      background-image: url('@/assets/images/home/bg_leading_generation.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .leading_generation_content_body_main {
        max-width: $max-wrap-content;
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        @apply mx-auto;
        .leading_generation_content_body_header {
          @apply text-center flex flex-col items-center gap-6;
        }

        .leading_generation_content_body_grid {
          @apply mt-[119px] mb-[346px];
        }
      }
    }
  }
}
</style>
