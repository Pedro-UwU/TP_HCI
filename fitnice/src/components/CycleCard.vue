<template>
  <v-card class="secondary">
    <v-row class="align-center">
      <v-icon color="grey" class="ml-8" @click="enableNameEdit()" >mdi-pencil-outline</v-icon>
      <v-col cols="3" class="subtitle-1 mt-4 mb-n3">
        <v-text-field v-if="!nameEnabled"
                      disabled
                      :value="cycle.name"
                      solo
                      dense
                      flat
                      background-color="transparent"
                      class="color-disabled"
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
                      @keydown.enter="enableNameEdit()"
                      v-on:change="cycleNewName($event)"
        ></v-text-field>
      </v-col>
      <v-col>
        <div>
          <c-delete-cycle-pop-up :routine="routine" :cycle="cycle"/>
        </div>
      </v-col>
      <v-spacer/>
      <v-col class="text-right">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" class="subtitle-1 mt-4 mb-n3">
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
                      @keydown.enter="enabledModText()"
                      @keypress="isNumber($event)"
                      v-on:change="repetitionsValue($event)"
        ></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-icon color="grey" @click="enabledModText()" >
          mdi-pencil-outline
        </v-icon>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
          :headers="headers"
          :items="cycle.exercises"
          hide-default-footer
          v-model="selected"

          :single-select=false
          item-key="name"
          show-select
        >
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer/>
      <c-remove-exercise-from-cycle-btn class=" my-1" :cycle="cycle" :selected="selected"/>
      <c-add-exercise-pop-up :cycle="cycle" class="my-1"></c-add-exercise-pop-up>
<!--          <v-btn @click="openExPopUp()" class="black&#45;&#45;text quinary my-3 mx-5" rounded>-->
<!--            <v-icon left>mdi-plus</v-icon>-->
<!--            Agregar Ejercicio-->
<!--          </v-btn>-->
    </v-row>
  </v-card>
</template>

<script>
import Cycle from "../store/Cycle";
import AddExercisePopUp from "./AddExercisePopUp";
import {isNumber} from "../lib/NumberLib";
import DeleteCyclePopUp from "./DeleteCyclePopUp";
import Routine from "../store/Routine";
import RemoveExerciseFromCycleBtn from "./RemoveExerciseFromCycleBtn";

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle,
    cycleName: String,
    routine: Routine
  },
  data: () => {
    return {
      enabled: false,
      selected: [],
      repetitionEnabled: false,
      nameEnabled: false,
      headers: [
        {text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name'},
        {text: 'Formato', value: 'format'},
        {text: 'Cantidad', filterable: false, sortable: false, value: 'amount'},
        {text: 'Categoría', value: 'category'},
        {text: 'Descripcion', value: 'description'},
        {text: 'Actions', value: 'actions', sortable: false}
      ]
    }
  },
  methods: {
    openExPopUp: () => {
    },
    isNumber(evt) {
      return isNumber(evt);
    },
    enabledModText() {
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
    }
  },
  components: {
    CAddExercisePopUp: AddExercisePopUp,
    CDeleteCyclePopUp: DeleteCyclePopUp,
    CRemoveExerciseFromCycleBtn: RemoveExerciseFromCycleBtn
  }
}
</script>

<style scoped>

</style>
