<template>
  <div>
    success login! <br>

    <span>token:</span><span>{{$store.state.token}}</span><br>

    <button @click="getAccountIncome">click me</button>
  </div>
</template>

<script>
  import {login, getAccountIncome} from '~/api/user'
  import {getToken, setToken, removeToken} from '~/utils/cookie'
  export default {
    name: "index",
    created() {
      this.getAccountIncome()
    },
    fetch({ store, params}){



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
