<template>
  <a-menu-item v-if="items.children.length <= 1" @click="handleMenuClick(items)" :key="items.name">
    {{ items.title }}
  </a-menu-item>
  <a-sub-menu v-else>
    <template #title>{{ items.title }}</template>
    <a-menu-item
      @click="handleMenuClick(children)"
      v-for="children in items.children"
      :key="children.name"
      >{{ children.title }}</a-menu-item
    >
  </a-sub-menu>
</template>
<script>
import { defineComponent } from 'vue'
import { LIST_ROUTES } from '@/router/index.js'
import { useRouter } from 'vue-router'
import {useAppStore} from "@/stores/appStore";
export default defineComponent({
  name: 'MenuItem',
  props: {
    items: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['checkActiveMenu'],
  setup(_, {emit}) {
    const router = useRouter()
    const LIST_COMING_SOON = ['product', 'article']
    const handleMenuClick = (items) => {
      if(LIST_COMING_SOON.includes(items.name)) {
        useAppStore().setModalComingSoon(true)
      } else  {
        if(items.name === 'axy') {
          document.getElementById('form-contact-us')?.scrollIntoView({
            behavior: 'smooth',
          });
        } else  {
          router.push({
            name: items.name
          })
          document.body.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
      emit('checkActiveMenu', items.name)
    }
    return {
      LIST_ROUTES,
      handleMenuClick
    }
  }
})
</script>
