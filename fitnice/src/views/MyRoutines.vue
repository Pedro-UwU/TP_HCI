<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Mis Rutinas</h2>
        <v-spacer></v-spacer>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order :page="Number(0)" :size="Number(100)" :wPage="Number(1)"></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-if="routinesCalc!==null" no-gutters style="background: none" align-content="center">
        <v-col
            v-for="(n,index) in routinesCalc.length"
            :key="index"
            class="align-center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="routinesCalc[index]" />
        </v-col>
      </v-row>
    </v-container>  </v-app>
</template>

<script>
import Header from "../components/Header";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Filters from "../components/Filters";
import Order from "../components/Order";
import RoutineCard from "../components/RoutineCard";
import {Api} from "../js/api";
import {UserApi} from "../js/user";
import {MyRoutineStore} from "../store/MyRoutinesStore";
import {GetRoutinesParametersStore} from "../store/GetRoutinesParametersStore";

export default {
  name: "MyRoutines",
  components: {
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn,
    CRoutineCard: RoutineCard
  },
  beforeCreate() {
    if (Api.token === undefined){
      if (localStorage.getItem('token') !== null) {
        Api.token = localStorage.getItem('token')
      } else {
        this.$router.push('/login');
        return
      }
    }
    UserApi.myRoutines(
        GetRoutinesParametersStore.page,
        GetRoutinesParametersStore.size,
        GetRoutinesParametersStore.orderBy,
        GetRoutinesParametersStore.direction
    ).then(()  => {
      this.routines = MyRoutineStore.routines
    })
  },
  computed: {
    routinesCalc() {
      return MyRoutineStore.routines
    }
  },

}
</script>

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