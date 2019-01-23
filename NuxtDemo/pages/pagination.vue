<template>
  <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>

    </div>

</template>

<script>

  import request from '~/service/index'
    export default {
        name: "pagination",
      /*data (){
          return {
            msg :"pagination"
          }
      }*/
      data() {
        return {
          msg: 'zengfan'
        }
      }/*,
      async asyncData() {
        let {data} = await request.get('https://api.myjson.com/bins/1ha2kw')
        return {msg: 'zengfan'}
      }*/
    }
</script>

<style scoped>

</style>
