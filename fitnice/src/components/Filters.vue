<template>
  <div class="text-center">
    <v-menu offset-y transition="slide-y-transition" :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="blue"
            v-bind="attrs"
            v-on="on"
        >
          Filtros
        </v-btn>
      </template>
      <v-list>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>Categoría</v-list-item-title>
          </template>
          <v-list-item
            v-for="([title], i) in categories"
            :key="i"
            link
            >
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group :value="true">
          <template v-slot:activator>
            <v-list-item-title>Dificultad</v-list-item-title>
          </template>
          <v-list-item
              v-for="([title], i) in difficulties"
              :key="i"
              link
          >
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "Filters",
  data: () => ({
    // items: [
    //   { title: 'Click Me' },
    //   { title: 'Click Me' },
    //   { title: 'Click Me' },
    //   { title: 'Click Me 2' },
    // ],
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
    closeOnContentClick: false
  }),
}
</script>

<style scoped>

</style>