<template>
  <div class="interested-footer px-3 desktop:px-0 flex flex-col items-center gap-[24px] desktop:gap-[64px] pt-[200px] z-[10] pb-[250px]">
    <p class="title-main text-heading-2 text-center">Interested In Joining Us?</p>
    <ButtonCustom :link="linkForm" color="#94FFDF" type="link" class="w-full max-w-[538px]" label="APPLY NOW" :icon="false"></ButtonCustom>
  </div>
</template>
<script>
import ButtonCustom from "@/components/app/ButtonCustom.vue";

export default {
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
