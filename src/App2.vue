<template>
  <div>
    <h1>{{ name }} </h1>
    <h1>是否成年：{{ age >= 18 ? '成年' : '未成年' }}</h1>
    <h1>5年后年龄：{{ age + 5 }}</h1>
  </div>

</template>

<script>
export default {
  name: "App2",
  data()
  {
    return {
      name: "李四",
      age: 19
    }
  }
}
</script>

<style scoped>

</style>
