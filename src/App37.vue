<template>
  <div>

    <h1>count数量：{{ this.$store.getters.getCount2 }}</h1>
    <br>

    <h1>名字：{{ this.$store.getters.getName2 }}</h1>
    <br>

    <h1>年龄：{{ this.$store.getters.getAge2 }}</h1>
    <br>

    <el-button type="success" size="large" @click="incrementAsync">count自增</el-button>
    <br>
    <el-input type="text" size="large" v-model="this.name2" @change="f2"></el-input>

    <br>
    <el-input type="number" size="large" autocomplete="年龄" v-model="this.age2" @change="f3"></el-input>

  </div>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex'
import {ADD_COUNT, UPDATE_AGE, UPDATE_NAME} from '@/store/mutation-types'
import {INCREMENT_ASYNC} from '@/store/actions-types'

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
          this.$store.dispatch(INCREMENT_ASYNC)
        },
        f2()
        {
          console.log(this.name2)
          this.$store.commit({
            type: UPDATE_NAME,
            name: this.name2
          })
        },
        f3()
        {
          console.log(this.age2)
          this.$store.commit({
            type: UPDATE_AGE,
            age: this.age2
          })
        },
        ...mapActions([INCREMENT_ASYNC])
      },
  computed: {
    add()
    {
      console.log("todo");
    },
    //...mapState(['count', 'name', 'age'])
    ...mapGetters(['getCount2', 'getName2', 'getAge2'])
  }
}
</script>

<style scoped>

</style>
