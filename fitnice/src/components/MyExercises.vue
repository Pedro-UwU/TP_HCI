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
        ></v-text-field>
        <v-btn class="mt-4 mx-1 ml-3" :disabled="selected.length===0" @click="removeSelected(); selected=[]" icon color="white">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-row>
    </v-card-title>
    <v-data-table
        class="elevation-1 secondary"
        v-model="selected"
        :headers="headers"
        :items="store.exercises"
        :search="search"
        :items-per-page="select.items"
        hide-default-footer
        :single-select="singleSelect"
        show-select
        item-key="name"
        :page.sync="page"
        @page-count="pageCount = $event"
    >
      <v-edit-dialog></v-edit-dialog>
    </v-data-table>
    <div class="text-center pt-2 px-16 mx-16">
      <v-pagination
          v-model="page"
          :length="pageCount"
      ></v-pagination>
    </div>
  </v-card>
</template>

<script>
import ExerciseStore from "../store/ExerciseStore";
import ExcercisePopUp from "./ExercisePopUp";

export default {

  name: "MyExcercises",
  data () {
    return {
      singleSelect: false,
      selected: [],
      page: 1,
      pageCount: 0,
      select: { items: 10 },
      search: '',
      headers: [
        { text: 'Nombre', align: 'start'/*, filterable: true*/, value: 'name' },
        { text: 'Formato', value: 'format' },
        { text: 'Cantidad', filterable: false, sortable: false, value: 'amount' },
        { text: 'Categoría', value: 'category' },
        { text: 'Descripcion', value: 'description'}
      ],
      store: new ExerciseStore()
    }
  },
  methods: {
    removeSelected() {
      let i;
      for (i= 0; i < this.selected.length; i++) {
        this.store.remove(this.selected[i])
      }
    }
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