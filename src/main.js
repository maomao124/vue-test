import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App23.vue'
import Router2 from '@/router/Router2'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router2)
app.mount('#app')
