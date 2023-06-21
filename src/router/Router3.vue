<script>

import {createRouter, createWebHashHistory} from 'vue-router'
import App from '@/App'
import App2 from '@/App2'
import App3 from '@/App3'
import App4 from '@/App4'
import App5 from '@/App5'
import App6 from '@/App6'
import App7 from '@/App7'
import App8 from '@/App8'
import App9 from '@/App9'
import App10 from '@/App10'
import App11 from '@/App11'
import App12 from '@/App12'
import App13 from '@/App13'
import App15 from '@/App15'
import App14 from '@/App14'
import App16 from '@/App16'
import App17 from '@/App17'
import App18 from '@/App18'
import App19 from '@/App19'
import C1 from '@/views/C1'
import C2 from '@/views/C2'
import NotFound from '@/views/404.vue'


const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: "/c1",
    component: C1,
    children:
        [
          {
            path: '/c1/app2',
            component: App2
          },
          {
            path: '/c1/app3',
            component: App3
          },
          {
            path: '/c1/app4',
            component: App4
          },
          {
            path: '/c1/app5',
            component: App5
          },
          {
            path: '/c1/app6',
            component: App6
          },
          {
            path: '/c1/app7',
            component: App7
          },
          {
            path: '/c1/app8',
            component: App8
          },
          {
            path: '/c1/app9',
            component: App9
          },
          {
            path: '/c1/app10',
            component: App10
          },
          {
            path: '/c1/app11',
            component: App11
          },
        ]
  },
  {
    path: "/c2",
    component: C2,
    children:
        [
          {
            path: '/c2/app9',
            component: App9
          },
          {
            path: '/c2/app10',
            component: App10
          },
          {
            path: '/c2/app11',
            component: App11
          },
          {
            path: '/c2/app12',
            component: App12
          },
          {
            path: '/c2/app13',
            component: App13
          },
          {
            path: '/c2/app14',
            component: App14
          },
          {
            path: '/c2/app15',
            component: App15
          },
          {
            path: '/c2/app16',
            component: App16
          },
          {
            path: '/c2/app17',
            component: App17
          },
          {
            path: '/c2/app18',
            component: App18
          },
          {
            path: '/c2/app19',
            component: App19
          },
        ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router

</script>


