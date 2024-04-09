<template>
  <div class="form-get-tour px-3">
    <div>
      <p class="!text-[#F0FFFB] text-heading-2">Athene Network</p>
      <p class="text-heading-2 title-main">
        Secure your financial future</p>
      <p class="text-content-4 !text-[#F0FFFB] mt-3">Invest in the future with Athene Network. We focus on sustainability, and liquidity ensures the stability and growth of each project in our ecosystem. Join a network of top-tier market players and become a partner of Athene Group</p>
    </div>
    <div>
      <a-form class="form-get-tour-enter flex flex-row items-center mobile:flex-col"  :model="states">
        <a-form-item class="w-full">
          <a-input class="mobile:!hidden" :disabled="true" v-model:value="states.email"></a-input>
          <div class="w-[200px] desktop:hidden tablet:hidden mobile:w-full h-[60px] flex px-3 border-solid border border-emerald-700">
            <span class="m-auto !my-auto mobile:text-xl text-white mobile:font-semibold">{{states.email}}</span>
          </div>
        </a-form-item>
        <a-form-item class="mobile:w-full">
          <a :href="`mailto:${states.email}`">
            <div class="w-[200px] mobile:w-full h-[60px] flex px-3 button-get-in">
              <span class="m-auto !my-auto mobile:text-lg mobile:font-semibold">GET IN TOUCH WITH US</span>
            </div>
          </a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import {reactive} from "vue";
export default {
  setup() {
    const states = reactive({
        username: '',
        email: import.meta.env.VITE_BASE_MAIL_PARTNER,
        content: ''
    })
    return {
      states
    }
  }
}
</script>
<style lang="scss">
@import "@/design/variable";
.form-get-tour {
  width: 100%;
  z-index: 100;
  max-width: 650px;
  gap: 54px;
  @apply flex flex-col;
  .form-get-tour-enter {
    .ant-form-item {
      margin-bottom: 14px !important;
    }
    .text-area {
      @apply py-[23px];
    }
    .ant-btn-primary-green {
      border-radius: 0 !important;
      span {
        color: white !important;
      }
    }
    ::placeholder {
      color: $primary-white !important;
    }
    .ant-input {
      border-radius: 0 !important;
      font-size: 22px;
    }
  }
}

.button-get-in {
  background-image: url("@/assets/images/bg-noise.png");
}
</style>
