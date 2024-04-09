<template>
  <a href="/home">
    <img :class="`w-full max-w-[${maxWidth}]`" :src="Logo" alt="" />
  </a>
</template>
<script>
import Logo from '@/assets/logo.png'
export default {
  props: {
    maxWidth: {
      type: String,
      default: '200px'
    }
  },
  setup() {
    return { Logo }
  }
}
</script>
