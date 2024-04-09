<template>
  <div class="wrap_partner_section padding-layout-global">
    <div class="partner_section_content">
      <h2 v-motion-title-section-visible class="uppercase text-center text-gradient text-heading-2 !mb-[174px]">
        {{ $t('home.partner.title') }}
      </h2>
      <div class="relative w-full h-full max-h-[280px]">
        <img
          class="absolute w-full mobile:hidden h-full top-0 right-0 left-0 bottom-0"
          :src="BgPartner"
        />
        <img
          class="absolute hidden mobile:flex w-full h-full top-0 right-0 left-0 bottom-0"
          :src="BgPartnerMobile"
        />
        <div class="grid grid-cols-4 mobile:grid-cols-2 w-full h-[280px] p-4 py-0 z-10 relative">
          <div class="w-full flex group" v-for="(item, index) in LIST_PARTNER" :key="index + 'partner'">
            <img class="m-auto w-full transition duration-500 cursor-pointer group-hover:scale-110" :src="item.logo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bitget from '@/assets/images/home/partner/bitget.svg'
import Bybit from '@/assets/images/home/partner/bybit.svg'
import CoinMkc from '@/assets/images/home/partner/coin_market.svg'
import CoinGecko from '@/assets/images/home/partner/coin_gecko.svg'
import Gate from '@/assets/images/home/partner/gate.png'
import Kucoin from '@/assets/images/home/partner/kucoin.svg'
import Mexc from '@/assets/images/home/partner/mexc.svg'
import Okx from '@/assets/images/home/partner/okx.svg'
import BgPartner from '@/assets/images/home/partner/bg_partner.png'
import BgPartnerMobile from '@/assets/images/home/partner/bg_partner_mobile.png'

export default {
  name: 'PartnerSection',
  setup() {
    const LIST_PARTNER = [
      {
        logo: Bybit,
        link: ''
      },
      {
        logo: CoinGecko,
        link: ''
      },
      {
        logo: Gate,
        link: ''
      },
      {
        logo: Kucoin,
        link: ''
      },
      {
        logo: CoinMkc,
        link: ''
      },
      {
        logo: Mexc,
        link: ''
      },
      {
        logo: Okx,
        link: ''
      },
      {
        logo: Bitget,
        link: ''
      }
    ]
    return {
      LIST_PARTNER,
      BgPartner,
      BgPartnerMobile
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.wrap_partner_section {
  width: 100%;
  max-width: $max-wrap-container;
  display: flex;
  background: rgba(12, 15, 17, 1);
  @apply pt-[266px] mobile:py-[141px] pb-[341px];
  .partner_section_content {
    max-width: $max-wrap-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply mx-auto;
  }
}
</style>
