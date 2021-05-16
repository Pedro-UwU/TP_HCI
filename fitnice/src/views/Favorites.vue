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
            v-for="(n,index) in store.favourites.length"
            :key="index"
            align="center"
            cols="3"
        >
          <c-routine-card class="routine" :routine="store.favourites[index]"/>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="store.favourites.lenght!==0" class="text-center pt-2 px-16 mx-16">
      <v-container>
        <v-btn class="primary" rounded small @click="previousPage()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn class="transparent" text disabled elevation="0">{{store.page}}</v-btn>
        <v-btn class="primary" rounded small @click="nextPage()">
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
    </div>
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
    page: FavouritesStore.page,
    store: FavouritesStore
  }),
  components :{
    CHeader: Header,
    CFilters: Filters,
    COrder: Order,
    CRoutineCard: RoutineCard
  },
  methods: {
    nextPage(){
      if (!this.store.data.isLastPage) {
        this.page += 1;
        FavouritesStore.page = this.page
        FavouriteApi.getFavourites(this.page).then(() => {
          this.store = FavouritesStore
        })
      }
    },
    previousPage() {
      if (this.page>0) {
        this.page -= 1;
        FavouritesStore.page = this.page
        FavouriteApi.getFavourites(FavouritesStore).then(() => {
          this.store = FavouritesStore
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
    FavouriteApi.getFavourites(FavouritesStore.page).then(() => {
      this.store = FavouritesStore
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
  display: inline;
}
</style>