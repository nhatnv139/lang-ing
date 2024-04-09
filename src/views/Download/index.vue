<template>
    <div>
        <ComponentFooter></ComponentFooter>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { scrollToTop } from '../../helper';
import Footer from '../../layout/Footer.vue';
export default {
    name: 'DownloadPage',
    components: {
        ComponentFooter: Footer
    },
    setup() {
        onMounted(() => {
            scrollToTop()
        })
    }
}
</script>