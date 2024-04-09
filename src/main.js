import './design/main.scss'
import 'ant-design-vue/dist/antd.css'
import '@splidejs/vue-splide/css/sea-green'
import { createApp } from 'vue'
import { i18n } from '@/locale/index.js'
import Antd from 'ant-design-vue'
import router from './router'
import { setupStore } from './stores'
import { MotionPlugin } from '@vueuse/motion'
import {motion_custom} from "@/helper/motion";
import vClickOutside from "click-outside-vue3"
import App from './App.vue'

const app = createApp(App)

app.use(MotionPlugin, {
  directives: motion_custom
})
setupStore(app)
app.use(i18n)
app.use(Antd)
app.use(router)
app.use(vClickOutside)
app.mount('#app')
