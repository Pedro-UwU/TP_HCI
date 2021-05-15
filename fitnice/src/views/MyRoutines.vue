<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Mis Rutinas</h2>
        <v-spacer></v-spacer>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters style="background: none" align-content="center">
        <v-col
            v-for="(n,index) in routines.length"
            :key="index"
            align="center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="routines[index]"/>
        </v-col>
      </v-row>
    </v-container>  </v-app>
</template>

<script>
// import MyRoutines from "../components/MyRoutines";
import Header from "../components/Header";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Filters from "../components/Filters";
import Order from "../components/Order";
import RoutineCard from "../components/RoutineCard";
import {Api} from "../js/api";
import {UserApi} from "../js/user";
import {MyRoutineStore} from "../store/MyRoutinesStore";

export default {
name: "MyRoutines",
  data: () => ({
    routines: [],
  }),
  components: {
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    // CMyRoutines: MyRoutines,
    CCreateRoutineBtn: CreateRoutineBtn,
    CRoutineCard: RoutineCard
  },
  beforeCreate() {
    if (Api.token === undefined){
      this.$router.push('/login');
    } else {
      UserApi.myRoutines().then(()  => {
        this.routines = MyRoutineStore.routines
      })
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