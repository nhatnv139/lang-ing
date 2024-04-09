<template>
  <div class="wrapper_menu_plat_form">
    <div
      :id="item.key"
      v-for="item in LIST_PLAT_FORM"
      :key="item.key"
      class="wrapper_menu_plat_form_box"
      :class="
        item.key === keyActive
          ? 'border-gradient max-h-[400px] mobile:max-h-[800px] tablet:max-h-[600px] overflow-hidden'
          : 'border-normal max-h-[80px] mobile:max-h-[70px] overflow-hidden'
      "
      @click="handleClickMenuToggle(item.key)"
    >
      <div
        class="text-white p-[26px] flex flex-col gap-5 tablet:gap-7"
        :class="item.key === keyActive ? '!bg-[#131D20] h-full' : ''"
      >
        <div class="flex flex-row items-center justify-between">
          <p
            class="text-content-1 title_faq pr-3"
            :class="item.key === keyActive ? '!text-emphasis' : '!text-neutral-0 line-clamp-1'"
          >
            {{ $t(`${item.title}`) }}
          </p>
          <plus-outlined v-if="item.key !== keyActive" style="font-size: 18px; color: #9aa7a4" />
          <minus-outlined v-else style="font-size: 18px; color: #9aa7a4" />
        </div>
        <p class="text-gray-4 text-content-4 max-w-[95%]" v-html="$t(`${item.content}`)">
        </p>
        <div
          class="flex"
          :class="
            (item.padding ? 'mobile:pl-[20px]' : '',
            item['padding-right'] ? 'mobile:pr-[70px] w-[110%]' : '')
          "
        >
          <img
            class="w-full m-auto hidden mobile:flex tablet:flex tablet:max-w-[400px]"
            :src="item.image"
            :key="keyActive"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    PlusOutlined,
    MinusOutlined
  },
  setup() {
    const keyActive = ref('')
    const handleClickMenuToggle = (key) => {
      if (key === keyActive.value) {
        keyActive.value = ''
      } else {
        keyActive.value = key
        setTimeout(() => {
          document.getElementById(key).scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 500)
      }
    }

    const LIST_PLAT_FORM = [
      {
        title: 'support.title_1',
        content: 'support.content_1',
        key: 'plat_form_1',
        padding: true
      },
      {
        title: 'support.title_2',
        content: 'support.content_2',
        key: 'plat_form_2',
        padding: true
      },
      {
        title: 'support.title_3',
        content: 'support.content_3',
        key: 'plat_form_3'
      },
      {
        title: 'support.title_4',
        content: 'support.content_4',
        key: 'plat_form_4',
        'padding-right': true
      }
    ]
    return {
      handleClickMenuToggle,
      keyActive,
      LIST_PLAT_FORM
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable';
.wrapper_menu_plat_form {
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @apply tablet:max-w-[100%];
  .wrapper_menu_plat_form_box {
    transition: all 0.5s;
    cursor: pointer;
  }
  .wrapper_menu_plat_form_box.border-gradient {
    background: #131d20;
    border-radius: 8px;
    border: 1px solid transparent;
  }

  .wrapper_menu_plat_form_box {
    border-radius: 8px;
    border: 1px solid transparent;
    background: #131d20;
    &:hover {
      .title_faq {
        color: $emphasis !important;
      }
    }
  }
}

@-moz-keyframes slidemenu {
  0% {
    height: 80px;
  }
  100% {
    height: fit-content;
  }
}

@-webkit-keyframes slidemenu {
  0% {
    height: 80px;
  }
  100% {
    height: fit-content;
  }
}
</style>
