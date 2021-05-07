<template>
  <v-card class="primary lighten-1">
    <v-row class="align-center">
      <v-col>
        <div class="white--text text-h5 mx-3">
          {{cycle.name}}
        </div>
      </v-col>

      <v-col class="text-right">
        <div class="text-h5 white--text align-center" >Repeticiones:</div>
      </v-col>
      <v-col cols="1" lg="1" md="2">
        <v-text-field
            class="mr-2 ml-n3 align-center mt-4 text-h6 input"
            label="3"
            filled
            solo
            rounded
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table class="elevation-1 secondary mx-3"
          :headers="headers"
          :items="cycle.exercises"
          hide-default-footer
          :single-select=false
          show-select
        >
        </v-data-table>
      </v-col>
    </v-row>
    <v-row>
        <v-spacer></v-spacer>
          <v-btn @click="openExPopUp()" class="black--text quinary my-3 mx-5" rounded>
            <v-icon left>mdi-plus</v-icon>
            Agregar Ejercicio
          </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import Cycle from "../store/Cycle";

export default {
  name: "CycleCard",
  props: {
    cycle: Cycle,
    cycleName: String
  },
  data: () => {
    return {
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
      console.log("GASD")
    }
  }
}
</script>

<style scoped>

</style>