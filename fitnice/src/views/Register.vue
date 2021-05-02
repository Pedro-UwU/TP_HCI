<template>
  <v-app>
    <c-register-form></c-register-form>
  </v-app>
</template>

<script>
import RegisterForm from "../components/RegisterForm";

export default {
  name: "Register",

  components: {
    CRegisterForm: RegisterForm
  }
}
</script>

<style scoped>
#app {
  background-image: linear-gradient(#192633,#5885B3);
}
</style>