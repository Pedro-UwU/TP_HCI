<template>
  <v-container>
    <v-row align="center">
      <h2 @click="tabSelected=true" class="subtitles">Mis Rutinas</h2>
      <h2 class="subtitles">/</h2>
      <h2 @click="tabSelected=false" class="subtitles">Mis Ejercicios</h2>
      <v-spacer></v-spacer>
      <div  class="text-right" v-if="tabSelected">
        <c-filters class="align-end"></c-filters>
        <c-order class="align-end"></c-order>
      </div>
      <v-container v-else>
      <c-my-exercises></c-my-exercises>
    </v-container>
    </v-row>
  </v-container>
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
}
</script>

<style scoped>
h2:hover {
  cursor: pointer;
}
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
}
</style>