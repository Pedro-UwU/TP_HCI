<template>
  <v-app style="background: #192633">
    <c-header></c-header>
    <v-container>
      <v-row align="center">
        <h2 class="subtitles">Mis Favoritos</h2>
        <v-spacer></v-spacer>
        <c-filters></c-filters>
        <c-order></c-order>
      </v-row>
    </v-container>
    <v-container>
      <v-row no-gutters style="background: none" align-content="center">
        <v-col
            v-for="(n,index) in 10"
            :key="index"
            align="center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="routines[index]"/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Filters from "../components/Filters";
import Order from "../components/Order";
import RoutineCard from "../components/RoutineCard";
import {Api} from "../js/api";
import {FavouriteApi} from "../js/FavouriteApi";
import {FavouritesStore} from "../store/FavouritesStore";

export default {
name: "Favorites",
  data: () => ({
    routines: null
  }),
  components :{
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    CRoutineCard: RoutineCard
  },
  beforeCreate() {
    if (Api.token === undefined){
      this.$router.push('/login');
    } else {
      FavouriteApi.getFavourites().then(() => {
        this.routines = FavouritesStore.favourites
      })
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