<template>

  <div>
    <h2>uuid: {{ uuid }}</h2>
    <el-button type="success" size="large" @click="uuid=generateUUID()">点击更改uuid</el-button>
    <br>
    <br>
    <el-input v-model="count" type="number" style="width: 200px"/>
  </div>

</template>

<script>

export default {
  name: "App39",
  data()
  {
    return {
      uuid: '',
      count: 100
    }
  },
  watch:
      {
        uuid()
        {
          console.log("检测到uuid更改，当前uuid为" + this.uuid)
        },
        count()
        {
          console.log("检测到count更改，当前count为" + this.count)
        }
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
    this.uuid = uuid
  }
}
</script>

<style scoped>

</style>
