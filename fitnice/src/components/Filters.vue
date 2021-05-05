<template>
    <v-menu offset-y transition="slide-y-transition" :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            class="white--text"
            :plain="true"
            color="white"
            :ripple="false"
            v-bind="attrs"
            v-on="on"
        >
          Filtros
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>
      <v-list class="quinary" light>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-title>Categoría</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title], i) in categories"
            :key="i"
            link
            >
            <v-checkbox
                class="mb-n5 my-n2"
                :v-model="checkbox"
                :label="title"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-title>Dificultad</v-list-item-title>
          </template>
          <v-list-item
              v-for="([title], i) in difficulties"
              :key="i"
              link
          >
            <v-checkbox
                class="my-n5"
                :v-model="checkbox"
                :label="title"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  name: "Filters",
  data: () => ({
    categories: [
        ["Bíceps"],
        ["Tríceps"],
        ["Abdominales"],
        ["Espalda"],
        ["Gluteos"],
        ["Gemelos"]
    ],
    difficulties: [
        ["Principiante"],
        ["Intermedio"],
        ["Avanzado"]
    ],
    closeOnContentClick: false,
    checkbox: false
  }),
}
</script>

<style scoped>

</style>
