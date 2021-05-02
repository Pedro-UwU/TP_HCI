<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <h1>Rutinas</h1>
    <c-filters></c-filters>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Filters from "../components/Filters";

export default {
  name: "Routines",
  components: {
    CHeader: Header,
    CFilters: Filters
  }
}
</script>

<style scoped>

</style>