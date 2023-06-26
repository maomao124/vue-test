import {createApp} from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App49.vue'
import Router2 from '@/router/Router11'
import Store from '@/store/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router2)
app.use(Store)
app.mount('#app')
