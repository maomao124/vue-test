<template>
  <div>

    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="id"
          label="学号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="180">
      </el-table-column>
      <el-table-column
          prop="age"
          label="年龄"
          width="180">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import {ElMessage} from 'element-plus'

export default {
  name: "App19",
  data()
  {
    return {
      tableData: (function ()
      {
        const data = [];
        for (let i = 0; i < 500; i++)
        {
          data.push({
            id: 100001 + i,
            name: "姓名" + (i + 1),
            sex: Math.random() > 0.5 ? "男" : "女",
            age: Math.round(Math.random() * 10 + 10)
          })
        }
        ElMessage({
          type: 'success',
          message: "加载完成"
        })
        return data;
      }())
    }
  }
}
</script>

<style scoped>

</style>
