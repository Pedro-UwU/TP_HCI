<template>
  <div class="justify-end">
    <v-dialog
        v-model="dialog"
        scrollable
        max-width="700px"
    >
      <template v-slot:activator="{ on, attrs }" class="width">
        <v-btn
            class="black--text quinary my-3 mx-5"
            rounded
            :ripple="true"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon class="mr-2">mdi-plus</v-icon>
          Agregar Ejercicio
        </v-btn>
      </template>
      <v-card class="primary" height="600px">
        <v-card-title>
          <span class="headline">Mis Ejercicios</span>
        </v-card-title>
        <v-card-text>
          <v-row class="mx-0 my-2 mt-0">
            <v-text-field
                color="white"
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar"
                single-line
                hide-details
                clearable
                dark
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
              :items-per-page="itemsPerPage"
              show-select
              item-key="id"
              height="max"
            />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog=false; selected= []"
          >
            Cerrar
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              :disabled="selected.length === 0"
              @click="dialog = false;
                addExercise(); selected= []"
          >
            Agregar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Cycle from "../store/Cycle";
import {isNumber} from "../js/NumberLib";
import {ExerciseApi} from "../js/ExerciseApi";
import Exercise, {exerciseType} from "../store/Exercise";
import {ExStore} from "../store/ExStore";
import {RStore} from "../store/RStore";


export default {
  name: "AddExercisePopUp",
  props: {
    cycle: Cycle,
    cycleContent: Array
  },
  data () {
    return {
      itemsPerPage: 10000,
      selected: [],
      dialog: false,
      singleSelect: false,
      search: '',
      isValid: false,
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Descripcion', sorteable: false, value: 'detail'},
        { text: 'Categoría', value: 'type' },
      ],
      store: ExStore
    }
  },
  methods: {
    addExercise() {
      for (let i = 0; i < this.selected.length; i++) {
        let element = {
          exercise: this.selected[i],
          duration: 0,
          repetitions: 0,
        }
        this.cycleContent.push(element)
        console.log(JSON.stringify(element));
        console.log(this.cycleContent);
      }
      console.log(RStore)
    },
    getExercises() {
      ExStore.exercises = [];
      ExerciseApi.getExercises(0, this.itemsPerPage).then(res => {
        for (let i = 0; i<res.content.length; i++) {
          let exInfo = res.content[i];
          let type = (exInfo.type === 'exercise') ? exerciseType.EXERCISE:exerciseType.REST;
          let newEx = new Exercise(exInfo.name, exInfo.detail, type, exInfo.id);
          ExStore.exercises.push(newEx)
        }
      })
    },
    checkNumber(evt) {
      return isNumber(evt);
    }
  },
  beforeMount() {
    this.getExercises()
  }

}
</script>

<style scoped>
.width {
  width: 100px;
}
</style>