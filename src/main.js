import {createApp} from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App52.vue'
import Router2 from '@/router/Router11'
import Store from '@/store/index'
import i18n from '@/plugins/i18n'

const app = createApp(App)

app.use(ElementPlus)
app.use(Router2)
app.use(Store)
app.use(i18n, {
    a:
        {
            a1: "hello1",
            a2: "hello2",
            a3: "hello3",
        },
    b:
        {
            b1: "world1",
            b2: "world2",
            b3: "world3",
        }
})
app.mount('#app')
