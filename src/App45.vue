<template>
  <div>
    <input type="text" value="test" ref="input">
  </div>
</template>

<script>
export default {
  name: "App45",

  mounted()
  {
    console.log(this.$refs.input)
    console.log("value:", this.$refs.input.value)
    console.log("type:", this.$refs.input.type)
    this.$refs.input.value = "123456789";
    console.log("value:", this.$refs.input.value)

    this.$refs.input.focus();
  }
}
</script>

<style scoped>

</style>
