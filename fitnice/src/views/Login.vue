<template>
  <v-app>
    <c-login-form/>
  </v-app>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Login",
  components: {
    CLoginForm: LoginForm
  },
  // data: () => ({
  //   tab: null
  // })
};

</script>

<style scoped>
  #app {
    background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')
    no-repeat center center fixed !important;
    background-size: cover;
  }
</style>