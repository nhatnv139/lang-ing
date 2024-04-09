<template>
  <div class="wrap_seen_on_section padding-layout-global">
    <div class="seen_on_section_content">
      <h2
        v-motion-title-section-visible
        class="text-center text-gradient text-heading-1 seen_on_title"
      >
        {{ $t('home.seen_on.title') }}
        <img class="img_border_mb" :src="border" alt="" />
        <img class="img_border_pc" :src="borderpc" alt="" />
      </h2>
      <div class="main_item_seen_on">
        <a
          :href="item.link"
          target="_blank"
          class="main_item_seen_on_btn cursor-pointer hover-text"
          v-for="(item, index) in LIST_PARTNER"
          :key="index + 'seen'"
        >
          <div class="group_item_text" :class="item.css == true ? 'activeAPBtn' : ''">
            <div class="flex gap-[16px] justify-center items-center active_hover">
              <img class="m-auto w-full transition duration-500" :src="item.logo" />
              <span v-if="item.text" class="text-[#FFFFFF] text_seen_on">{{ item.text }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Cointelegraph from '@/assets/images/home/seenOn/Cointelegraph.svg'
import yahoo from '@/assets/images/home/seenOn/yahoo.svg'
import border from '@/assets/images/home/seenOn/border1.svg'
import borderpc from '@/assets/images/home/seenOn/borderpc.svg'
import benzinga from '@/assets/images/home/seenOn/benzinga.svg'
import business_insider_logo from '@/assets/images/home/seenOn/business_insider_logo.svg'
import coin from '@/assets/images/home/seenOn/coin.svg'
import AP from '@/assets/images/home/seenOn/ap_text.svg'
import coinmk from '@/assets/images/home/seenOn/coinmk.svg'
import street_insider_logo from '@/assets/images/home/seenOn/street_insider_logo.svg'
import ZyCrypto_White_Logo from '@/assets/images/home/seenOn/ZyCrypto_White_Logo.svg'
import BgPartner from '@/assets/images/home/partner/bg_partner.png'
import BgPartnerMobile from '@/assets/images/home/partner/bg_partner_mobile.png'

export default {
  name: 'PartnerSection',
  setup() {
    const LIST_PARTNER = [
      {
        logo: Cointelegraph,
        link: 'https://cointelegraph.com/press-releases/athene-network-hits-4-million-users-top-ethereum-layer-2'
      },
      {
        logo: yahoo,
        link: 'https://finance.yahoo.com/news/athene-network-ath-network-crosses-160000144.html'
      },
      {
        logo: benzinga,
        link: 'https://www.benzinga.com/pressreleases/24/03/g37486560/athene-network-ath-network-crosses-3-million-user-milestone-establishes-itself-as-leading-layer-2-'
      },
      {
        logo: business_insider_logo,
        link: 'https://markets.businessinsider.com/news/stocks/athene-network-ath-network-crosses-3-million-user-milestone-establishes-itself-as-leading-layer-2-ethereum-solution-1033135189'
      },
      {
        logo: coin,
        link: 'https://news.bitcoin.com/leading-the-future-of-ethereum-athene-network-ath-network-crosses-nearly-4-million-user-threshold-cementing-its-status-as-a-top-layer-2-solution/'
      },
      {
        logo: AP,
        css: true,
        // text: `APNews`,
        link: 'https://apnews.com/press-release/marketersmedia/blockchain-bac48537008741a4629f323386d1f35e'
      },
      {
        logo: street_insider_logo,
        link: 'https://www.streetinsider.com/Press+Releases/Athene+Network+(ATH+Network)+Crosses+3+Million+User+Milestone,+Establishes+Itself+as+Leading+Layer+2+Ethereum+Solution/22890346.html'
      },
      {
        logo: coinmk,
        link: 'https://coinmarketcap.com/community/articles/65e82d08b077505e613afe1c/'
      },
      {
        logo: '',
        text: 'Coinspeaker',
        link: 'https://www.coinspeaker.com/athene-network-crosses-4-million-user-top-layer-2-solution/'
      },
      {
        logo: ZyCrypto_White_Logo,
        link: 'https://zycrypto.com/athene-network-reaches-nearly-4m-user-threshold-cementing-position-as-top-layer-2-solution/'
      }
    ]
    return {
      LIST_PARTNER,
      BgPartner,
      BgPartnerMobile,
      border,
      borderpc
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_seen_on_section {
  width: 100%;
  display: flex;
  border-radius: 0px 0px 60px 60px;
  background: linear-gradient(0deg, #0e3b3e 0%, #0d2d2f 33.44%, #0a1313 100%);
  @apply pt-[266px] mobile:py-[110px] pb-[110px];
  .seen_on_section_content {
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply mx-auto;
  }
}
.activeAPBtn {
  width: 204px;
  height: 50px;
}
.group_item_text {
  transition: transform 0.3s ease;
}
.hover-text:hover {
  cursor: pointer;
  transform: scale(1.06);
}
.seen_on_title {
  margin-bottom: 93px !important;
}
.text_seen_on {
  font-size: 32px;
  white-space: pre-line;
}
.img_border_mb {
  display: none;
}
.main_item_seen_on {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px 40px;
  flex-wrap: wrap;
  .main_item_seen_on_btn {
    border-radius: 16px;
    background: linear-gradient(180deg, #0e3b3e 0%, #0d2d2f 33.44%, #0a1313 100%);
    width: 310px;
    height: 120px;
    padding: 16px 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 10px;
  }
  .main_item_seen_on_btn:hover {
    border: 1px solid #94ffdf;
    background: linear-gradient(180deg, #11d7a7 0%, #035743 100%);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.4);
  }
}
@media only screen and (max-width: 900px) {
  .activeAPBtn {
    width: 121px;
    height: 26px;
  }
  .wrap_seen_on_section {
    border-radius: 0px 0px 40px 60px;
  }
  .img_border_pc {
    display: none;
  }
  .img_border_mb {
    display: block;
  }
  .seen_on_title {
    margin-bottom: 46px !important;
  }
  .main_item_seen_on {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px 16px;
    flex-wrap: wrap;
    .main_item_seen_on_btn {
      border-radius: 8px;
      background: linear-gradient(180deg, #0e3b3e 0%, #0d2d2f 33.44%, #0a1313 100%);
      width: 160px;
      height: 60px;
      padding: 16px 30px;
      justify-content: center;
      align-items: center;
      display: flex;
      gap: 10px;
    }
  }
  .text_seen_on {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 12px;
  }
}
</style>
