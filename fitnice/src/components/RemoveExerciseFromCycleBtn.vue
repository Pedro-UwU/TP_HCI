<template>
  <div>
    <v-btn class="black--text quinary my-3 mx-5"
           :disabled="selected.length===0"
           :ripple="true"
           @click="removeSelected(); selected = []"
           rounded
    >
      <v-icon class="mr-2">mdi-delete</v-icon>
      <span v-if="selected.length<=1">Eliminar Ejercicio</span>
      <span v-else>Eliminar Ejercicios</span>
    </v-btn>
  </div>
</template>

<script>
import Cycle from "../store/Cycle";

export default {
  name: "RemoveExerciseFromCycleBtn",
  props: {
    selected: Array,
    cycle: Cycle
  },
  methods: {
    removeSelected() {
      for (let i =0; i < this.selected.length; i++){
        this.cycle.remove(this.selected[i]);
      }
    }
  }
}
</script>

<style scoped>

</style>