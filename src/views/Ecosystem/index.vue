<script>
import MainEcosystem from '@/views/Ecosystem/MainEcosystem.vue'
import { onMounted, watch } from 'vue'
import { scrollToTop } from '@/helper'
import ecosystem from '@/assets/images/home/ecosystem/ecosystem.svg'
import Ecosystem_mb from '@/assets/images/home/ecosystem/Ecosystem_mobi.png'

export default {
  name: 'HomePage',
  components: {
    MainEcosystem
  },
  setup() {
    onMounted(() => {
      scrollToTop()
    })
    watch(
      () => {
        scrollToTop()
      },
      {
        deep: true
      }
    )
    return {
      ecosystem,
      Ecosystem_mb
    }
  }
}
</script>

<template>
  <div class="w-full">
    <section>
      <div class="main_ecosystem">
        <div class="main_ecosystem_container">
          <div class="main_ecosystem_item">
            <img class="main_img_ecosystem_pc" :src="ecosystem" />
            <img class="main_img_ecosystem_mb" :src="Ecosystem_mb" />
            <div v-motion-title-section-visible class="max-w-[800px]">
              <div class="main_ecosystem_item_title">
                {{ $t('home.eco.title') }}
              </div>
              <div class="main_ecosystem_item_sbtitle">{{ $t('home.eco.sub_title') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <MainEcosystem></MainEcosystem>
    </section>
  </div>
</template>
<style lang="scss">
.main_ecosystem {
  background-image: url('@/assets/images/home/ecosystem/bg_main_eco.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.main_img_ecosystem_mb {
  display: none;
}
.main_ecosystem_item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding-top: 238px;
  .main_ecosystem_item_title {
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    background: linear-gradient(180deg, #e2fff7 0%, #28ffc6 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .main_ecosystem_item_sbtitle {
    color: #fff;
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
    line-height: 150%;
    margin-top: 62px;
  }
}
@media only screen and (max-width: 1280px) {
  .main_ecosystem_item {
    flex-direction: column-reverse;
    align-items: center;
    gap: 0;
  }
}
@media only screen and (max-width: 1024px) {
  .main_ecosystem_item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-top: 238px;
    .main_ecosystem_item_title {
      font-size: 64px;
    }
  }
}
@media only screen and (max-width: 900px) {
  .main_ecosystem {
    background-image: url('@/assets/images/home/ecosystem/bgmb.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .main_ecosystem_item {
    flex-direction: column-reverse;
    gap: 0;
    // display: ;
  }
  .main_img_ecosystem_pc {
    display: none;
  }
  .main_img_ecosystem_mb {
    display: block;
  }
  .main_img_ecosystem_mb {
    display: block;
    margin-top: 16px;
    // margin-right: 24px;
  }
  .main_ecosystem {
    padding: 0px 16px;
    .main_ecosystem_item {
      padding: 132px 0px 0px 0px;
      .main_ecosystem_item_title {
        font-size: 36px;
        font-weight: 700;
        line-height: 130%;
      }
      .main_ecosystem_item_sbtitle {
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 150%;
        margin-top: 12px;
      }
    }
  }
}
</style>
