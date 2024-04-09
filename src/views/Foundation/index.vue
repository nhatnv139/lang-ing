<template>
  <div class="foundation w-full max-w-[1920px]">
    <MainFoundation></MainFoundation>
    <ApplyNow></ApplyNow>
    <Features></Features>
  </div>
</template>
<script>
import MainFoundation from "@/views/Foundation/MainFoundation.vue";
import ApplyNow from "@/views/Foundation/ApplyNow.vue";
import Features from "@/views/Foundation/Features.vue";
import {onMounted} from "vue";
import {scrollToTop} from "@/helper";
export default {
  name: 'FoundationPage',
  components: {
    MainFoundation,
    ApplyNow,
    Features
  },
  setup() {
    onMounted(() => {
      scrollToTop()
    })
  }
}
</script>
