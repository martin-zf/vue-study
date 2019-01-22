<template>
  <div>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
      <li><nuxt-link :to="{name:'ansyData'}">ansyData</nuxt-link></li>
      <li><nuxt-link :to="{name:'table'}">表格</nuxt-link></li>
      <li><nuxt-link :to="{name:'pagination'}">分页</nuxt-link></li>
      <li><nuxt-link :to="{name:'debug'}">debug</nuxt-link></li>
    </ul>


  </div>
</template>
<script>
  export default {
    components: {
    }
  }
</script>
<style>
</style>
