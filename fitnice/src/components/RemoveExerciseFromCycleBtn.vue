<template>

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