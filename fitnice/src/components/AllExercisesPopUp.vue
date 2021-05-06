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
      <v-card>
        <v-card-title>Mis Rutinas</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-container>
            <v-row>
              <v-col>Nombre</v-col>
              <v-col>Categoria</v-col>
              <v-col>Formato</v-col>
            </v-row>
          </v-container>
          <v-container v-for="exercise in store.exercises" :key="exercise">
            <v-row>
              <v-checkbox @change="addRemToList()" class="mt-1">
              </v-checkbox>
              <v-col>{{exercise.name}}</v-col>
              <v-col>{{exercise.category}}</v-col>
              <v-col>{{exercise.format}}</v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
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

export default {
  name: "AllExercisesPopUp",
  data () {
    return {
      dialogm1: '',
      dialog: false,
      singleSelect: false,
      selected: [],
      page: 1,
      pageCount: 0,
      select: { items: 10 },
      search: '',
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Formato', value: 'format' },
        { text: 'Cantidad', filterable: false, sortable: false, value: 'amount' },
        { text: 'Categoría', value: 'category' },
        { text: 'Descripcion', value: 'description'},
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      store: ExerciseStoreEx
    }
  },
  methods: {
    addRemToList() {
      if ()
    }
  }
}
</script>

<style scoped>

</style>