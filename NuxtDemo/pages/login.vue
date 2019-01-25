<template>
  <form>
    <input type="text" name="username" v-model="username" placeholder="请输入手机号码"><br/>
    <input type="password" name="password" v-model="password" placeholder="请输入登录密码"><br/>

    <button @click="handleLogin()" type="button">登录</button>
  </form>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: '13537871009',
        password: ''
      }
    },
    methods: {
      handleLogin() {
        const username = this.username
        const password = this.password

        this.$store.dispatch('login', {username, password}).then(() => {
          //跳转页面
          this.$router.push({path: '/member'})
        }).catch((error) => {
          alert(error);
        })
      }
    }
  }
</script>

<style scoped>

</style>
