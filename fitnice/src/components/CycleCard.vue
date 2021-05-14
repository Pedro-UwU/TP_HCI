<template>
  <v-card class="secondary">
    <v-row class="align-center" justify="end">
      <v-col cols="3" class="subtitle-1 mt-4 mb-n3 ml-3">
        <v-text-field v-if="!nameEnabled"
                      disabled
                      :value="cycle.name"
                      solo
                      dense
                      flat
                      background-color="transparent"
                      class="color-disabled text-h6"
                      v-model="cycle.name"
        >
        </v-text-field>
        <v-text-field v-else
                      :value="cycle.name"
                      solo
                      light
                      dense
                      flat
                      background-color="quinary"
                      class="color-enabled"
                      v-on:change="cycleNewName($event)"
        ></v-text-field>
      </v-col>
      <v-spacer/>
      <v-col cols="3" class="text-right mr-auto">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" class="subtitle-1 mr-auto mt-4 mb-n3">
        <v-text-field v-if="!repetitionEnabled"
                      disabled
                      :value="cycle.repetitions"
                      solo
                      dense
                      flat
                      background-color="transparent"
                      class="color-disabled"
                      v-model="cycle.repetitions"
        >
        </v-text-field>
        <v-text-field v-else
                      :value="cycle.repetitions"
                      solo
                      light
                      dense
                      flat
                      background-color="quinary"
                      class="color-enabled"
                      @keypress="isNumber($event)"
                      v-on:change="repetitionsValue($event)"
        ></v-text-field>
      </v-col>
      <v-col class="mr-auto">
        <v-row>
          <v-btn class="white--text transparent "
                 icon
                 solo
                 plain
                 :ripple="true"
                 @click="enabledModText();enableNameEdit()">
            <v-icon>
              mdi-pencil-outline
            </v-icon>
          </v-btn>
        <c-delete-cycle-pop-up :cycles="cycles" :cycle="cycle"/>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
          :headers="headers"
          :items="cycleExercises"
          hide-default-footer
          v-model="selected"

          item-key="name"
        >
          <template v-slot:item.actions="{ item }">
            <v-row>
              <c-exercise-pop-up :exercise="item"/>
              <c-delete-exercise-pop-up :store="cycle" :exercise="item"/>
            </v-row>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <c-add-exercise-pop-up :cycle="cycle" :cycle-content="cycleExercises" class="my-1"></c-add-exercise-pop-up>
    </v-row>
  </v-card>
</template>

<script>
import Cycle from "../store/Cycle";
import AddExercisePopUp from "./AddExercisePopUp";
import {isNumber} from "../js/NumberLib";
import DeleteCyclePopUp from "./DeleteCyclePopUp";
import ExercisePopUp from "./ExercisePopUp";
import DeleteExercisePopUp from "./DeleteExercisePopUp";

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle,
    cycleExercises: Array,
    cycles: Array
  },
  data: () => {
    return {
      enabled: false,
      selected: [],
      repetitionEnabled: false,
      nameEnabled: false,
      headers: [
        {text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name'},
        {text: 'Categoría'},
        {text: 'Descripción'}
      ]
    }
  },
  methods: {
    isNumber(evt) {
      return isNumber(evt);
    },
    enabledModText() {

      console.log("this.cycle")
      this.repetitionEnabled = !this.repetitionEnabled;
    },
    repetitionsValue(newValue) {
      this.cycle.repetitions = parseInt(newValue);
    },
    cycleNewName(name) {
      this.cycle.name = name;
    },
    enableNameEdit() {
      this.nameEnabled = !this.nameEnabled;
    },
    removeSelected() {
      for (let i =0; i < this.selected.length; i++){
        this.cycle.remove(this.selected[i]);
      }
    }
  },
  components: {
    CAddExercisePopUp: AddExercisePopUp,
    CDeleteCyclePopUp: DeleteCyclePopUp,
    CExercisePopUp: ExercisePopUp,
    CDeleteExercisePopUp: DeleteExercisePopUp
  }
}
</script>

<style scoped>
.color-disabled >>> input {
  color: white;
}
.color-enabled >>> input {
  color: black;
}
</style>
