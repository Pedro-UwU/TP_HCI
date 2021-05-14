<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <h2 class="subtitles">Rutinas</h2>
      <v-container>
        <c-create-routine-btn></c-create-routine-btn>
        <c-filters></c-filters>
        <c-order></c-order>
      </v-container>
    </v-container>
    <v-container>
      <v-container>
        <v-row no-gutters style="background: none"
        >
          <v-col
              v-for="n in 4"
              :key="n"
              cols="12"
              xs="12"
              sm="6"
              md="4"
              lg="3"
              xl="2"
              align="center"
              class="mb-5"
          >
            <c-routine-card
                class="routine"
                title="Rutina 5"
                stars="5"
                fav="true"
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Filters from "../components/Filters";
import RoutineCard from "../components/RoutineCard";
import CreateRoutineBtn from "../components/CreateRoutineBtn";
import Order from "../components/Order";
import {Api} from "../js/api";

export default {
  name: "Routines",
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
    }
  }
}
</script>

<style scoped>
.subtitles {
  margin-top: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left: 30px;
  display: inline;
}
</style>
