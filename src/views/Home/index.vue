<script>
import MainHome from '@/views/Home/MainHome.vue'
import Network from '@/views/Home/Network.vue'
import LeadingGeneration from '@/views/Home/LeadingGeneration.vue'
import AsSeenOn from '@/views/Home/AsSeenOn.vue'
import Partner from "@/views/Home/Partner.vue";
import {onMounted} from "vue";
import {scrollToTop} from "@/helper";
export default {
  name: 'HomePage',
  components: {
    MainHome,
    Network,
    LeadingGeneration,
      Partner,
      AsSeenOn
  },
    setup() {
        onMounted(() => {
            scrollToTop()
        })
    }
}
</script>

<template>
  <div class="w-full">
    <MainHome></MainHome>
    <Network></Network>
    <LeadingGeneration></LeadingGeneration>
    <AsSeenOn/>
    <Partner></Partner>
  </div>
</template>
