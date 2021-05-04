<template>
  <v-card class="my-2 image">
    <v-img :src=src height="100%" width="100%" class="align-end">
      <v-container class="bottom-image align-content-center">
        <v-card-actions style="color: white">
          <h3 v-text=title></h3>
          <v-spacer></v-spacer>
          <v-btn @click="switchFav()"
                 icon color="white">
            <v-icon v-if="fav">mdi-heart</v-icon>
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
export default {
  name: "RoutineCard",
  props: {
    title: String,
    src: String,
    stars: Number,
    fav: Boolean
  },
  methods: {
    switchFav: function () {
      this.fav = !this.fav;
      console.log(this.fav);
    }
  },
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