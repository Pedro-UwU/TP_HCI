<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Rutinas</h2>
        <v-spacer></v-spacer>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters style="background: none" align-content="center">
        <v-col
            v-for="n in 11"
            :key="n"
            align="center"
            cols="3"
        >
          <c-routine-card class="routine" title="Rutina 5" stars=3.5 fav=true src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
}
.routine {
  margin-bottom: 20px;
}
</style>

<script>
import Header from "../components/Header";
import RoutineCard from "../components/RoutineCard";
import Filters from "../components/Filters";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Order from "../components/Order";

export default {
  name: "Explore",
  components: {
    CHeader: Header,
    CRoutineCard: RoutineCard,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn
  },
}
</script>