<template>
  <v-app>
    <c-successful-email></c-successful-email>
  </v-app>
</template>

<script>
import SuccessfulEmail from "../components/SuccessfulEmail";

export default {
  name: "VerificationSuccess",
  components: {
    CSuccessfulEmail: SuccessfulEmail
  }
}
</script>

<style scoped>
#app {
  background-image: linear-gradient(#192633,#5885B3);
}
</style>