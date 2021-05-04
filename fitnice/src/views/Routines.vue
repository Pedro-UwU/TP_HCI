<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <div class="pa-6">
      <div class="text-right">
        <h2 class="white--text text-left">Rutinas</h2>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order></c-order>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Filters from "../components/Filters";
import Order from "../components/Order";
import CreateRoutineBtn from "../components/CreateRoutineBtn";

export default {
  name: "Routines",
  components: {
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn
  }
}
</script>

<style scoped>

</style>