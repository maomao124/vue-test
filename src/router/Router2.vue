<script>

import {createRouter, createWebHashHistory} from 'vue-router'


//此数据可以从后端获取
const routes = [
  {
    id: 1,
    path: '/',
    component: "App"
  },
  {
    id: 2,
    path: '/app2',
    component: "App2"
  },
  {
    id: 3,
    path: '/app3',
    component: "App3"
  },
  {
    id: 4,
    path: '/app4',
    component: "App4"
  },
  {
    id: 5,
    path: '/app5',
    component: "App5"
  },
  {
    id: 6,
    path: '/app6',
    component: "App6"
  },
  {
    id: 7,
    path: '/app7',
    component: "App7"
  },
  {
    id: 8,
    path: '/app8',
    component: "App8"
  },
  {
    id: 9,
    path: '/app9',
    component: "App9"
  },
  {
    id: 10,
    path: '/app10',
    component: "App10"
  },
  {
    id: 11,
    path: '/app11',
    component: "App11"
  },
  {
    id: 12,
    path: '/app12',
    component: "App12"
  },
  {
    id: 13,
    path: '/app13',
    component: "App13"
  },
  {
    id: 14,
    path: '/app14',
    component: "App14"
  },
  {
    id: 15,
    path: '/app15',
    component: "App15"
  },
  {
    id: 16,
    path: '/app16',
    component: "App16"
  },
  {
    id: 17,
    path: '/app17',
    component: "App17"
  },
  {
    id: 18,
    path: '/app18',
    component: "App18"
  },
  {
    id: 19,
    path: '/app19',
    component: "App19"
  },
  {
    id: 999,
    path: '/:pathMatch(.*)*',
    component: "views/404"
  },
]

const router = createRouter({
  //内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: []
})


for (let i = 0; i < routes.length; i++)
{
  const r = routes[i];
  // 动态添加路由
  // 参数1：父路由名称
  // 参数2：路由信息对象
  router.addRoute("a", {
    path: r.path,
    name: r.id,
    //记住符号是 ` 而不是 ' 或者 "
    component: () => import(`@/${r.component}.vue`)
  })
  console.log("添加" + r.path)
}

/**
 * 重置路由
 */
export function resetRouter()
{
  for (let i = 0; i < routes.length; i++)
  {
    const r = routes[i];
    if (r.id === 999)
    {
      break;
    }
    router.removeRoute(r.id);
  }
}

export default router

</script>


