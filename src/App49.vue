<template>
  <div>
    <c2 @commit="f1"></c2>
    <br>
    <c2 @commit="f2"></c2>
    <br>
    <br>
    <h2>第一个子组件的值：{{data1}}</h2>
    <h2>第二个子组件的值：{{data2}}</h2>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus'
import c2 from '@/components/C2'

export default {
  name: "App49",
  components: {
    c2
  },
  data()
  {
    return {
      data1: {
        name: '',
        address: ''
      },
      data2: {
        name: '',
        address: ''
      }
    }
  },
  methods:
      {
        f1(name, address)
        {
          console.log("f1", name, address)
          ElMessage.success({
            message: "触发自定义commit事件f1，值：" + name + " , " + address,
            center: true
          })
          this.data1 = {
            name: name,
            address: address
          }
        },
        f2(name, address)
        {
          console.log("f2", name, address)
          ElMessage.success({
            message: "触发自定义commit事件f2，值：" + name + " , " + address,
            center: true
          })
          this.data2 = {
            name: name,
            address: address
          }
        },
      }
}
</script>

<style scoped>

</style>
