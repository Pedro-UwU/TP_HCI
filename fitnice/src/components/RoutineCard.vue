<template>
  <v-card class="my-2 image">
    <v-img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
           height="100%"
           width="100%"
           class="align-end"
    >
      <v-container class="bottom-image align-content-center">
        <v-card-actions style="color: white">
          <a @click="$router.push('/seeRoutine'+routine.id)" class="text-style">
            <h3 v-text="routine.name"></h3>
          </a>
          <v-spacer></v-spacer>
          <v-btn
              @click="favRoutine()"
                 icon color="white">

            <v-icon v-if=Boolean(true)>mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <v-rating
            color="white"
            background-color="white"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            half-increments
            length="5"
            size="20"
            :value="routine.averageRating"
            align="center"
        ></v-rating>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import {FavouriteApi} from "../js/FavouriteApi";

export default {
  name: "RoutineCard",
  props: {
    routine: Object
  },
  methods: {
    favRoutine() {
      FavouriteApi.postFav(this.routine.id);
      console.log("agregado");
    }
  }
}
</script>

<style scoped>
.bottom-image {
  background: #141D26;
  opacity: 80%;
  height: 100px;
}
.image {
  border-radius: 20px !important;
  width: 250px;
  height: 250px;
}
.text-style {
  text-decoration: underline;
  color: white;
  display: block;
  text-align: center;
}
</style>