<template>
  <v-card class="secondary">
    <v-row class="align-center">
      <v-col>
        <div class="white--text text-h5 mx-3">
          {{cycle.name.toUpperCase()}}
        </div>
      </v-col>

      <v-col class="text-right">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" class="subtitle-1 mt-4 mb-n3">
        <v-text-field v-if="!enabled"
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
<!--      <div v-if="!element.enabled"-->
<!--                    id="selects"-->
<!--                    disabled-->
<!--                    :value="element.content"-->
<!--                    solo-->
<!--                    dense-->
<!--                    flat-->
<!--                    background-color="transparent"-->
<!--                    class="end-input color-disabled"-->
<!--      >-->
<!--      </div>-->
<!--      <v-text-field v-else-->
<!--                    id="selects"-->
<!--                    :value="element.content"-->
<!--                    solo-->
<!--                    dense-->
<!--                    flat-->
<!--                    background-color="quinary"-->
<!--                    class="end-input color-enabled"-->
<!--                    @keydown.enter="enabledModText(element)"-->
<!--      ></v-text-field>-->
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
          :headers="headers"
          :items="cycle.exercises"
          hide-default-footer
          :single-select=false
          item-key="name"
          show-select
        >
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
        <c-add-exercise-pop-up :cycle="cycle" class="my-0"></c-add-exercise-pop-up>
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

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle,
    cycleName: String
  },
  data: () => {
    return {
      enabled: false,
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
      this.enabled = !this.enabled;
    },
    repetitionsValue(newValue) {
      this.cycle.repetitions = parseInt(newValue);
    }
  },
  components: {
    CAddExercisePopUp: AddExercisePopUp,
  }
}
</script>

<style scoped>


</style>