<template>
  <div class="h-full flex pt-[100px] pb-[50px] pdf-view padding-layout-global">
    <embed src="/PitchDeck.pdf" class="w-full" />
  </div>
</template>
<script>
export default {
  name: 'PagePitchDeck'
}
</script>
<style>
.pdf-view {
  width: 100%;
  height: calc(100vh);
}
</style>
