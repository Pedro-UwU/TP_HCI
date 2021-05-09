<template>
  <v-card class="my-2 image">
    <v-img :src=src
           height="100%"
           width="100%"
           class="align-end"
           @click="$router.push('/seeRoutine'+routineId)"
    >
      <v-container class="bottom-image align-content-center">
        <v-card-actions style="color: white">
          <h3 :v-text="(routine !== undefined) ? routine.name : 'Error'"></h3>
          <v-spacer></v-spacer>
          <v-btn @click="switchFav()"
                 icon color="white">
            <v-icon v-if=Boolean(fav)>mdi-heart</v-icon>
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
            :value=Number(stars)
            align="center"
        ></v-rating>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import {RoutineStoreEx} from "../store/RoutineStore";

export default {
  name: "RoutineCard",
  props: {
    routineId: Number,
    src: String,
    stars: Number,
    fav: Boolean
  },
  data: () => ({
    routines: RoutineStoreEx,
    routine: {}
  }),
  methods: {
    switchFav: function () {
      this.fav = !this.fav;
    }
  },
  mounted() {
    this.routine = this.routines.get(this.routineId);
  }
}
</script>

<style scoped>
.bottom-image {
  background: #141D26;
  opacity: 80%;

}
.image {
  border-radius: 20px !important;
  width: 250px;
  height: 250px;
}
</style>