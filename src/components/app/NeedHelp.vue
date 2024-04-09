<template>
  <div class="button-need-help text-content-2 !font-semibold" @click="handleOpenNeedHelp">
    <p class="button-need-help-text">Need help?</p>
  </div>
  <div class="wrap_need_help" :class="[openModal ? 'top-0' : '-top-[200%]']">
    <div :class="['contact_us_body', openModal ? '' : 'translate-y-[200%]']">
      <close-outlined @click="handleCloseNeedHelp" class="icon-close-form-need-help"/>
      <p class="!text-neutral-0 text-center text-heading-2">{{ $t('need_help.title') }}</p>
      <p class="text-content-4 !text-neutral-0 text-center">{{ $t('need_help.content') }}</p>
      <ListSocial></ListSocial>
      <a-form
          class="max-w-[594px] w-full flex flex-col"
          :model="formState"
          name="basic"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
      >
        <div class="flex flex-row mobile:flex-col justify-between w-full gap-[17px] mobile:gap-0">
          <a-form-item
              class="w-full"
              name="username"
              :rules="[{ required: true, message: $t('common.require_name') }]"
          >
            <a-input :placeholder="$t('common.your_name')" v-model:value="formState.username"/>
          </a-form-item>

          <a-form-item
              class="w-full"
              name="email"
              :rules="[
              {
                required: true,
                message: $t('common.require_mail'),
                pattern: new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
              }
            ]"
          >
            <a-input :placeholder="$t('common.your_email')" v-model:value="formState.email"/>
          </a-form-item>
        </div>
        <a-form-item
            name="message"
            :rules="[{ required: true, message: $t('common.require_message') }]"
        >
          <a-textarea
              class="!pt-3"
              :autosize="{ minRows: 4, maxRows: 10 }"
              :placeholder="$t('common.message')"
              :rows="4"
              v-model:value="formState.message"
          />
        </a-form-item>
        <a-form-item class="w-full !mt-6">
          <ButtonCustom :icon="false" :disabled="loading" :loading="loading" type="click" label="Submit" @click="handleSubmit"></ButtonCustom>
          <a-button class="!hidden" id="button-submit-needhelp" html-type="submit"> clcik</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
import {reactive, watch, ref} from 'vue'
import {message} from 'ant-design-vue'
import ListSocial from '@/components/app/ListSocial.vue'
import axios from 'axios'
import ButtonCustom from '@/components/app/ButtonCustom.vue'
import {CloseOutlined} from '@ant-design/icons-vue'

const chatIdTelegram = import.meta.env.VITE_BASE_TOKEN_CHAT_ID_TELEGRAM
const tokenContactTelegram = import.meta.env.VITE_BASE_TOKEN_CONTACT_TELEGRAM
export default {
  name: 'SectionContactUs',
  components: {
    ListSocial,
    ButtonCustom,
    CloseOutlined
  },
  setup() {
    const loading = ref(false)
    const openModal = ref(false)
    const formState = reactive({
      username: '',
      email: '',
      message: ''
    })

    const handleSentMessage = async () => {
      try {
        loading.value = true
        const token = tokenContactTelegram
        const request = {
          chat_id: chatIdTelegram,
          text: `User name: ${formState.username} %0AEmail: ${formState.email} %0AQuestions: ${formState.message}`
        }
        await axios.post(
            `https://api.telegram.org/bot${token}/sendMessage?chat_id=${request.chat_id}&text=${request.text}`
        )
        message.success('Your issue has been received')
        formState.email = ''
        formState.message = ''
        formState.username = ''
      } catch (err) {
        message.success('An error has occurred')
        return err
      } finally {
        loading.value = false
      }
    }
    const onFinish = () => {
      handleSentMessage()
    }
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo)
    }

    const handleSubmit = () => {
      document.getElementById('button-submit-needhelp').click()
    }

    const handleOpenNeedHelp = () => {
      openModal.value = true
    }
    const handleCloseNeedHelp = () => {
      openModal.value = false
    }

    watch(
        () => openModal.value,
        () => {
          if (openModal.value) {
            document.body.style.overflow = 'hidden'
          } else {
            document.body.style.overflow = 'unset'
          }
        }
    )
    return {
      formState,
      onFinish,
      onFinishFailed,
      handleSubmit,
      handleOpenNeedHelp,
      handleCloseNeedHelp,
      openModal,
      loading
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.button-need-help {
  border: 1px solid #262f31;
  height: 60px;
  background: #0a1013;
  @apply fixed right-[-30px] cursor-pointer bottom-[200px] z-[1000] flex justify-center items-center rounded-l-[30px] px-10 text-emphasis;

  .button-need-help-text::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: $emphasis;
    transition: width 0.3s;
  }

  &:hover {
    .button-need-help-text::after {
      width: 100%;
    }
  }
}

.wrap_need_help {
  background: rgba(12, 15, 17, 0.9);
  @apply fixed overflow-hidden overflow-y-auto py-6  left-0 right-0 h-screen flex z-[1001] transition-all duration-300 mobile:px-3;
  .contact_us_body {
    width: 100%;
    position: relative;
    border-radius: 16px;
    max-width: 647px;
    flex-direction: column;
    display: flex;
    gap: 28px;
    margin: auto;
    align-items: center;
    justify-content: center;
    background: #0a1013;
    transition: all 0.6s linear;
    transition-delay: 0.3s;
    @apply px-[48px] py-[64px] mobile:px-3 mobile:py-12;

    .icon-close-form-need-help {
      font-size: 24px;
      color: $neutral-0 !important;
      @apply absolute top-6 right-6 cursor-pointer hover:scale-125 duration-500 transition-all;
    }
  }
}
</style>
