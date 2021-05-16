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
          v-for="index in categorys.length"
          :key="index-1"
          :label="categorys[index-1]"
          :value="index-1"
          @click="changeShowedRoutines()"
        ></v-radio>
      </v-radio-group>
    </v-list>
  </v-menu>
</template>

<script>
import {RoutineApi} from "../js/RoutineApi";
import {UserApi} from "../js/user";
import {GetRoutinesParametersStore} from "../store/GetRoutinesParametersStore";
import {GetMyRoutinesParametersStore} from "../store/GetMyRoutinesParametersStore";

export default {
  name: "Order",
  props: {
    page: Number,
    size: Number,
    wPage: Number
  },
  data () {
    return {
      closeOnContentClick: true,
      rating: true,
      nameRoutine: false,
      nameCreator: false,
      radios: 1,
      categorys: [
        'Categoria',
        'Fecha de creacion',
        'Dificultad',
        'Puntuacion'
      ]
    }
  },
  methods: {
    changeShowedRoutines() {
      switch (this.wPage) {
        case 0:
          RoutineApi.getRoutines(GetRoutinesParametersStore.page,
            GetRoutinesParametersStore.size, this.translate(), "desc").then(() => {
            GetRoutinesParametersStore.orderBy = this.translate();
          })
          break;
        case 1:
          UserApi.myRoutines(GetRoutinesParametersStore.page,
              GetRoutinesParametersStore.size,
              this.translate(),
              GetMyRoutinesParametersStore.direction).then(()  => {
            GetMyRoutinesParametersStore.orderBy = this.translate();
          })
          break;
      }
    },
    translate() {
      switch (this.radios) {
        case 0:
          return 'categoryId'
        case 1:
          return 'date'
        case 2:
          return 'difficulty'
        case 3:
          return 'averageRating'
      }
    }
  }
}
</script>

<style scoped>

</style>