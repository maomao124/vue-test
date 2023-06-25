<template>

  <div class="c1">
    <p>子组件内容</p>
    <el-button type="success" @click="send">点击触发自定义事件demo</el-button>
    <br>
    <br>
    <el-button type="success" @click="$emit('demo2')">点击触发自定义事件demo2</el-button>
  </div>

</template>

<script>
export default {
  name: "C1",
  methods:
      {
        send()
        {
          this.$emit('demo')
        }
      }
}
</script>

<style scoped>
.c1 {
  width: 200px;
  height: 200px;
  background: darksalmon;
}
</style>
