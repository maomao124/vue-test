<template>
  <div>
    <input type="text" v-model="d" :ref="foo">
  </div>
</template>

<script>
export default {
  name: "App47",
  data()
  {
    return {
      d: "10000",
    }
  },
  methods: {
    foo(el)
    {
      console.log("调用一次 当前value："+el.value)
      console.log(el)
    }
  }
}
</script>

<style scoped>

</style>
