<template>
  <h1>组件内的守卫</h1>
  <h2>{{ $route.query.id }}</h2>
</template>

<script>
import {ElMessage} from 'element-plus'


export default {
  name: "App27",
  data()
  {
    return {
      id: this.$route.query.id
    }
  },
  beforeRouteEnter: (to, from) =>
  {
    // 在渲染该组件的对应路由被验证前调用
    // 不能获取组件实例 `this` ！
    // 因为当守卫执行时，组件实例还没被创建！
    console.log("执行 beforeRouteEnter 方法")
  },
  beforeRouteUpdate: (to, from) =>
  {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 `/users/:id`，在 `/users/1` 和 `/users/2` 之间跳转的时候，
    // 由于会渲染同样的 `UserDetails` 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 因为在这种情况发生的时候，组件已经挂载好了，导航守卫可以访问组件实例 `this`
    console.log("执行 beforeRouteUpdate 方法")

  },
  beforeRouteLeave(to, from)
  {
    // 在导航离开渲染该组件的对应路由时调用
    // 与 `beforeRouteUpdate` 一样，它可以访问组件实例 `this`
    console.log("执行 beforeRouteLeave 方法")
    ElMessage.info({
      message: "即将离开/app27",
      center: true,
    })
    console.log(typeof this.id)
    if (this.id === undefined || this.id !== '123')
    {
      ElMessage.error({
        message: "id 参数不为123，无法离开",
        center: true,
      })
      return false
    }
    else
    {
      ElMessage.success({
        message: "成功离开/app27",
        center: true,
      })
      return true
    }
  },

}
</script>

<style scoped>

</style>
