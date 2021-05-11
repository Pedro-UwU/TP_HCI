<template>
  <div class="justify-end mx-2">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="grey--text transparent"
            small
            solo
            plain
            icon
            v-bind="attrs"
            v-on="on"
        >
          <v-icon class="mr-2">mdi-delete-outline</v-icon>
        </v-btn>
      </template>
      <v-card class="primary">
        <v-card-title>
          <span>¿Desea eliminar <br>"{{exercise.name}}" ?</span>
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false;"
          >
            Cancelar
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false;
                    deleteExercise();"
          >
            Eliminar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Exercise from "../store/Exercise";
import ExerciseStore from "../store/ExerciseStore";

export default {
name: "DeleteExercisePopUp",
  props: {
    exercise: Exercise,
    store: ExerciseStore
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteExercise() {
      this.store.remove(this.exercise);
    }
  }
}
</script>

<style scoped>

</style>