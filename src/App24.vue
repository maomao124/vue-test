<template>

  <el-container>
    <el-aside width="200px">
      <div className="link">

        <br>
        <el-input type="text" size="large" autocomplete="false" v-model="to"/>
        <br>
        <el-button type="success" size="large" @click="go">点击跳转</el-button>
        <br>
        <el-button type="success" size="large" @click="resetRouter">点击重置路由</el-button>
        <br>
        <el-button type="success" size="large" @click="saveToSessionStorage">保存路由信息</el-button>
        <br>
        <el-button type="success" size="large" @click="loadFromSessionStorage">加载路由信息</el-button>

      </div>
    </el-aside>
    <el-container>
      <el-header>路由跳转</el-header>
      <el-main>
        <div className="all">
          <router-view className="r"></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import {resetRouter, loadFromSessionStorage, saveToSessionStorage} from '@/router/Router2'

export default {
  name: "App24",
  data()
  {
    return {
      to: "/",
    }
  },
  methods:
      {
        go()
        {
          console.log("跳转到：" + this.to)
          this.$router.push(this.to);
        },
        resetRouter()
        {
          console.log("重置路由")
          resetRouter();
        },
        loadFromSessionStorage()
        {
          loadFromSessionStorage();
        },
        saveToSessionStorage()
        {
          saveToSessionStorage();
        }
      }

}
</script>

<style scoped>
.all {
  padding: 20px;
  background: #b5e3f1;
}

.r {
  background: cornflowerblue;
}

.link {
  background: #42b983;
  height: 100vh;
}
</style>
