<template>
  <v-btn
      class="white--text"
      :plain="true"
      color="white"
      :ripple="false"
      @click="$router.push('/create'+createRoutine())"
  >
    Crear Rutina
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
import {RoutineStoreEx} from "../store/RoutineStore";
import Routine from "../store/Routine";

export default {
  name: "CreateRoutineBtn",
  methods: {
    createRoutine() {
      return RoutineStoreEx.add(new Routine('','','',''))
    }
  }
}
</script>

<style scoped>

</style>