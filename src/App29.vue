<template>
  <div>

    <h1>count数量：{{ $store.state.count }}</h1>
    <br>

    <h1>名字：{{ $store.state.name }}</h1>
    <br>

    <h1>年龄：{{ $store.state.age }}</h1>
    <br>

    <el-button type="success" size="large" @click="f1">count自增</el-button>
    <br>
    <el-input type="text" size="large" v-model="name" @change="f2"></el-input>

    <br>
    <el-input type="number" size="large" autocomplete="年龄" v-model="age" @change="f3"></el-input>

  </div>
</template>

<script>
export default {
  name: "App29",
  data()
  {
    return {
      name: "",
      age: 0,
    }
  },
  methods:
      {
        f1()
        {
          this.$store.commit("increment")
        },
        f2()
        {
          console.log(this.name)
          this.$store.commit("updateName", this.name)
        },
        f3()
        {
          console.log(this.age)
          this.$store.commit("updateAge", this.age)
        }
      }
}
</script>

<style scoped>

</style>
