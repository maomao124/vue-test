<template>
  <div>
    <h2 v-background="'#cccccc'">hello</h2>
    <h2 v-background="'#ffaa00'">hello</h2>
    <h2 v-background="'#ffaacc'">hello</h2>
    <h2 v-background="'red'">hello</h2>
    <h2 v-background="'skyblue'">hello</h2>
    <h2 v-background="'#00ffaa'">hello</h2>
  </div>
</template>

<script>
export default {
  name: "App51",
  directives:
      {
        background: {
          beforeMount: function (el, binding, vnode, prevVnode)
          {
            console.log(el, binding.value)
            el.style.background = binding.value;
          }
        }
      }
}
</script>

<style scoped>

</style>
