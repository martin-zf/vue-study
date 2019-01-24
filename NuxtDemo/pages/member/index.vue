<template>
  <div>
    success login

    <span>token:</span><span>{{$store.state.user.token}}</span><br>

    <span>token:</span><span>{{$store.getters.token}}</span><br>

    <button @click="getAccountIncome">click me</button>
  </div>
</template>

<script>
  import {login, getAccountIncome} from '~/api/login'
  export default {
    name: "index",
    created() {
      this.getAccountIncome()
    },
    methods: {
      getAccountIncome() {
        getAccountIncome()
      }
    }

  }
</script>

<style scoped>

</style>
