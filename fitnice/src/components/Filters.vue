<template>
  <div class="text-center">
    <v-menu offset-y transition="slide-y-transition" :close-on-content-click="closeOnContentClick">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            icon
            color="white"
            :ripple="false"
            id="no-background-hover"
            v-bind="attrs"
            v-on="on"
        >
          Filtros
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </template>
      <v-list>
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
              :v-model="checkbox"
              :label="title"
            ></v-checkbox>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-menu>
<!--    </v-list-group>-->
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
    closeOnContentClick: false,
    checkbox: false
  }),
}
</script>

<style scoped>
#no-background-hover::before {
  background-color: transparent !important;
}
</style>