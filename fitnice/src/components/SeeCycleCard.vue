<template>
  <v-card class="secondary">
    <v-row class="align-center">
      <v-col cols="3" class="subtitle-1 mt-4 mb-n3">
        <v-text-field
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
      </v-col>
      <v-spacer/>
      <v-col class="text-right">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" class="subtitle-1 mt-4 mb-n3">
        <v-text-field
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
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
                      :headers="headers"
                      :items="cycle.exercises"
                      hide-default-footer
                      item-key="name"
        >
          <template v-slot:item.actions="{ item }">
            <c-exercise-pop-up :exercise="item"/>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Cycle from "../store/Cycle";
import ExercisePopUp from "./ExercisePopUp";

export default {
  name: "SeeCycleCard",
  props: {
    cycle: Cycle,
    cycles: []
  },
  data: () => {
    return {
      enabled: false,
      headers: [
        {text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name'},
        {text: 'Formato', value: 'format'},
        {text: 'Cantidad', filterable: false, sortable: false, value: 'amount'},
        {text: 'Categoría', value: 'category'},
        {text: 'Descripcion', value: 'description'}
      ]
    }
  },
  methods: {
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
    CExercisePopUp: ExercisePopUp
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