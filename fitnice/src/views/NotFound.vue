<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-img
        src="../assets/robotito.png"
        class="align-center"
        aspect-ratio="16/9"
        contain
    ></v-img>
  </v-app>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "NotFound",
  components: {
    CHeader: Header
  }
}
</script>

<style scoped>

</style>