<template>

  <div class="c2">
    <p>子组件内容</p>
    <el-input v-model="name"></el-input>
    <br>
    <el-input v-model="address"></el-input>
    <br>
    <el-button type="success" @click="send">点击触发自定义事件commit</el-button>
  </div>

</template>

<script>
export default {
  name: "C2",
  data()
  {
    return {
      name: '',
      address: ''
    }
  },
  methods:
      {
        send()
        {
          console.log("子组件向父组件传值：", this.name, this.address)
          this.$emit('commit', this.name, this.address)
        }
      }
}
</script>

<style scoped>
.c2 {
  width: 400px;
  height: 200px;
  background: dodgerblue;
}
</style>
