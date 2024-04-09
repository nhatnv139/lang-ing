<template>
  <div class="wrap_icon_home flex tablet:scale-50 mobile:scale-50" :style="`width: ${width}; height: ${width}`">
    <img class="max-w-[50%] m-auto" :src="image" />
  </div>
</template>
<script>
export default {
  props: {
    image: {
      default: ''
    },
    width: {
      type: String,
      default: '20px'
    }
  },
  setup() {}
}
</script>
<style lang="scss">
.wrap_icon_home {
  border-radius: 8px;
  background: var(--bg-overlay-bg, #131d20);
  box-shadow: 0px 0px 0px 12px rgba(18, 29, 26, 0.3);
}
</style>
