<template>

  <div class="div">
    <hr>
    <router-view class="r1" name="r1" v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
    <hr>
    <router-view class="r2" v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
    <hr>
    <router-view class="r3" name="r3" v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.path"/>
      </transition>
    </router-view>
    <hr>
  </div>

</template>

<script>
export default {
  name: "App26"
}
</script>

<style scoped>
.div {
  background: #b5e3f1;
}

.r1 {
  background: blueviolet;
}

.r2 {
  background: #42b983;
}

.r3 {
  background: darkorange;
}
</style>
