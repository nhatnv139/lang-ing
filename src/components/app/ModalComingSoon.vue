<template>
  <Modal
      centered
      wrapClassName="modal-coming-soon"
      v-model:visible="visible"
      :maskClosable="false"
  >
    <div class="min-h-[400px] mobile:min-h-[420px] flex relative w-full flex items-end">
      <img class="absolute top-0 mobile:hidden bottom-0 right-0 left-0 w-full h-full" :src="BgComingSoon" />
      <img class="absolute hidden mobile:flex top-0 bottom-0 right-0 left-0 w-full h-full" :src="BgComingSoonMobile" />
      <div class="w-[90%] mobile:w-full flex h-[400px] mobile:h-[430px] flex-col items-end gap-9 z-10 p-3">
        <close-outlined @click="handleClose" class="cursor-pointer" style="font-size: 18px; color: white" />
      </div>
    </div>
  </Modal>
</template>
<script>
import {CloseOutlined} from "@ant-design/icons-vue";
import { ref, watch, computed } from 'vue';
import { Modal } from 'ant-design-vue';
import BgComingSoon from '@/assets/images/image-modal-coming-soon.svg';
import BgComingSoonMobile from '@/assets/images/bg-modal-coming-mobile.png';
import ImageComingSoon from '@/assets/images/image-modal-coming-soon.svg';
import {useAppStore} from "@/stores/appStore";
export default {
  components: { Modal, CloseOutlined },
  setup() {
    const visible = ref(false)
    const appStore = useAppStore()
    const handleClose = () => {
      appStore.setModalComingSoon(false)
    }

    const openModal = computed(() => appStore.openModalComingSoon)
    watch(
        () => openModal.value,
        () => {
          visible.value = openModal.value;
        },
    );
    return { visible, BgComingSoon, ImageComingSoon, BgComingSoonMobile, handleClose };
  },
};
</script>
