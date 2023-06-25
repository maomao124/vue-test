<template>
  <div>
    <!--没有注册demo2-->
    <c1 @demo="f1"></c1>
    <br>
    <br>
    <c1 @demo="f2" @demo2="f3"></c1>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus'
import c1 from '@/components/C1'

export default {
  name: "App48",
  components: {
    c1: c1,
  },
  methods:
      {
        f1()
        {
          console.log("f1")
          ElMessage.success({
            message: "触发自定义demo事件 f1",
            center: true
          })
        },
        f2()
        {
          console.log("f2")
          ElMessage.success({
            message: "触发自定义demo事件 f2",
            center: true
          })
        },
        f3()
        {
          console.log("f3")
          ElMessage.success({
            message: "触发自定义demo2事件 f3",
            center: true
          })
        }
      }
}
</script>

<style scoped>

</style>
