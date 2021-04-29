<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <h1>Home</h1>
  </v-app>
</template>

<style scoped>
h1 {
  color: green;
}
</style>

<script>
import Header from "../components/Header";

export default {
  name: "Home",

  components: {
    CHeader: Header
  }
}
</script>