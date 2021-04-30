<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <h2 class="subtitles">Recomendaciones</h2>
    <c-routine-card title="Rutina 5" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
  </v-app>
</template>

<style scoped>
.subtitles {
  color: white;
}
</style>

<script>
import Header from "../components/Header";
import RoutineCard from "../components/RoutineCard";

export default {
  name: "Home",

  components: {
    CHeader: Header,
    CRoutineCard: RoutineCard,
  }
}
</script>