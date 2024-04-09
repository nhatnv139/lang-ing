<template>
  <div class="features-component padding-layout-global pt-[186px] desktop:pt-0">
    <div class="features-component__list flex flex-col justify-center items-center w-full max-w-[1088px] gap-[80px]">
      <div v-for="(item, index) in listFeatures " :key="item.key" :class="['feature-item tablet:items-center w-full gap-6 flex flex-col-reverse desktop:flex-row', index % 2 === 0 ? '' : 'desktop:flex-row-reverse']">
        <div class="w-full max-w-[560px] flex items-end">
          <div class="feature-item_right bg-gradient-to-t from-[#94FFDF] via-[#131D20] to-[#94FFDF] rounded-[36px] desktop:min-h-[320px]">
            <div class="feature-item_body z-10 relative rounded-lg overflow-hidden bg-clip-padding flex flex-col justify-between h-full">
              <div class="desktop:py-[48px] desktop:px-[40px] px-4 py-7 flex flex-col gap-[30px]">
                <p class="text-emphasis text-heading-4 !font-medium">{{$t(item.title)}}</p>
                <p class="text-main-text text-[16px] !font-light">{{$t(item.content)}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-1 tablet:justify-center">
            <img :class="['m-auto mb-0']" :style="`max-width: ${item.maxWidth}`" :src="item.icon" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useI18n} from "vue-i18n";
import Icon1 from '@/assets/images/Foundation/features/item_icon_1.png'
import Icon5 from '@/assets/images/Foundation/features/item_icon_2.png'
import Icon4 from '@/assets/images/Foundation/features/item_icon_3.png'
import Icon3 from '@/assets/images/Foundation/features/item_icon_4.png'
import Icon2 from '@/assets/images/Foundation/features/item_icon_5.png'
export default {
  setup() {
    const { t } = useI18n()
    const listFeatures = [
      {
        title: 'foundation.features.item_title_1',
        content: 'foundation.features.item_content_1',
        icon: Icon3,
        key: 'features_1',
      },
      {
        title: 'foundation.features.item_title_2',
        content: 'foundation.features.item_content_2',
        icon: Icon1,
        key: 'features_2',
        maxWidth: '300px'
      },
      {
        title: 'foundation.features.item_title_3',
        content: 'foundation.features.item_content_3',
        icon: Icon2,
        key: 'features_3'
      },
      {
        title: 'foundation.features.item_title_4',
        content: 'foundation.features.item_content_4',
        icon: Icon5,
        key: 'features_4'
      },
      {
        title: 'foundation.features.item_title_5',
        content: 'foundation.features.item_content_5',
        icon: Icon4,
        key: 'features_5',
      }
    ]
    return {
      listFeatures
    }
  }
}
</script>
<style>
.features-component {
  @apply flex justify-center items-center;
  .features-component__list {
    .feature-item_right {
      width: 100%;
      .feature-item_body {
        border-radius: 36px;
        border: 1px solid #94FFDF;
        background: var(--Fill-box, radial-gradient(2058.68% 50% at 50% 50%, rgba(43, 147, 122, 0.10) 0%, rgba(43, 147, 122, 0.00) 100%), #0A1013);
      }
    }
  }
}
</style>
