<template>
  <div class="">
    <div class="ecosystem_section_content">
      <div class="main_item_eco">
        <div
          class="main_item_eco_btn cursor-pointer group relative rounded-lg"
          v-motion-title-section-visible
          v-for="(item, index) in LIST_PARTNER"
          :key="index + 'eco'"
        >
          <div
            class="bg-gradient-to-t from-[#94FFDF] mobile:w-full mobile:h-full tablet:w-full tablet:h-full transition-all duration-1000 h-0 w-0 group-hover:w-full group-hover:h-full via-[#131D20] to-[#94FFDF] absolute top-0 left-0 rounded-lg right-0 bottom-0"
          ></div>
          <div
            :class="[
              'bg-gray-2 z-10 relative rounded-lg border overflow-hidden bg-clip-padding flex flex-col justify-between h-full border-transparent'
            ]"
          >
            <div class="main_item_eco_text">
              <div class="item_eco_title">
                {{ item.title }}
              </div>
              <div class="item_eco_sub_title">
                {{ item.sub_title }}
              </div>
            </div>
            <img class="img_item_bg img_pc" :src="item.logo" />
            <img class="img_item_bg img_mobile" :src="item.logoMoblie" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import item1 from '@/assets/images/home/ecosystem/item1.svg'
import item2 from '@/assets/images/home/ecosystem/item2.svg'
import item3 from '@/assets/images/home/ecosystem/item3.svg'
import item4 from '@/assets/images/home/ecosystem/item4.svg'
import item5 from '@/assets/images/home/ecosystem/item5.svg'
import item6 from '@/assets/images/home/ecosystem/item6.svg'
import item7 from '@/assets/images/home/ecosystem/item7.svg'
import item8 from '@/assets/images/home/ecosystem/item8.svg'
import item9 from '@/assets/images/home/ecosystem/item9.svg'

import itemmb1 from '@/assets/images/home/ecosystem/itemmb1.svg'
import itemmb2 from '@/assets/images/home/ecosystem/itemmb2.svg'
import itemmb3 from '@/assets/images/home/ecosystem/itemmb3.svg'
import itemmb4 from '@/assets/images/home/ecosystem/itemmb4.svg'
import itemmb5 from '@/assets/images/home/ecosystem/itemmb5.svg'
import itemmb6 from '@/assets/images/home/ecosystem/itemmb6.svg'
import itemmb7 from '@/assets/images/home/ecosystem/itemmb7.svg'
import itemmb8 from '@/assets/images/home/ecosystem/itemmb8.svg'
import itemmb9 from '@/assets/images/home/ecosystem/itemmb9.svg'
import ecobg1 from '@/assets/images/home/ecosystem/ecobg1.png'
import BgPartner from '@/assets/images/home/partner/bg_partner.png'
import BgPartnerMobile from '@/assets/images/home/partner/bg_partner_mobile.png'

export default {
  name: 'PartnerSection',
  setup() {
    const LIST_PARTNER = [
      {
        title: 'Athene App',
        sub_title:
          'A decentralized data collection and aggregation platform: utilizing blockchain technology and AI, enabling machine learning, market research, and trend analysis.',
        logo: item1,
        logoMoblie: itemmb1,
        bg: ecobg1
      },
      {
        title: 'Athene DEX',
        sub_title: `DEX Trading Platform:
         Secure, transparent trading platform.`,
        logo: item2,
        logoMoblie: itemmb2,
        bg: ''
      },
      {
        title: 'Athene Wallet',
        sub_title: 'Easy management of digital assets.',
        logo: item3,
        logoMoblie: itemmb3,
        bg: ''
      },
      {
        title: 'Athene Gaming',
        sub_title:
          'Featuring more than 5000 slot games and 1000 live table games, the community can experience gaming using the ATH coin.',
        logo: item4,
        logoMoblie: itemmb4,
        bg: ''
      },
      {
        title: 'Athene Bridge',
        sub_title:
          'Facilitating asset connections between blockchains, enhancing liquidity, and connections for coins running on the ATH mainnet.',
        logo: item5,
        logoMoblie: itemmb5,
        bg: ''
      },
      {
        title: 'Athene Foundation',
        sub_title: `We're committed to investing in promising projects, guiding them toward blockchain integration to operate on the Athene.Network mainnet.`,
        logo: item6,
        logoMoblie: itemmb6,
        bg: ''
      },
      {
        title: 'Athene Launchpad',
        sub_title: `Support and develop new crypto startup projects, enabling them to access capital and the investment community.`,
        logoMoblie: itemmb7,
        logo: item7,
        bg: ''
      },
      {
        title: 'Athene E-commerce Platform',
        sub_title: `Global E-commerce platform, allowing payment with ATH.`,
        logo: item8,
        logoMoblie: itemmb8,
        bg: ''
      },
      {
        title: 'Athene P2P Trading Exchange',
        sub_title: `Safe - Fast - Diverse 
         Buy/Sell at the best price, diverse with many payment and transaction methods wherever you are in the world.`,
        logo: item9,
        logoMoblie: itemmb9,
        bg: ''
      }
    ]
    return {
      LIST_PARTNER,
      BgPartner,
      BgPartnerMobile,
      item9,
      itemmb9
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.ecosystem_section_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 175px 16px;
}
.main_item_eco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  .main_item_eco_btn {
    border-radius: 16px;
    position: relative;
    .main_item_eco_text {
      position: absolute;
      top: 0;
      left: 0;
      padding: 56px 30px;
      width: 60%;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
    }
  }
  .img_pc {
    display: block;
  }
  .img_mobile {
    display: none;
  }
  .item_eco_title {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
    color: #94ffdf;
    margin-bottom: 12px;
  }
  .item_eco_sub_title {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 137%;
    color: #fff;
    white-space: pre-line;
  }
}

@media only screen and (max-width: 900px) {
  .ecosystem_section_content {
    padding: 56px 16px;
    width: 100% !important;
  }
  .main_item_eco {
    flex-direction: column;
    gap: 26px;
    .main_item_eco_btn {
      border-radius: 16px;
      position: relative;

      .main_item_eco_text {
        padding: 36px 16px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
    }
    .item_eco_sub_title {
      font-size: 16px;
    }
    .img_pc {
      display: none;
    }
    .img_mobile {
      display: block;
      width: 450px;
    }
  }
}
@media only screen and (max-width: 378px) {
  .main_item_eco {
    .main_item_eco_btn {
      border-radius: 16px;
      position: relative;

      .main_item_eco_text {
        padding: 12px 12px;
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
    }
    .item_eco_title {
      font-size: 32px;
    }
    .item_eco_sub_title {
      font-size: 14px;
    }
  }
}
</style>
