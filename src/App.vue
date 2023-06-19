<template>

  <div>
    <h1 class="test">{{ msg }}</h1>
    <h2 class="test">my name is {{ name }}</h2>
  </div>

</template>

<script>

export default {
  data()
  {
    return {
      msg: "hello world",
      name: "张三"
    }
  },
}
</script>

<style>
.test {
  color: crimson;
}

</style>
