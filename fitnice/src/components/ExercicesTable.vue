<template>
  <v-card class="secondary">
    <v-card-title>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        class="elevation-1 secondary"
        :headers="headers"
        :items="this.props.exercises.exercises"
        hide-default-footer
        :page.sync="page"
        @page-count="pageCount = $event"
    >
    </v-data-table>
    <div class="text-center pt-2 px-16 mx-16">
      <v-pagination
          v-model="page"
          :length="pageCount"
      ></v-pagination>
      <v-select
          item-color="white"
          v-model="select"
          :items="listItems"
          item-text="items"
          item-value="items"
          label="Items por página"

          class="width"
          return-object
      ></v-select>
    </div>
  </v-card>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";

export default {
  name: "ExercicesTable",
  data: () => {
    return {
      headers: [
        {text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name'},
        {text: 'Formato', value: 'format'},
        {text: 'Cantidad', filterable: false, sortable: false, value: 'amount'},
        {text: 'Categoría', value: 'category'},
        {text: 'Descripcion', value: 'description'}
      ]
    }
  },
  props: {
    exercices: ExerciseStore
  }
}
</script>

<style scoped>

</style>