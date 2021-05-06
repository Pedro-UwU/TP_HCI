<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="white--text"
            :plain="true"
            color="white"
            :ripple="false"
            v-bind="attrs"
            v-on="on"
        >
          Agregar Ejercicio
          <v-icon>mdi-plus</v-icon>
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
          <v-data-table
              class="elevation-1 secondary"
              v-model="selected"
              :headers="headers"
              :items="store.exercises"
              :search="search"
              hide-default-footer
              :single-select="singleSelect"
              show-select
              item-key="name"
          >
          </v-data-table>
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
              :disabled="!isValid"
              @click="dialog = false;
                addExcercise();"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
// import Exercise from "../store/Exercise";
// import Cycle from "../store/Cycle";

export default {
  name: "AllExercisesPopUp",
  data () {
    return {
      dialog: false,
      singleSelect: false,
      search: '',
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

}
</script>

<style scoped>

</style>