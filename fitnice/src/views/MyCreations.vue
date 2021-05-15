<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <c-routine-vs-excercise></c-routine-vs-excercise>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import RoutineVsExcercise from "../components/RoutineVsExcercise";
import {Api} from "../js/api";

export default {
  name: "MyCreations",
  components: {
    CHeader: Header,
    CRoutineVsExcercise: RoutineVsExcercise,
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
  }
}
</script>

<style scoped>

</style>