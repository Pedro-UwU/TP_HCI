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
  background-image: linear-gradient(#192633,#5885B3);
}
</style>