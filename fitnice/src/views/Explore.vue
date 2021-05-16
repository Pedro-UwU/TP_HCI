<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Rutinas</h2>
        <v-spacer></v-spacer>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order :page="Number(0)" :size="Number(100)" :wPage="Number(0)"></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters style="background: none" align-content="center">
        <v-col
            v-for="(n,index) in store.routines.length"
            :key="index"
            class="align-center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="store.routines[index]" />
        </v-col>
      </v-row>
    </v-container>
    <div v-if="store.routines.lenght!==0" class="text-center pt-2 px-16 mx-16">
      <v-container>
        <v-btn class="primary" rounded small @click="previousPage()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn class="transparent" text disabled elevation="0">{{page}}</v-btn>
        <v-btn class="primary" rounded small @click="nextPage()">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
    </div>
  </v-app>
</template>

<style scoped>
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
}
.routine {
  margin-bottom: 20px;
}
</style>

<script>
import Header from "../components/Header";
import RoutineCard from "../components/RoutineCard";
import Filters from "../components/Filters";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Order from "../components/Order";
import {RoutineStore} from "../store/RoutineStore";
import {Api} from "../js/api";
import {RoutineApi} from "../js/RoutineApi";
import {GetRoutinesParametersStore} from "../store/GetRoutinesParametersStore";
import {CategoryApi} from "../js/CategoryApi";

export default {
  name: "Explore",
  data: () => ({
    page: GetRoutinesParametersStore.page,
    store: RoutineStore
  }),
  components: {
    CHeader: Header,
    CRoutineCard: RoutineCard,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn
  },
  methods: {
    nextPage(){
      if (!this.store.data.isLastPage) {
        this.page += 1;
        GetRoutinesParametersStore.page = this.page
        RoutineApi.getRoutines(
            GetRoutinesParametersStore.page,
            GetRoutinesParametersStore.size,
            GetRoutinesParametersStore.orderBy,
            GetRoutinesParametersStore.direction).then(() => {
          this.store = RoutineStore
        })
      }
    },
    previousPage() {
      if (this.page>0) {
        this.page -= 1;
        GetRoutinesParametersStore.page = this.page
        RoutineApi.getRoutines(
            GetRoutinesParametersStore.page,
            GetRoutinesParametersStore.size,
            GetRoutinesParametersStore.orderBy,
            GetRoutinesParametersStore.direction).then(() => {
          this.store = RoutineStore
        })
      }
    }
  },
  beforeCreate: function () {
    if (Api.token === undefined) {
      if (localStorage.getItem('token') !== null) {
        Api.token = localStorage.getItem('token')
      } else {
        this.$router.push('/login');
        return
      }
    }
    RoutineApi.getRoutines(
        GetRoutinesParametersStore.page,
        GetRoutinesParametersStore.size,
        GetRoutinesParametersStore.orderBy,
        GetRoutinesParametersStore.direction).then(() => {
          this.store = RoutineStore
    })
    CategoryApi.postCategory('Brazos')
    CategoryApi.postCategory('Piernas')
    CategoryApi.postCategory('Pecho')
    CategoryApi.postCategory('Biceps')
    CategoryApi.postCategory('Triceps')
    CategoryApi.postCategory('Espalda')
    this.page = 0;
  },
}
</script>
