<template>
  <v-card class="secondary mb-5">
    <v-card-title>
      <v-row class="mx-0">
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Buscar"
            single-line
            hide-details
            clearable
            color="white"
        ></v-text-field>
      </v-row>
    </v-card-title>
    <v-data-table
        class="elevation-1 secondary"
        v-model="selected"
        :headers="headers"
        :items="exercises"
        :search="search"
        :items-per-page="select.items"
        hide-default-footer
        item-key="name"
        :page.sync="page"
        @page-count="pageCount = $event"
    >
      <template v-slot:item.actions="{ item }">
        <v-row>
          <c-exercise-pop-up :exercise="item"/>
          <c-delete-exercise-pop-up :store="store" :exercise="item"/>
        </v-row>
      </template>
    </v-data-table>
    <div class="text-center pt-2 px-16 mx-16">
      <v-pagination
          v-model="page"
          :length="pageCount"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
import ExercisePopUp from "./ExercisePopUp";
import DeleteExercisePopUp from "./DeleteExercisePopUp";
import {ExerciseApi} from "../js/ExerciseApi";
import Exercise from "../store/Exercise";

export default {

  name: "MyExcercises",
  data () {
    return {
      singleSelect: false,
      selected: [],
      exercises: [],
      page: 1,
      pageCount: 0,
      select: { items: 10 },
      search: '',
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Categoría', value: 'type' },
        { text: 'Descripción', value: 'detail'},
        { text: 'Acciones', value: 'actions', sortable: false}
      ],
      store: ExerciseStoreEx
    }
  },
  components: {
    CExercisePopUp: ExercisePopUp,
    CDeleteExercisePopUp: DeleteExercisePopUp
  },
  beforeCreate() {
    ExerciseApi.getExercises(0, 10).then(res => {
      for (let i = 0; i<res.content.length; i++) {
        let exInfo = res.content[i];
        let newEx = new Exercise(exInfo.name, exInfo.detail, exInfo.type, exInfo.id);
        this.exercises.push(newEx)
      }
      console.log(this.exercises);
    })
  }
}
</script>

<style scoped>
.width {
  width: 10%;
  margin-right: 45%;
  margin-left: 45%;
}
</style>