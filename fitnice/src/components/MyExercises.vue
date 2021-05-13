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
        :items-per-page="itemsPerPage"
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
      <v-container>
      <v-btn class="primary" rounded small @click="previousPage()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn class="transparent" text disabled elevation="0">{{page}}</v-btn>
      <v-btn class="primary" rounded small @click="nextPage()">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import {ExerciseStoreEx} from "../store/ExerciseStore";
import ExercisePopUp from "./ExercisePopUp";
import DeleteExercisePopUp from "./DeleteExercisePopUp";
import {ExerciseApi} from "../js/ExerciseApi";
import Exercise, {exerciseType} from "../store/Exercise";


const itemsPerPage = 2;

export default {

  name: "MyExcercises",
  data () {
    return {
      singleSelect: false,
      selected: [],
      exercises: [],
      page: 1,
      pageCount: 0,
      itemsPerPage: itemsPerPage,
      search: '',
      headers: [
        { text: 'Nombre', width: "15%", align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Categoría', align:'start', width: '15%', value: 'type' },
        { text: 'Descripción', width: '60%', value: 'detail'},
        { text: 'Acciones', width:'10%', value: 'actions', sortable: false}
      ],
      store: ExerciseStoreEx
    }
  },
  components: {
    CExercisePopUp: ExercisePopUp,
    CDeleteExercisePopUp: DeleteExercisePopUp
  },
  methods: {
    nextPage() {
      try {
        ExerciseApi.getExercises(this.page, itemsPerPage).then(res => {
          if (res.content.length === 0) {
            return;
          }
          this.page++;
          this.exercises = [];
          for (let i = 0; i<res.content.length; i++) {
            let exInfo = res.content[i];
            let type = (exInfo.type === 'exercise') ? exerciseType.EXERCISE:exerciseType.REST;
            let newEx = new Exercise(exInfo.name, exInfo.detail, type, exInfo.id);
            this.exercises.push(newEx)
        }
        })
      } catch (e) {
        console.log(e);
      }
    },
    previousPage() {
      if (this.page > 1) {
        this.page--;
        try {
          ExerciseApi.getExercises(this.page-1, itemsPerPage).then(res => {
            this.exercises = [];
            for (let i = 0; i<res.content.length; i++) {
              let exInfo = res.content[i];
              let type = (exInfo.type === 'exercise') ? exerciseType.EXERCISE:exerciseType.REST;
              let newEx = new Exercise(exInfo.name, exInfo.detail, type, exInfo.id);
              this.exercises.push(newEx)
            }
          })
        } catch (e) {
          console.log(e);
        }
      }

    }
  },
  beforeCreate() {
    ExerciseApi.getExercises(0, itemsPerPage).then(res => {
      for (let i = 0; i<res.content.length; i++) {
        let exInfo = res.content[i];
        let type = (exInfo.type === 'exercise') ? exerciseType.EXERCISE:exerciseType.REST;
        let newEx = new Exercise(exInfo.name, exInfo.detail, type, exInfo.id);
        this.exercises.push(newEx)
      }
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