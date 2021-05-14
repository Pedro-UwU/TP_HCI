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
          <span>¿Desea eliminar <br>"{{exercise.exercise.name}}" ?</span>
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

export default {
name: "DeleteExercisePopUp",
  props: {
    exercise: Object,
    store: Array,
    index: Number
  },
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    deleteExercise() {
      let found = false;
      for (let i = 0; i < this.store.length; i++) {
        if (this.store[i].exercise.name ===  this.exercise.exercise.name && i === this.index) {
          this.store.splice(i, 1);
          found = true;
        }
        if (found) {
          this.store[i].order--;
        }

      }
      console.log(this.store);
    }
  }
}
</script>

<style scoped>

</style>