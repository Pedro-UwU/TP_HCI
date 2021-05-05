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
        Ordenar por
        <v-icon>mdi-order-alphabetical-ascending</v-icon>
      </v-btn>
    </template>
    <v-list class="quinary px-3 pb-4" light>
      <v-radio-group
          hide-details
          v-model="radios"
          mandatory
      >
        <v-radio
            label="Puntuación"
            value="rating"
        ></v-radio>
        <v-radio
            label="Nombre de la rutina"
            value="nameRoutine"
        ></v-radio>
        <v-radio
            label="Nombre del creador"
            value="nameCreator"
        ></v-radio>
      </v-radio-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "Order",
  data () {
    return {
      closeOnContentClick: false,
      rating: true,
      nameRoutine: false,
      nameCreator: false,
      radios: null
    }
  }
}
</script>

<style scoped>

</style>