<template>

  <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>

</template>

<script>

  export default {
    name: "store"
  }


</script>

<style scoped>

</style>
