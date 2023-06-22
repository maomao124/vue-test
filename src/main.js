import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App26.vue'
import Router2 from '@/router/Router11'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router2)
app.mount('#app')
