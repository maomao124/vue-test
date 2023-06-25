<template>
  <div>
    <ui>
      <li v-for="item of itemList" ref="items">
        {{ item }}
      </li>
    </ui>
  </div>
</template>

<script>
export default {
  name: "App46",
  data()
  {
    return {
      itemList: ['1', '2', '3', '4', '5']
    }
  },
  mounted()
  {
    console.log(this.$refs.items)
  }
}
</script>

<style scoped>

</style>
