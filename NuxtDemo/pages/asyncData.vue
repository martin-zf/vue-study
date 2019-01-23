<template>
  <div>
    <h1>姓名：{{info.name}}</h1>
    <h2>年龄：{{info.age}}</h2>
    <h2>兴趣：{{info.interest}}</h2>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        name: 'hello World',
      }
    },
    async asyncData({store,error}) {
      let {data} = await store.dispatch('asyncData/loadData')
      return {info: data}
    }
  }
</script>

<style scoped>

</style>
