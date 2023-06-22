<template>
  <div>

    <h1>count数量：{{ count }}</h1>
    <br>

    <h1>名字：{{ name }}</h1>
    <br>

    <h1>年龄：{{ age }}</h1>
    <br>

    <el-button type="success" size="large" @click="f1">count自增</el-button>
    <br>
    <el-input type="text" size="large" v-model="this.name2" @change="f2"></el-input>

    <br>
    <el-input type="number" size="large" autocomplete="年龄" v-model="this.age2" @change="f3"></el-input>

  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: "App29",
  data()
  {
    return {
      name2: "",
      age2: 0,
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
          console.log(this.name2)
          this.$store.commit("updateName", this.name2)
        },
        f3()
        {
          console.log(this.age2)
          this.$store.commit("updateAge", this.age2)
        }
      },
  computed: {
    add()
    {
      console.log("todo");
    },
    ...mapState(['count', 'name', 'age'])
  }
}
</script>

<style scoped>

</style>
