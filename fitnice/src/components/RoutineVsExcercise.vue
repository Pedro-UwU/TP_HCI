<template>
  <div>
    <v-tabs
        color="white"
        background-color="#192633"
        dark
    >
      <v-tab @click="switchTab()">Mis Rutinas</v-tab>
      <v-tab @click="switchTab()">Mis Ejercicios</v-tab>
    </v-tabs>
    <v-container v-if="tabSelected">
      <div class="text-right">
        <c-filters class="align-end"></c-filters>
        <c-order class="align-end"></c-order>
      </div>
    </v-container>
    <v-container v-else>
      <c-my-exercises></c-my-exercises>
    </v-container>
  </div>
</template>

<script>
import MyExercises from "./MyExercises";
import Filters from "./Filters";
import Order from "./Order";

export default {
  name: "RoutineVsExcercise",

  components: {
    CMyExercises: MyExercises,
    CFilters: Filters,
    COrder: Order
  },

  data: () => ({
    tabSelected: true
  }),

  methods: {
    switchTab: function() {
      this.tabSelected = !this.tabSelected;
    }
  }
}
</script>

<style scoped>

</style>