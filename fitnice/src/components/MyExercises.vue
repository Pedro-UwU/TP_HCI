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
        :items="exercises"
        :search="search"
        :items-per-page="select.items"
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

export default {
  name: "MyExcercises",
  data () {
    return {
      page: 1,
      pageCount: 0,
      select: { items: 10 },
      listItems: [
        { items: 5 },
        { items: 10 },
        { items: 20 },
        { items: 100 }
      ],
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
.width {
  width: 10%;
  margin-right: 45%;
  margin-left: 45%;
}
</style>