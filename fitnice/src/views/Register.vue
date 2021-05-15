<template>
  <v-app>
    <c-register-form2></c-register-form2>
  </v-app>
</template>

<script>
// import RegisterForm from "../components/RegisterForm";
import RegisterForm2 from "../components/RegisterForm2";

export default {
  name: "Register",

  components: {
    // CRegisterForm: RegisterForm,
    CRegisterForm2: RegisterForm2
  }
}
</script>

<style scoped>
#app {
  background-image: linear-gradient(#192633,#5885B3);
}
</style>