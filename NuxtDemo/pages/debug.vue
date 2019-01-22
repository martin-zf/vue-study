<template>
  <div>
  <el-button type="primary" @click="sayHello">主要按钮</el-button>
  </div>
</template>

<script>
    export default {
        name: "debug",
      methods:{
          sayHello(){
           // this.$debug('hello button!')
            this.$axios('https://api.myjson.com/bins/1ha2kw').then((res)=>{
              this.$debug(res)
            })
          }
      }
    }
</script>

<style scoped>

</style>
