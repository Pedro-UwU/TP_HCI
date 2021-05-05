<template>
  <v-card class="pa-5 quaternary">
    <v-text-field
        color="black"
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
    ></v-text-field>
    <v-data-table
        class="black"
        fixed-header
        :headers="headers"
        :items="exercises"
        :search="search"
    >
    </v-data-table>
  </v-card>
</template>

<script>

export default {
  name: "MyExcercises",
  data () {
    return {
      search: '',
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Formato', value: 'format' },
        { text: 'Cantidad', filterable: false, sortable: false, value: 'amount' },
        { text: 'Categoría', value: 'category' }
      ],
      exercises: [
        { name: 'Zeus', format: 'Repeticiones', amount: 10, category: 'Espalda' },
        { name: 'Athena', format: 'Tiempo (s)', amount: 30, category: 'Piernas' },
        { name: 'Hades', format: 'Tiempo (s)', amount: 40, category: 'Abdominales' }
      ],
    }
  },
}
</script>

<style scoped>

</style>