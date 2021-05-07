<template>
  <v-row class="justify-end mx-2">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="black--text quinary my-3 mx-5"
            rounded
            v-bind="attrs"
            v-on="on"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>
          Agregar Ejercicio
        </v-btn>
      </template>
      <v-card class="primary">
        <v-card-title>
          <span class="headline">Mis Ejercicios</span>
        </v-card-title>
        <v-card-text>
          <v-row class="mx-0 my-2 mt-0">
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar"
                single-line
                hide-details
                clearable
            ></v-text-field>
          </v-row>
          <div >
            <v-data-table
              class="elevation-1 secondary"
              v-model="selected"
              :headers="headers"
              :items="store.exercises"
              :search="search"
              hide-default-footer
              :single-select="singleSelect"
              :items-per-page=10000
              show-select
              item-key="name"
              height="max"
              fixed-header
            >
            </v-data-table>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false;"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              :disabled="selected.length === 0"
              @click="dialog = false;
                addExercise();"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
import Cycle from "../store/Cycle";

export default {
  name: "AddExercisePopUp",
  props: {
    cycle: Cycle
  },
  data () {
    return {
      selected: [],
      dialog: false,
      singleSelect: false,
      search: '',
      isValid: false,
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Formato', value: 'format' },
        { text: 'Cantidad', filterable: false, sortable: false, value: 'amount' },
        { text: 'Categoría', value: 'category' },
        { text: 'Descripcion', value: 'description'},
      ],
      store: ExerciseStoreEx
    }
  },
  methods: {
    addExercise() {
      for (let i = 0; i < this.selected.length; i++) {
        this.cycle.add(this.selected[i])
      }
    }
  }

}
</script>

<style scoped>

</style>