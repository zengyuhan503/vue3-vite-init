import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/antd.css'
import Antd, { message } from 'ant-design-vue'

import App from './App.vue'

const app = createApp(App)
app.use(createPinia)
app.mount('#app')
