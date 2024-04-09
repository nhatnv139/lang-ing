<template>
  <div class="apply-now-component ipad-pro:pt-[200px] padding-layout-global mt-[74px] desktop:mt-0">
    <p class="text-gradient text-heading-2-1 !text-medium text-center w-full max-w-[1200px]">Millions of users and innovative
      mining technology await
      your visionary idea</p>
    <p class="text-neutral-400 w-full max-w-[650px] text-center text-content-4">
      Elevate your project with the Athene Foundation. Build and develop your project on the Athene Mainnet and benefit from our expertise, tap-to-mine technology, and access to one of the largest crypto communities.
    </p>
    <ButtonCustom :link="linkForm" color="#94FFDF" type="link" class="w-full max-w-[538px]" label="APPLY NOW" :icon="false"></ButtonCustom>
  </div>
</template>
<script>
import ButtonCustom from "@/components/app/ButtonCustom.vue";
export default {
  name: 'ApplyNowComponent',
  components: {ButtonCustom},
  setup() {
    const linkForm = {
      link: import.meta.env.VITE_LINK_FORM_SUPPORT,
      target: '_blank'
    }
    return {
      linkForm
    }
  }
}
</script>
<style lang="scss">
.apply-now-component {
  @apply w-full flex flex-col justify-center gap-[42px] items-center desktop:py-[221px];
}
</style>
