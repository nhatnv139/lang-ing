<template>
  <a-select
    ref="select"
    dropdownClassName="dropdown-locale-main"
    :bordered="false"
    :trigger="['click']"
    v-model:value="localeSelect"
    @change="handleSetLocale"
  >
    <template #suffixIcon></template>
    <a-select-option v-for="item in LIST_SELECT_LOCALE" :key="item.value" :value="item.value">
      <div class="flex flex-row items-center gap-2">
        <img class="w-6" :src="item.flag" />
        <span class="text-gray-4">{{ item.label }}</span>
      </div>
    </a-select-option>
  </a-select>
</template>
<script>
import { ref } from 'vue'
import { LIST_SELECT_LOCALE } from '@/locale'
import { useLocaleStore } from '@/stores/locale'

export default {
  setup() {
    const localStore = useLocaleStore()
    const localeSelect = ref(localStore.locale)

    const handleSetLocale = (item) => {
      localStore.setLocale(item)
    }
    return { LIST_SELECT_LOCALE, handleSetLocale, localeSelect }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.dropdown-locale-main {
  .ant-select-item-option-content {
    span {
      color: $neutral-200;
    }
  }
}
</style>
