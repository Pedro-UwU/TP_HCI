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
    <div class="text-center pt-2 px-16 mx-16">
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

<script>
import Header from "../components/Header";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Filters from "../components/Filters";
import Order from "../components/Order";
import RoutineCard from "../components/RoutineCard";
import {Api} from "../js/api";
import {UserApi} from "../js/user";
import {MyRoutineStore} from "../store/MyRoutinesStore";
import {GetMyRoutinesParametersStore} from "../store/GetMyRoutinesParametersStore";

export default {
  name: "MyRoutines",
  data: () => ({
    page: GetMyRoutinesParametersStore.page,
    store: MyRoutineStore
  }),
  components: {
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    CCreateRoutineBtn: CreateRoutineBtn,
    CRoutineCard: RoutineCard
  },
  methods: {
    nextPage(){
      if (!this.store.data.isLastPage) {
        this.page += 1;
        GetMyRoutinesParametersStore.page = this.page
        UserApi.myRoutines(
            GetMyRoutinesParametersStore.page,
            GetMyRoutinesParametersStore.size,
            GetMyRoutinesParametersStore.orderBy,
            GetMyRoutinesParametersStore.direction
        ).then(()  => {
          this.store = MyRoutineStore
        })
      }
    },
    previousPage() {
      if (this.page>0) {
        this.page -= 1;
        GetMyRoutinesParametersStore.page = this.page
        UserApi.myRoutines(
            GetMyRoutinesParametersStore.page,
            GetMyRoutinesParametersStore.size,
            GetMyRoutinesParametersStore.orderBy,
            GetMyRoutinesParametersStore.direction
        ).then(()  => {
          this.store = MyRoutineStore
        })
      }
    }
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
        GetMyRoutinesParametersStore.page,
        GetMyRoutinesParametersStore.size,
        GetMyRoutinesParametersStore.orderBy,
        GetMyRoutinesParametersStore.direction
    ).then(()  => {
      this.store = MyRoutineStore
    })
  }
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