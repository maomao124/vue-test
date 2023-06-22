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
import App_27 from '@/App27'
import App28 from '@/App28'
import NotFound from '@/views/404'

function f1()
{
  console.log("第一个路由独享的守卫")
  return true;
}

function f2()
{
  console.log("第二个路由独享的守卫")
  return true;
}

const routes = [
  {
    path: '/',
    components:
        {
          default: App,
          r1: App2,
          r2: App3,
          r3: App4,
        },
    alias: ['/aaa', '/bbb', '/ccc']
  },
  {
    path: '/app5',
    components:
        {
          default: App5,
          r1: App6,
          r2: App7,
          r3: App8,
        },
    beforeEnter: [f1, f2]
  },
  {
    path: '/app9',
    components:
        {
          default: App9,
          r1: App10,
          r2: App11,
          r3: App12,
        },
    beforeEnter: (to, from) =>
    {
      console.log("从" + from.path + "到" + to.path)
      //0.5的概率放行
      if (Math.random() > 0.5)
      {
        console.log("放行")
        return true
      }
      console.log("不放行")
      return false
    }
  },
  {
    path: '/app13',
    component: App13,
    redirect: "/404"
  },
  {
    path: '/app14',
    component: App14,
    beforeEnter: [f1, f2]
  },
  {
    path: '/app15',
    component: App15
  },
  {
    path: '/app16',
    component: App16
  },
  {
    path: '/app17',
    component: App17
  },
  {
    path: '/app18',
    component: App18,
  },
  {
    path: '/app19',
    component: App19,
    alias: '/table'
  },
  {
    path: '/app27',
    component: App_27,
    meta: {a: 131234, b: 666666}
  },
  {
    path: '/app28',
    component: App28,
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/404"
  }
]

const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior(to, from, savedPosition)
  {
    console.log(savedPosition)
    //return {top: 2000, left: 0}

    // 滚动到锚点
    if (to.hash)
    {
      return {
        selector: to.hash,
        // 平滑滚动
        behavior: 'smooth',
      }
    }

    return new Promise((resolve, reject) =>
    {
      setTimeout(() =>
      {
        resolve({left: 0, top: 2000})
      }, 1000)
    })
  }
})


export default router

</script>


