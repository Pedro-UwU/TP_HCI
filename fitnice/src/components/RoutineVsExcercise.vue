<template>
  <v-container>
    <v-row align="center">
      <h2
          @click="tabSelected=true"
          class="subtitles text-decoration-underline"
          :class="{ subtitlesNot : !tabSelected }"
      >Mis Rutinas</h2>
      <h2 class="subtitles">/</h2>
      <h2
          @click="tabSelected=false"
          class="subtitles text-decoration-underline"
          :class="{ subtitlesNot : tabSelected }"
      >Mis Ejercicios</h2>
      <v-spacer></v-spacer>
      <div  class="text-right" v-if="tabSelected">
        <c-filters class="align-end"></c-filters>
        <c-order class="align-end"></c-order>
      </div>
      <div v-else>
        <c-exercise-pop-up/>
      </div>
      <v-container v-if="!tabSelected">
        <c-my-exercises></c-my-exercises>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import MyExercises from "./MyExercises";
import Filters from "./Filters";
import Order from "./Order";
import ExercisePopUp from "./ExercisePopUp";

export default {
  name: "RoutineVsExcercise",

  components: {
    CMyExercises: MyExercises,
    CFilters: Filters,
    COrder: Order,
    CExercisePopUp: ExercisePopUp
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
.subtitlesNot {
  color: #BDC3c7;
  opacity: 80%;
}
</style>