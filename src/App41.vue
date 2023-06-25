<template>

  <div>
    <h2>uuid: {{ data.uuid }}</h2>
    <el-button type="success" size="large" @click="data.uuid=generateUUID()">点击更改uuid</el-button>
    <br>
    <br>
    <el-input v-model="data.count" type="number" style="width: 200px"/>
  </div>

</template>

<script>

export default {
  name: "App41",
  data()
  {
    return {
      data: {
        uuid: '',
        count: 100
      }
    }
  },
  watch:
      {
        data:
            {
              handler(newValue, oldValue)
              {
                // 注意：在嵌套的变更中，
                // 只要没有替换对象本身，
                // 那么这里的 `newValue` 和 `oldValue` 相同
                console.log(newValue, oldValue)
                console.log("检测到uuid或者count更改，当前uuid为" + this.data.uuid)
                console.log("检测到uuid或者count更改，当前count为" + this.data.count)
              },
              deep: true
            },
      },
  methods:
      {
        generateUUID()
        {
          let d = new Date().getTime()
          if (window.performance && typeof window.performance.now === "function")
          {
            d += performance.now(); //use high-precision timer if available
          }
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
          {
            const r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
          });
        }
      },
  mounted()
  {
    const uuid = this.generateUUID();
    console.log(uuid)
    this.data.uuid = uuid
  }
}
</script>

<style scoped>

</style>
