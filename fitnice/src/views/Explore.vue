<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Rutinas</h2>
        <v-spacer></v-spacer>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-if="routines!==null" no-gutters style="background: none" align-content="center">
        <v-col
            v-for="(n,index) in routines.length"
            :key="index"
            align="center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="routines[index]" />
        </v-col>
      </v-row>
    </v-container>
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

export default {
  name: "Explore",
  data: () => ({
    routines: null
  }),
  components: {
    CHeader: Header,
    CRoutineCard: RoutineCard,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn
  },
  beforeCreate() {
    if (Api.token === undefined){
      this.$router.push('/login');
    } else {
      RoutineApi.getRoutines(0, 100).then(() => {
        this.routines = RoutineStore.routines
      })
    }
  }
}
</script>